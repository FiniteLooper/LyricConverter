import { IInputConverter } from './input-converter.model';
import { IRawDataFile } from 'src/app/convert/models/file.model';
import { ISong } from 'src/app/convert/models/song.model';
import { LyricConverterError } from '../models/errors.model';

export class InputTypeJSON implements IInputConverter {
  readonly name = 'JSON';
  readonly fileExt = 'json';

  doesInputFileMatchThisType(rawFile: IRawDataFile): boolean {
    try {
      //Make sure this does not contain any properties that a MediaShout JSON file would contain
      const parsed = JSON.parse(rawFile.dataAsString) as Record<string, unknown>;
      return rawFile.ext.toLowerCase() === this.fileExt && typeof parsed['Folders'] === 'undefined';
    } catch {
      return false;
    }
  }

  extractSongData(rawFile: IRawDataFile): ISong {
    const returnSong: ISong = {
      fileName: rawFile.name,
      title: rawFile.name,
      info: [],
      slides: [],
    };

    //This JSON object was probably generated from LyricConverter
    //we should just be able to pass it right on through!
    const parsed = JSON.parse(rawFile.dataAsString) as ISong;

    if (this.isSongObject(parsed)) {
      returnSong.title = parsed.title;
      returnSong.info = parsed.info;
      returnSong.slides = parsed.slides;
    } else {
      throw new LyricConverterError(
        `This file is not formatted as a LyricConverter ${this.name} file`,
      );
    }

    return returnSong;
  }

  private isSongObject(possibleSong: ISong | object): possibleSong is ISong {
    return (
      Object.hasOwn(possibleSong, 'title') &&
      Object.hasOwn(possibleSong, 'info') &&
      Object.hasOwn(possibleSong, 'slides')
    );
  }
}
