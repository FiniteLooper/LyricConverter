import { IRawDataFile } from '../models/file.model';
import { ISong, ISongInfo, ISongSlide } from '../models/song.model';
import { IInputConverter } from './input-converter.model';

export class InputTypeSongPro implements IInputConverter {
  readonly name = 'SongPro';

  doesInputFileMatchThisType(file: IRawDataFile): boolean {
    return file.ext.toLowerCase() === 'md';
  }

  extractSongData(rawFile: IRawDataFile): ISong {
    const title = rawFile.name; //default/fallback name
    const info: ISongInfo[] = [];
    const slides: ISongSlide[] = [];

    return {
      fileName: rawFile.name,
      title,
      info,
      slides,
    };
  }
}
