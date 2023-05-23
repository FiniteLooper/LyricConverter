"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongPro = void 0;
//No need to export this class, the interface is exported.
class Line {
    constructor() {
        this.parts = [];
    }
    //These methods use TypeScript type predicates
    // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
    // When these functions are used it will assure the compiler that these types do exist
    // without the developer having to add manual checks
    hasTablature() {
        return this.tablature !== undefined;
    }
    hasMeasures() {
        return this.measures !== undefined;
    }
    hasComment() {
        return this.comment !== undefined;
    }
}
class SongPro {
    static { this.SECTION_REGEX = /#\s*([^$]*)/; }
    static { this.ATTRIBUTE_REGEX = /@(\w*)=([^%]*)/; }
    static { this.CUSTOM_ATTRIBUTE_REGEX = /!(\w*)=([^%]*)/; }
    static { this.CHORDS_AND_LYRICS_REGEX = /(\[[\w#b/]+])?([\w\s',.!()_\-"]*)/gi; }
    static { this.MEASURES_REGEX = /([[\w#b/\]+\]\s]+)[|]*/gi; }
    static { this.CHORDS_REGEX = /\[([\w#b+/]+)]?/gi; }
    static { this.COMMENT_REGEX = />\s*([^$]*)/; }
    static parse(text) {
        const song = {
            attrs: {},
            sections: [],
            custom: {},
        };
        let currentSection;
        const linesArr = text.split("\n");
        for (const line of linesArr) {
            if (line.startsWith("@")) {
                this.processAttribute(song, line);
            }
            else if (line.startsWith("!")) {
                this.processCustomAttribute(song, line);
            }
            else if (line.startsWith("#")) {
                currentSection = this.processSection(song, line);
            }
            else {
                this.processLyricsAndChords(song, currentSection, line);
            }
        }
        return song;
    }
    static processAttribute(song, line) {
        const matches = this.ATTRIBUTE_REGEX.exec(line);
        if (matches?.[1] != null) {
            song.attrs[matches[1]] = matches[2];
        }
    }
    static processCustomAttribute(song, line) {
        const matches = this.CUSTOM_ATTRIBUTE_REGEX.exec(line);
        if (matches?.[1] != null && matches[2] != null) {
            song.custom[matches[1]] = matches[2];
        }
    }
    static processSection(song, line) {
        const matches = this.SECTION_REGEX.exec(line);
        const currentSection = {
            name: "",
            lines: [],
        };
        if (matches?.[1] != null) {
            currentSection.name = matches[1];
            song.sections.push(currentSection);
        }
        return currentSection;
    }
    static processLyricsAndChords(song, currentSection, text) {
        if (text !== "") {
            if (currentSection === undefined) {
                currentSection = {
                    name: "",
                    lines: [],
                };
                song.sections.push(currentSection);
            }
            const line = this.buildLine(text);
            currentSection.lines.push(line);
        }
    }
    static buildLine(text) {
        const line = new Line();
        if (text.startsWith("|-")) {
            line.tablature = text;
        }
        else if (text.startsWith("| ")) {
            line.measures = this.getMeasures(text);
        }
        else if (text.startsWith(">")) {
            line.comment = this.getComment(text);
        }
        else {
            const captures = this.scan(text, this.CHORDS_AND_LYRICS_REGEX);
            const groupedCaptures = this.chunk(captures, 2);
            for (const group of groupedCaptures) {
                const part = this.getPart(group[0], group[1]);
                if (!(part.chord === "" && part.lyric === "")) {
                    line.parts.push(part);
                }
            }
        }
        return line;
    }
    static getMeasures(text) {
        const capturesList = this.scan(text, this.MEASURES_REGEX);
        const measures = [];
        for (const capture of capturesList) {
            let chords = [];
            if (capture !== undefined) {
                chords = this.scan(capture, this.CHORDS_REGEX);
            }
            const measure = {
                chords: [],
            };
            measure.chords = chords;
            measures.push(measure);
        }
        return measures;
    }
    static getComment(text) {
        const matches = this.COMMENT_REGEX.exec(text);
        //If we got to this point, the regex will always match and have the first capture group
        //We can confidently tell typescript that these values will never be null, even with empty comment sections
        return matches[1].trim();
    }
    static getPart(inputChord, inputLyric) {
        let chord;
        let lyric = "";
        if (inputLyric != null) {
            lyric = inputLyric;
        }
        if (inputChord !== undefined) {
            chord = inputChord.replace("[", "").replace("]", "");
        }
        if (chord === undefined) {
            chord = "";
        }
        const part = {
            chord: chord.trim(),
            lyric: lyric.trim(),
        };
        return part;
    }
    static chunk(arr, chunkSize, cache = []) {
        //Adapted from https://youmightnotneed.com/lodash/#chunk
        //Chunk size must be greater than 1
        const tmp = [...arr];
        while (tmp.length)
            cache.push(tmp.splice(0, chunkSize));
        return cache;
    }
    static scan(str, pattern) {
        //Note: all patterns used here must have the 'global' flag set");
        return [...str.matchAll(pattern)].flatMap((m) => m.slice(1));
    }
}
exports.SongPro = SongPro;