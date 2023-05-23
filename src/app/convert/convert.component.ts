import { Component, OnInit } from '@angular/core';
import { ParserService } from './parser/parser.service';
import { IFileWithData, IOutputFile, IRawDataFile } from './models/file.model';
import { ISong } from './models/song.model';
import { IOutputConverter } from './outputs/output-converter.model';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  private readonly conversionTypeStorageKey = 'CONVERT_TO';
  // private readonly convertedFileCount = 'CONVERT_COUNT';

  displayInitialUi = true;
  outputTypesForMenu: IOutputConverter[] = [];
  inputTypesList: { name: string; ext: string }[] = [];
  selectedOutputType!: IOutputConverter;
  convertedSongsForOutput: IOutputFile[] = [];

  constructor(private readonly parserSvc: ParserService) {}

  ngOnInit(): void {
    this.buildOutputTypesList();
    this.buildInputTypesList();
  }

  private buildOutputTypesList(): void {
    this.outputTypesForMenu = [...this.parserSvc.outputConverters];

    const savedOutputTypePrefName = localStorage.getItem(this.conversionTypeStorageKey);
    //auto-select the saved preference, but if none auto-select the first type
    //It's possible for this to be `undefined` but very unlikely
    this.selectedOutputType =
      this.parserSvc.outputConverters.find((c) => c.name === savedOutputTypePrefName) ??
      //We know we weill always have output types in this array, so this is safe to assume here
      //We need to disable this rule here to avoid complexity elsewhere with it being possibly undefined
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.outputTypesForMenu[0]!;
  }

  private buildInputTypesList(): void {
    this.inputTypesList = this.parserSvc.inputConverters.map((ic) => {
      return { name: ic.name, ext: ic.fileExt };
    });
  }

  onSwitchConversionType(newType: IOutputConverter, event: Event): void {
    event.preventDefault();
    this.selectedOutputType = newType;

    localStorage.setItem(this.conversionTypeStorageKey, newType.name);
  }

  onFileDrop(files: IFileWithData[]): void {
    if (files.length) {
      this.displayInitialUi = false;
      const parsedFiles = this.parserSvc.parseFiles(files);
      this.getConvertersAndExtractData(parsedFiles);
    } else {
      //TODO: Show UI message
    }
  }

  getConvertersAndExtractData(parsedFiles: IRawDataFile[]): void {
    const convertedSongs: ISong[] = [];
    parsedFiles.forEach((f) => {
      const converter = this.parserSvc.detectInputTypeAndGetConverter(f);

      //Skip formatters for unknown formats
      if (converter) {
        convertedSongs.push(converter.extractSongData(f));
      }
    });

    if (convertedSongs.length) {
      this.convertedSongsForOutput = convertedSongs.map((s) => {
        return this.selectedOutputType.convertToType(s);
      });
    }
  }
}
