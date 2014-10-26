/*!
 * LICENSE:
 * CC BY-NC-SA 3.0
 * This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
 * http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US
 */

/*global parser:false, JSZip:false, saveAs:false*/

/*=====================================================
 * OUTPUT for converting to ProPresenter 5 format
=======================================================*/

(function() {
    var THIS_OUTPUT = 'pro5';
    var FILE_EXTENSION = "." + THIS_OUTPUT;

    //Extend the outputs object on the parser to allow for HTML output
    parser.outputs[THIS_OUTPUT] = function($container, songList) {

        //Loop through and convert each file and add the 
        var convertedFileContents = [];
        var errorFiles = [];
        $.each(songList, function(i, song) {
            try {
                convertedFileContents.push({
                    name: song.name,
                    data: _makeProPresenterFile(song.data)
                });
            } catch (ex) {
                errorFiles.push(song.name);
            }
        });

        //Display any errors if we have them
        if (errorFiles.length) {
            parser.displayError(errorFiles.join(", "), "Error converting the following " + errorFiles.length + " songs!");
        }

        _displaySuccessHtml($container, convertedFileContents);
    };

    //===================================
    //PRIVATE FUNCTIONS
    //===================================
    function _makeProPresenterFile(songData) {

        var ppDoc = _getPPDocBegin(songData);
        ppDoc += _makeBlankSlide(0);

        for (var i = 0; i < songData.slides.length; i++) {
            var slide = songData.slides[i];
            ppDoc += _makeSlide(i + 1, slide.title, slide.lyrics);
        }

        ppDoc += _makeBlankSlide(songData.slides.length + 1);
        ppDoc += ['',
            '   </groups>',
            '   <timeline timeOffSet="0" selectedMediaTrackIndex="0" unitOfMeasure="60" duration="0" loop="0">',
            '      <timeCues containerClass="NSMutableArray" />',
            '      <mediaTracks containerClass="NSMutableArray" />',
            '   </timeline>',
            '   <bibleReference containerClass="NSMutableDictionary" />',
            '   <arrangements containerClass="NSMutableArray" />',
            '</RVPresentationDocument>'
        ].join("\n");

        return ppDoc;
    }

    function _getPPDocBegin(songData) {
        var keywords = '';
        var artist = '';
        var author = '';
        var year = '';
        var copyright = '';
        var ccli = '';

        var now = new Date();
        var todaysDate = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + "T" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

        //Loop through each info item and fill in the correct value if it exists
        for (var i = 0; i < songData.info.length; i++) {
            var info = songData.info[i];

            if (/copyright/i.test(info.name)) {
                var ccMatches = info.value.match(/(\d{4})(.*)/);
                if (ccMatches) {
                    if (ccMatches.length > 1) {
                        year = ccMatches[1];
                    }
                    if (ccMatches.length > 2) {
                        copyright = ccMatches[2];
                    }
                } else {
                    copyright = info.value;
                }
            } else if (/ccli/i.test(info.name)) {
                ccli = info.value;
            } else if (/keywords/i.test(info.name)) {
                keywords = info.value;
            } else if (/author|artist/i.test(info.name)) {
                artist = info.value;
                author = info.value;
            }
        }
        //Return the document beginning string
        return [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<RVPresentationDocument height="768" width="1024" versionNumber="500" docType="0" creatorCode="1349676880" lastDateUsed="' + todaysDate + '" usedCount="0" category="Song" resourcesDirectory="" backgroundColor="0 0 0 1" drawingBackgroundColor="0" notes="' + keywords + '" artist="' + artist + '" author="' + author + '" album="" CCLIDisplay="0" CCLIArtistCredits="" CCLISongTitle="' + songData.title + '" CCLIPublisher="' + copyright + '" CCLICopyrightInfo="' + year + '" CCLILicenseNumber="' + ccli + '" chordChartPath="">',
            '',
            '    <_-RVProTransitionObject-_transitionObject transitionType="-1" transitionDuration="1" motionEnabled="0" motionDuration="20" motionSpeed="100" />',
            '    <groups containerClass="NSMutableArray">'
        ].join('\n');
    }

    function _generateUniqueID() {
        //Native PP ID Example: 26AAF905-8F45-4252-BFAB-4C10CCFE1476

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function _makeBlankSlide(order) {
        return ['',
            '<RVSlideGrouping name="" uuid="' + _generateUniqueID() + '" color="0 0 0 0" serialization-array-index="' + order + '">',
            '    <slides containerClass="NSMutableArray">',
            '        <RVDisplaySlide backgroundColor="0 0 0 0" enabled="1" highlightColor="" hotKey="" label="" notes="" slideType="1" sort_index="0" UUID="' + _generateUniqueID() + '" drawingBackgroundColor="0" chordChartPath="" serialization-array-index="0">',
            '            <cues containerClass="NSMutableArray" />',
            '            <displayElements containerClass="NSMutableArray" />',
            '            <_-RVProTransitionObject-_transitionObject transitionType="-1" transitionDuration="1" motionEnabled="0" motionDuration="20" motionSpeed="100" />',
            '        </RVDisplaySlide>',
            '    </slides>',
            '</RVSlideGrouping>'
        ].join('\n');
    }

    function _makeSlide(order, label, text) {
        //Returns white Helvetica text in RTF format and then Base64 encoded
        //var fakeRTF="{\\rtf1\ansi\ansicpg1252\cocoartf1038\cocoasubrtf320{\\fonttbl\\f0\\fswiss\\fcharset0 Helvetica;}{\\colortbl;\\red255\\green255\blue255;}\pard\\tx560\\tx1120\\tx1680\\tx2240\\tx2800\\tx3360\\tx3920\\tx4480\\tx5040\\tx5600\\tx6160\\tx6720\qc\pardirnatural\\f0\\fs96 \cf1 "+ text.replace("\n","\\\n")+"}";

        var fakeRTF = ['{\\rtf1\\ansi\\ansicpg1252\\cocoartf1038\\cocoasubrtf320',
            '{\\fonttbl\\f0\\fswiss\\fcharset0 Helvetica;}',
            '{\\colortbl;\\red255\\green255\\blue255;}',
            '\\pard\\tx560\\tx1120\\tx1680\\tx2240\\tx2800\\tx3360\\tx3920\\tx4480\\tx5040\\tx5600\\tx6160\\tx6720\\qc\\pardirnatural',
            '',
            '\\f0\\fs96 \\cf1 ' + text.replace(/\r\n/g, "\\\n") + '}'
        ].join("\n");

        var encodedRtf = parser.utilities.encode(fakeRTF);

        //console.log(encodedRtf);

        var slideXML = ['',
            '<RVSlideGrouping name="' + label + '" uuid="' + _generateUniqueID() + '" color="0 0 0 0" serialization-array-index="' + order + '">',
            '    <slides containerClass="NSMutableArray">',
            '        <RVDisplaySlide backgroundColor="0 0 0 0" enabled="1" highlightColor="" hotKey="" label="" notes="" slideType="1" sort_index="' + order + '" UUID="' + _generateUniqueID() + '" drawingBackgroundColor="0" chordChartPath="" serialization-array-index="0">',
            '            <cues containerClass="NSMutableArray" />',
            '            <displayElements containerClass="NSMutableArray">',
            '                <RVTextElement displayDelay="0" displayName="Default" locked="0" persistent="0" typeID="0" fromTemplate="0" bezelRadius="0" drawingFill="0" drawingShadow="0" drawingStroke="0" fillColor="1 1 1 1" rotation="0" source="" adjustsHeightToFit="0" verticalAlignment="0" RTFData="' + encodedRtf + '" revealType="0" serialization-array-index="0">',
            '                    <_-RVRect3D-_position x="20" y="20" z="0" width="984" height="728" />',
            '                    <_-D-_serializedShadow containerClass="NSMutableDictionary">',
            '                        <NSMutableString serialization-native-value="{3.5355301, -3.5355301}" serialization-dictionary-key="shadowOffset" />',
            '                        <NSNumber serialization-native-value="5" serialization-dictionary-key="shadowBlurRadius" />',
            '                        <NSColor serialization-native-value="0 0 0 0.5" serialization-dictionary-key="shadowColor" />',
            '                    </_-D-_serializedShadow>',
            '                    <stroke containerClass="NSMutableDictionary">',
            '                        <NSColor serialization-native-value="0 0 0 1" serialization-dictionary-key="RVShapeElementStrokeColorKey" />',
            '                        <NSNumber serialization-native-value="1" serialization-dictionary-key="RVShapeElementStrokeWidthKey" />',
            '                    </stroke>',
            '                </RVTextElement>',
            '            </displayElements>',
            '            <_-RVProTransitionObject-_transitionObject transitionType="-1" transitionDuration="1" motionEnabled="0" motionDuration="20" motionSpeed="100" />',
            '        </RVDisplaySlide>',
            '    </slides>',
            '</RVSlideGrouping>'
        ].join("\n");

        return slideXML;
    }

    function _displaySuccessHtml($container, convertedFileContents) {
        //Display any successes if we have them
        if (convertedFileContents.length > 0) {
            //Make some unique ID's we can select on later
            var downloadZipId = "btn-" + THIS_OUTPUT + "-download-zip";
            var downloadFilesId = "btn-" + THIS_OUTPUT + "-download-files";

            //Build up some HTML to write out
            var finalHtml = "<h1>Converted " + convertedFileContents.length + " Song File" + (convertedFileContents.length > 1 ? "s" : "") + "!</h1>";
            if (convertedFileContents.length > 1) {
                finalHtml += "<button id='" + downloadZipId + "' type='button' class='btn btn-lg btn-primary'>Download as .zip</button>";
                finalHtml += " or <button id='" + downloadFilesId + "' type='button' class='btn btn-default'>Download " + convertedFileContents.length + " individual files</button>";
            } else {
                finalHtml += "<button id='" + downloadFilesId + "' type='button' class='btn btn-lg btn-primary'>Download file</button>";
            }

            //Write the HTML to the page
            $container.html(finalHtml);

            //Add click events to each button we added above
            $("#" + downloadZipId).on("click", function() {

                //Create a new .ZIP archive
                var zip = new JSZip();

                //Go through and add each fiel to the zip
                $.each(convertedFileContents, function(i, convertedSong) {
                    zip.file(convertedSong.name + FILE_EXTENSION, convertedSong.data);
                });

                //Generate the zip file contents
                var zipContent = zip.generate({
                    type: "blob"
                });
                //Download it!
                saveAs(zipContent, "converted files.zip");
            });

            $("#" + downloadFilesId).on("click", function() {
                $.each(convertedFileContents, function(i, convertedSong) {
                    var fileBlob = new Blob([convertedSong.data], {
                        type: "text/xml;charset=utf-8"
                    });
                    saveAs(fileBlob, convertedSong.name + FILE_EXTENSION);
                });
            });
        }
    }
})();