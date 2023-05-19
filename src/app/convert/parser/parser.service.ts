import { Injectable } from '@angular/core';
import { IFileWithData, IRawDataFile } from '../models/file.model';
import { Utils } from '../utils/utils';

import { IInputConverter } from '../inputs/input-converter.model';
import { IOutputConverter } from '../outputs/output-converter.model';

import { InputTypeJSON } from '../inputs/input-type-json';
import { InputTypeProPresenter4 } from '../inputs/input-type-propresenter4';
import { InputTypeProPresenter5 } from '../inputs/input-type-propresenter5';
import { InputTypeText } from '../inputs/input-type-text';
import { InputTypeChordPro } from '../inputs/input-type-chordpro';

import { OutputTypeDisplaySlides } from '../outputs/output-type-display-slides';
import { OutputTypeText } from '../outputs/output-type-text';
import { OutputTypeJSON } from '../outputs/output-type-json';
import { OutputTypeProPresenter5 } from '../outputs/output-type-propresenter5';
import { OutputTypeChordpro } from '../outputs/output-type-chordpro';

@Injectable({
  providedIn: 'root',
})
export class ParserService {
  //List of all available Input Converters
  readonly inputConverters: IInputConverter[] = [
    new InputTypeProPresenter4(),
    new InputTypeProPresenter5(),
    new InputTypeChordPro(),
    new InputTypeText(),
    new InputTypeJSON()
  ];

  readonly outputConverters: IOutputConverter[] = [
    new OutputTypeProPresenter5(),
    new OutputTypeChordpro(),
    new OutputTypeText(),
    new OutputTypeDisplaySlides(),
    new OutputTypeJSON()
  ];

  parseFiles(files: IFileWithData[]): IRawDataFile[] {
    const rawDataFiles: IRawDataFile[] = [];
    for (const f of files) {
      let data = '';

      if (typeof f.data === 'string') {
        data = Utils.decodeBase64(f.data.replace(/^data:.*;base64,/, ''));
      }

      rawDataFiles.push({
        name: f.nameWithoutExt,
        ext: f.ext,
        type: f.type,
        data,
      });
    }

    return rawDataFiles;
  }

  detectInputTypeAndGetConverter(f: IRawDataFile): IInputConverter | undefined {
    return this.inputConverters.find((c: IInputConverter) => {
      return c.doesInputFileMatchThisType(f);
    });
  }
}
