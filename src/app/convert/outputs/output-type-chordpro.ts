import { IOutputConverter } from "./output-converter.model";
import { ISong } from "../models/song.model";
import { IOutputFile } from "../models/file.model";

export class OutputTypeChordpro implements IOutputConverter {
  readonly name = 'ChordPro';
  readonly fileExt = 'cho';
  readonly url = 'https://chordpro.org/';

  convertToType(song: ISong): IOutputFile {
    const newLine = '\n';
    const blankLine = newLine + newLine;

    let fileContent = `{title: ${song.title}}`;

    //Loop through the song info attributes
    for (const info of song.info) {
      if (info.value.toString().trim().length > 0) {
        fileContent += newLine;
        fileContent += `{${info.name}: ${info.value}}`;
      }
    }

    fileContent += blankLine;

    //Add the song lyrics, skipping sections with blank lyrics
    for (const slide of song.slides) {
      if (slide.lyrics.trim().length > 0) {
        fileContent += slide.title + ':';
        fileContent += newLine;
        fileContent += slide.lyrics.trim();
        fileContent += blankLine;
      }
    }

    return {
      songData: song,
      fileName: `${song.fileName}.${this.fileExt}`,
      outputContent: fileContent.trim(), //remove any trailing whitespace
    };
  }
}
