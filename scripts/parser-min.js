var TextCleaner=function(){function e(e){for(var t="",r=0;r<e.length;r++){for(var n=e.charCodeAt(r).toString(16).toUpperCase();n.length<4;)n="0"+n;n="\\u"+n,t+=n}return t}function t(t){return t.replace(o,function(t){var r=e(t);return i[r]||""})}for(var r=["\\u00E2\\u201A\\u00AC","\\u00C3\\u20AC","\\u00C3","\\u00E2\\u20AC\\u0161","\\u00C3\\u201A","\\u00C6\\u2019","\\u00C3\\u0192","\\u00E2\\u20AC\\u017E","\\u00C3\\u201E","\\u00E2\\u20AC\\u00A6","\\u00C3\\u2026","\\u00E2\\u20AC","\\u00C3\\u2020","\\u00E2\\u20AC\\u00A1","\\u00C3\\u2021","\\u00CB\\u2020","\\u00C3\\u02C6","\\u00E2\\u20AC\\u00B0","\\u00C3\\u2030","\\u00C5","\\u00C3\\u0160","\\u00E2\\u20AC\\u00B9","\\u00C3\\u2039","\\u00C5\\u2019","\\u00C3\\u0152","\\u00C3","\\u00C5\\u00BD","\\u00C3\\u017D","\\u00C3","\\u00C3","\\u00E2\\u20AC\\u02DC","\\u00C3\\u2018","\\u00E2\\u20AC\\u2122","\\u00C3\\u2019","\\u00E2\\u20AC\\u0153","\\u00C3\\u201C","\\u00E2\\u20AC","\\u00C3\\u201D","\\u00E2\\u20AC\\u00A2","\\u00C3\\u2022","\\u00E2\\u20AC\\u201C","\\u00C3\\u2013","\\u00E2\\u20AC\\u201D","\\u00C3\\u2014","\\u00CB\\u0153","\\u00C3\\u02DC","\\u00E2\\u201E\\u00A2","\\u00C3\\u2122","\\u00C5\\u00A1","\\u00C3\\u0161","\\u00E2\\u20AC\\u00BA","\\u00C3\\u203A","\\u00C5\\u201C","\\u00C3\\u0153","\\u00C3","\\u00C5\\u00BE","\\u00C3\\u017E","\\u00C5\\u00B8","\\u00C3\\u0178","\\u00C3","\\u00C2\\u00A1","\\u00C3\\u00A1","\\u00C2\\u00A2","\\u00C3\\u00A2","\\u00C2\\u00A3","\\u00C3\\u00A3","\\u00C2\\u00A4","\\u00C3\\u00A4","\\u00C2\\u00A5","\\u00C3\\u00A5","\\u00C2\\u00A6","\\u00C3\\u00A6","\\u00C2\\u00A7","\\u00C3\\u00A7","\\u00C2\\u00A8","\\u00C3\\u00A8","\\u00C2\\u00A9","\\u00C3\\u00A9","\\u00C2\\u00AA","\\u00C3\\u00AA","\\u00C2\\u00AB","\\u00C3\\u00AB","\\u00C2\\u00AC","\\u00C3\\u00AC","\\u00C2\\u00AD","\\u00C3\\u00AD","\\u00C2\\u00AE","\\u00C3\\u00AE","\\u00C2\\u00AF","\\u00C3\\u00AF","\\u00C2\\u00B0","\\u00C3\\u00B0","\\u00C2\\u00B1","\\u00C3\\u00B1","\\u00C2\\u00B2","\\u00C3\\u00B2","\\u00C2\\u00B3","\\u00C3\\u00B3","\\u00C2\\u00B4","\\u00C3\\u00B4","\\u00C2\\u00B5","\\u00C3\\u00B5","\\u00C2\\u00B6","\\u00C3\\u00B6","\\u00C2\\u00B7","\\u00C3\\u00B7","\\u00C2\\u00B8","\\u00C3\\u00B8","\\u00C2\\u00B9","\\u00C3\\u00B9","\\u00C2\\u00BA","\\u00C3\\u00BA","\\u00C2\\u00BB","\\u00C3\\u00BB","\\u00C2\\u00BC","\\u00C3\\u00BC","\\u00C2\\u00BD","\\u00C3\\u00BD","\\u00C2\\u00BE","\\u00C3\\u00BE","\\u00C2\\u00BF","\\u00C3\\u00BF"],n=["€","À","Á","‚","Â","ƒ","Ã","„","Ä","…","Å","†","Æ","‡","Ç","ˆ","È","‰","É","Š","Ê","‹","Ë","Œ","Ì","Í","Ž","Î","Ï","Ð","‘","Ñ","’","Ò","“","Ó","”","Ô","•","Õ","–","Ö","—","×","˜","Ø","™","Ù","š","Ú","›","Û","œ","Ü","Ý","ž","Þ","Ÿ","ß","à","¡","á","¢","â","£","ã","¤","ä","¥","å","¦","æ","§","ç","¨","è","©","é","ª","ê","«","ë","¬","ì","­","í","®","î","¯","ï","°","ð","±","ñ","²","ò","³","ó","´","ô","µ","õ","¶","ö","·","÷","¸","ø","¹","ù","º","ú","»","û","¼","ü","½","ý","¾","þ","¿","ÿ"],i={},a=0;a<r.length;a++)i[r[a]]=n[a];r.sort(function(e,t){return t.length-e.length});var o=new RegExp(r.join("|"),"g");return{ConvertWin1252ToUtf8:t}}(),JSZip=function(e,t){this.files={},this.root="",e&&this.load(e,t)};JSZip.signature={LOCAL_FILE_HEADER:"PK",CENTRAL_FILE_HEADER:"PK",CENTRAL_DIRECTORY_END:"PK",ZIP64_CENTRAL_DIRECTORY_LOCATOR:"PK",ZIP64_CENTRAL_DIRECTORY_END:"PK",DATA_DESCRIPTOR:"PK\b"},JSZip.defaults={base64:!1,binary:!1,dir:!1,date:null,compression:null},JSZip.prototype=function(){var e=function(e,t,r){this.name=e,this.data=t,this.options=r};e.prototype={asText:function(){var e=this.data;return null===e||"undefined"==typeof e?"":(this.options.base64&&(e=JSZipBase64.decode(e)),this.options.binary&&(e=JSZip.prototype.utf8decode(e)),e)},asBinary:function(){var e=this.data;return null===e||"undefined"==typeof e?"":(this.options.base64&&(e=JSZipBase64.decode(e)),this.options.binary||(e=JSZip.prototype.utf8encode(e)),e)},asUint8Array:function(){return JSZip.utils.string2Uint8Array(this.asBinary())},asArrayBuffer:function(){return JSZip.utils.string2Uint8Array(this.asBinary()).buffer}};var t=function(e,t){var r="",n;for(n=0;t>n;n++)r+=String.fromCharCode(255&e),e>>>=8;return r},r=function(){var e={},t,r;for(t=0;t<arguments.length;t++)for(r in arguments[t])arguments[t].hasOwnProperty(r)&&"undefined"==typeof e[r]&&(e[r]=arguments[t][r]);return e},n=function(e){return e=e||{},e.base64===!0&&null==e.binary&&(e.binary=!0),e=r(e,JSZip.defaults),e.date=e.date||new Date,null!==e.compression&&(e.compression=e.compression.toUpperCase()),e},i=function(t,r,i){var s=a(t);if(s&&o.call(this,s),i=n(i),i.dir||null===r||"undefined"==typeof r)i.base64=!1,i.binary=!1,r=null;else if(JSZip.support.uint8array&&r instanceof Uint8Array)i.base64=!1,i.binary=!0,r=JSZip.utils.uint8Array2String(r);else if(JSZip.support.arraybuffer&&r instanceof ArrayBuffer){i.base64=!1,i.binary=!0;var u=new Uint8Array(r);r=JSZip.utils.uint8Array2String(u)}else i.binary&&!i.base64&&(i.optimizedBinaryString!==!0&&(r=JSZip.utils.string2binary(r)),delete i.optimizedBinaryString);return this.files[t]=new e(t,r,i)},a=function(e){"/"==e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return t>0?e.substring(0,t):""},o=function(e){if("/"!=e.slice(-1)&&(e+="/"),!this.files[e]){var t=a(e);t&&o.call(this,t),i.call(this,e,null,{dir:!0})}return this.files[e]},s=function(e,r,n){var i=r!==e.name,a=e.asBinary(),o=e.options,s,u;s=o.date.getHours(),s<<=6,s|=o.date.getMinutes(),s<<=5,s|=o.date.getSeconds()/2,u=o.date.getFullYear()-1980,u<<=4,u|=o.date.getMonth()+1,u<<=5,u|=o.date.getDate();var l=null!==a&&0!==a.length;if(n=o.compression||n,!JSZip.compressions[n])throw n+" is not a valid compression method !";var c=JSZip.compressions[n],d=l?c.compress(a):"",f="";return f+="\n\x00",f+=i?"\x00\b":"\x00\x00",f+=l?c.magic:JSZip.compressions.STORE.magic,f+=t(s,2),f+=t(u,2),f+=l?t(this.crc32(a),4):"\x00\x00\x00\x00",f+=l?t(d.length,4):"\x00\x00\x00\x00",f+=l?t(a.length,4):"\x00\x00\x00\x00",f+=t(r.length,2),f+="\x00\x00",{header:f,compressedData:d}};return{load:function(e,t){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(t){var n=[],i,a,o,s;for(i in this.files)this.files.hasOwnProperty(i)&&(o=this.files[i],s=new e(o.name,o.data,r(o.options)),a=i.slice(this.root.length,i.length),i.slice(0,this.root.length)===this.root&&t(a,s)&&n.push(s));return n},file:function(e,t,r){if(1===arguments.length){if(e instanceof RegExp){var n=e;return this.filter(function(e,t){return!t.options.dir&&n.test(e)})}return this.filter(function(t,r){return!r.options.dir&&t===e})[0]||null}return e=this.root+e,i.call(this,e,t,r),this},folder:function(e){if(!e)return this;if(e instanceof RegExp)return this.filter(function(t,r){return r.options.dir&&e.test(t)});var t=this.root+e,r=o.call(this,t),n=this.clone();return n.root=r.name,n},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!=e.slice(-1)&&(e+="/"),t=this.files[e]),t)if(t.options.dir)for(var r=this.filter(function(t,r){return r.name.slice(0,e.length)===e}),n=0;n<r.length;n++)delete this.files[r[n].name];else delete this.files[e];return this},generate:function(e){e=r(e||{},{base64:!0,compression:"STORE",type:"base64"});var n=e.compression.toUpperCase();if(!JSZip.compressions[n])throw n+" is not a valid compression method !";var i=[],a=[],o=0;for(var u in this.files)if(this.files.hasOwnProperty(u)){var l=this.files[u],c=this.utf8encode(l.name),d="",f="",p=s.call(this,l,c,n);d=JSZip.signature.LOCAL_FILE_HEADER+p.header+c+p.compressedData,f=JSZip.signature.CENTRAL_FILE_HEADER+"\x00"+p.header+"\x00\x00\x00\x00\x00\x00"+(this.files[u].options.dir===!0?"\x00\x00\x00":"\x00\x00\x00\x00")+t(o,4)+c,o+=d.length,a.push(d),i.push(f)}var h=a.join(""),C=i.join(""),g="";g=JSZip.signature.CENTRAL_DIRECTORY_END+"\x00\x00\x00\x00"+t(a.length,2)+t(a.length,2)+t(C.length,4)+t(h.length,4)+"\x00\x00";var v=h+C+g;switch(e.type.toLowerCase()){case"uint8array":return JSZip.utils.string2Uint8Array(v);case"arraybuffer":return JSZip.utils.string2Uint8Array(v).buffer;case"blob":return JSZip.utils.string2Blob(v);case"base64":return e.base64?JSZipBase64.encode(v):v;default:return v}},crc32:function(e,t){if(""===e||"undefined"==typeof e)return 0;var r=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];"undefined"==typeof t&&(t=0);var n=0,i=0;t=-1^t;for(var a=0,o=e.length;o>a;a++)i=255&(t^e.charCodeAt(a)),n=r[i],t=t>>>8^n;return-1^t},clone:function(){var e=new JSZip;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e},utf8encode:function(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);128>n?t+=String.fromCharCode(n):n>127&&2048>n?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},utf8decode:function(e){for(var t="",r=0,n=0,i=0,a=0,o=0;r<e.length;)n=e.charCodeAt(r),128>n?(t+=String.fromCharCode(n),r++):n>191&&224>n?(a=e.charCodeAt(r+1),t+=String.fromCharCode((31&n)<<6|63&a),r+=2):(a=e.charCodeAt(r+1),o=e.charCodeAt(r+2),t+=String.fromCharCode((15&n)<<12|(63&a)<<6|63&o),r+=3);return t}}}(),JSZip.compressions={STORE:{magic:"\x00\x00",compress:function(e){return e},uncompress:function(e){return e}}},JSZip.support={arraybuffer:function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array}(),uint8array:function(){return"undefined"!=typeof Uint8Array}(),blob:function(){if("undefined"==typeof ArrayBuffer)return!1;var e=new ArrayBuffer(0);try{return 0===new Blob([e],{type:"application/zip"}).size}catch(t){}try{var r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder);return r.append(e),0===r.getBlob("application/zip").size}catch(t){}return!1}()},JSZip.utils={string2binary:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(255&e.charCodeAt(r));return t},string2Uint8Array:function(e){if(!JSZip.support.uint8array)throw new Error("Uint8Array is not supported by this browser");for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n<e.length;n++)r[n]=e.charCodeAt(n);return r},uint8Array2String:function(e){if(!JSZip.support.uint8array)throw new Error("Uint8Array is not supported by this browser");for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},string2Blob:function(e){if(!JSZip.support.blob)throw new Error("Blob is not supported by this browser");var t=JSZip.utils.string2Uint8Array(e).buffer;try{return new Blob([t],{type:"application/zip"})}catch(r){}try{var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder);return n.append(t),n.getBlob("application/zip")}catch(r){}throw new Error("Bug : can't construct the Blob.")}};var JSZipBase64=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:function(t,r){for(var n="",i,a,o,s,u,l,c,d=0;d<t.length;)i=t.charCodeAt(d++),a=t.charCodeAt(d++),o=t.charCodeAt(d++),s=i>>2,u=(3&i)<<4|a>>4,l=(15&a)<<2|o>>6,c=63&o,isNaN(a)?l=c=64:isNaN(o)&&(c=64),n=n+e.charAt(s)+e.charAt(u)+e.charAt(l)+e.charAt(c);return n},decode:function(t,r){var n="",i,a,o,s,u,l,c,d=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<t.length;)s=e.indexOf(t.charAt(d++)),u=e.indexOf(t.charAt(d++)),l=e.indexOf(t.charAt(d++)),c=e.indexOf(t.charAt(d++)),i=s<<2|u>>4,a=(15&u)<<4|l>>2,o=(3&l)<<6|c,n+=String.fromCharCode(i),64!=l&&(n+=String.fromCharCode(a)),64!=c&&(n+=String.fromCharCode(o));return n}}}(),saveAs=saveAs||navigator.msSaveBlob&&navigator.msSaveBlob.bind(navigator)||function(e){"use strict";var t=e.document,r=function(){return e.URL||e.webkitURL||e},n=e.URL||e.webkitURL||e,i=t.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in i,o=function(r){var n=t.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,e,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(n)},s=e.webkitRequestFileSystem,u=e.requestFileSystem||s||e.mozRequestFileSystem,l=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},c="application/octet-stream",d=0,f=[],p=function(){for(var e=f.length;e--;){var t=f[e];"string"==typeof t?n.revokeObjectURL(t):t.remove()}f.length=0},h=function(e,t,r){t=[].concat(t);for(var n=t.length;n--;){var i=e["on"+t[n]];if("function"==typeof i)try{i.call(e,r||e)}catch(a){l(a)}}},C=function(t,n){var l=this,p=t.type,C=!1,g,v,y=function(){var e=r().createObjectURL(t);return f.push(e),e},m=function(){h(l,"writestart progress write writeend".split(" "))},S=function(){(C||!g)&&(g=y(t)),v&&(v.location.href=g),l.readyState=l.DONE,m()},b=function(e){return function(){return l.readyState!==l.DONE?e.apply(this,arguments):void 0}},A={create:!0,exclusive:!1},w;return l.readyState=l.INIT,n||(n="download"),a?(g=y(t),i.href=g,i.download=n,o(i),l.readyState=l.DONE,void m()):(e.chrome&&p&&p!==c&&(w=t.slice||t.webkitSlice,t=w.call(t,0,t.size,c),C=!0),s&&"download"!==n&&(n+=".download"),v=p===c||s?e:e.open(),u?(d+=t.size,void u(e.TEMPORARY,d,b(function(e){e.root.getDirectory("saved",A,b(function(e){var r=function(){e.getFile(n,A,b(function(e){e.createWriter(b(function(r){r.onwriteend=function(t){v.location.href=e.toURL(),f.push(e),l.readyState=l.DONE,h(l,"writeend",t)},r.onerror=function(){var e=r.error;e.code!==e.ABORT_ERR&&S()},"writestart progress write abort".split(" ").forEach(function(e){r["on"+e]=l["on"+e]}),r.write(t),l.abort=function(){r.abort(),l.readyState=l.DONE},l.readyState=l.WRITING}),S)}),S)};e.getFile(n,{create:!1},b(function(e){e.remove(),r()}),b(function(e){e.code===e.NOT_FOUND_ERR?r():S()}))}),S)}),S)):void S())},g=C.prototype,v=function(e,t){return new C(e,t)};return g.abort=function(){var e=this;e.readyState=e.DONE,h(e,"abort")},g.readyState=g.INIT=0,g.WRITING=1,g.DONE=2,g.error=g.onwritestart=g.onprogress=g.onwrite=g.onabort=g.onerror=g.onwriteend=null,e.addEventListener("unload",p,!1),v}(self),parser=function(){function e(e,t){var n=t.data,i=t.name;try{var a=i.split("."),o=a.slice(-1)[0].toLowerCase(),s=i.replace("."+o,""),u=n.replace(/^data:.*;base64,/,""),l=r.decode(u),c;$.each(parser.formats,function(e,t){return t.testFormat(o,l)?(c=t.convert,!1):void 0}),$.isFunction(c)?parser.songList.push({name:s,data:c(l,s)}):parser.errorList.push("The file <strong>"+i+"</strong> cannot be parsed either because <strong>."+o.toUpperCase()+"</strong> files are not supported, or this file is improperly formatted!")}catch(d){window.console&&window.console.error(d),parser.errorList.push("There was an error reading the file <strong>"+i+"</strong>")}}function t(e){parser.songList.length&&parser.outputs[parser.outputFormat](parser.songList,e)}var r={decode:function(e){var t=window.atob(e);try{return decodeURIComponent(window.escape(t))}catch(r){return t}},encode:function(e){return window.btoa(window.unescape(encodeURIComponent(e)))}};return{utilities:r,parseFile:e,complete:t,outputFormat:null,displayError:null,displaySuccessHtml:null,songList:[],errorList:[],formats:{},outputs:{}}}();!function(){function e(e,t){for(var r=[],i=e.match(n),a=t.replace(".txt",""),o=0;o<i.length;o++){var s=i[o].replace(/^{(.*)}/,"$1").split(":"),u=s[0].trim(),l=s[1].trim();/title/i.test(u)?a=l:r.push({name:u,value:l})}return{title:a,info:r}}function t(e){for(var t=[],r=e.replace(n,""),i=r.match(/(\w+(\s\d)*:[\r\n]+)*(.+[\n\r])+/gim),a=0;a<i.length;a++){var o=i[a].replace(/\[.+?\]|{.+?}/g,"").trim().split(/[\r\n]+/g),s="";o[0].indexOf(":")>0&&(s=o.shift().replace(":","").trim());var u=o.join("\n").trim();t.push({title:s,lyrics:u})}return t}var r="chordpro";parser.formats[r]={},parser.formats[r].testFormat=function(e,t){return/txt/i.test(e)&&/^.*{.+:.+}\s+/i.test(t)},parser.formats[r].convert=function(r,n){var i=e(r,n),a=t(r),o={title:i.title,info:i.info,slides:a};return o};var n=new RegExp(/{.+?:.+?}/gim)}(),function(){var e="json";parser.formats[e]={},parser.formats[e].testFormat=function(t){return t.toLowerCase().trim()===e},parser.formats[e].convert=function(e){try{return JSON.parse(e)}catch(t){return{}}}}(),function(){function e(e){var t=[];return e.each(function(e,n){var i=$(n),a=i.attr("label").trim(),o="",s=i.find("rvtextelement");$.each(s,function(){var e=$(this).attr("rtfdata"),t=parser.utilities.decode(e);o+=r(t)}),t.push({title:a,lyrics:o})}),t}function t(e){var t=["height","width","CCLISongTitle","CCLIDisplay","versionNumber","docType","creatorCode","lastDateUsed","usedCount","backgroundColor","drawingBackgroundColor"],r=[];$.each(e,function(e,n){$.inArray(n.name,t)<0&&""!==n.value&&r.push({name:n.name,value:n.value})});var n=new Date(Date.parse(e.lastdateused.value));return isNaN(n.getTime())||r.push({name:"Last Used On",value:n}),r}function r(e){var t=/\{\*?\\[^{}]+}|[{}]|\\[A-Za-z]+\n?(?:-?\d+)?[ ]?/g,r=/\\\n/g,n=e.replace(t,""),i=n.replace(r,"\n"),a=i.trim();return a}var n="pro4";parser.formats[n]={},parser.formats[n].testFormat=function(e){return e.toLowerCase().trim()===n},parser.formats[n].convert=function(r,n){var i=$(r),a=i.get(0).attributes,o=i.children("slides").children(),s=a.cclisongtitle&&a.cclisongtitle.value.length>0?a.cclisongtitle.value:n;return{title:s,info:t(a),slides:e(o)}}}(),function(){function e(e){var t=[];return e.each(function(){var e=$(this),n=e.find("RVDisplaySlide");n.each(function(){var n=$(this),i="",a=e.attr("name").trim(),o=n.attr("label").trim();o.length&&(a+=" - "+o);var s=n.find("RVTextElement");$.each(s,function(){var e=$(this).attr("RTFData"),t=parser.utilities.decode(e);i+=r(t)}),t.push({title:a,lyrics:i})})}),t}function t(e){var t=["height","width","CCLISongTitle","CCLIDisplay","versionNumber","docType","creatorCode","lastDateUsed","usedCount","backgroundColor","drawingBackgroundColor"],r=[];$.each(e,function(e,n){$.inArray(n.name,t)<0&&""!==n.value&&r.push({name:n.name,value:n.value})});var n=new Date(Date.parse(e.lastdateused.value));return isNaN(n.getTime())||r.push({name:"Last Used On",value:n}),r}function r(e){var t=/\{\*?\\[^{}]+}|[{}]|\\[A-Za-z]+\n?(?:-?\d+)?[ ]?/g,r=/\\\n/g,n=e.replace(t,""),i=n.replace(r,"\n"),a=i.trim();return a}var n="pro5";parser.formats[n]={},parser.formats[n].testFormat=function(e){return e.toLowerCase().trim()===n},parser.formats[n].convert=function(r,n){var i=$(r).filter("RVPresentationDocument"),a=i.get(0).attributes,o=i.find("RVSlideGrouping"),s=a.CCLISongTitle&&a.CCLISongTitle.value.length>0?a.CCLISongTitle.value:n;return{title:s,info:t(a),slides:e(o)}}}(),function(){function e(e,t,r){var n=e.split(a);n=$.grep(n,function(e){var t=e.trim().replace(/\r\n\t/g,"");return t.length>1?t:!1}),/[0-9]{1,4}/.test(n[0])&&n.splice(0,1);var i=n.length>0&&n[0].length>0?n[0]:r;i=1===i.indexOf("$")?i.substring(1,i.length):i,i=i.substring(0,i.length-+(i.lastIndexOf("$")===i.length-1));var o=[];n[1]&&o.push({name:"Artist/Author",value:n[1].trim()}),n[2]&&o.push({name:"Copyright",value:n[2].replace("$","").trim()}),n[3]&&o.push({name:"CCLI",value:n[3].trim()}),t&&o.push({name:"Keywords",value:t.trim()}),i=TextCleaner.ConvertWin1252ToUtf8(i);for(var s=0;s<o.length;s++)o[s].value=TextCleaner.ConvertWin1252ToUtf8(o[s].value);return{info:o,title:i}}function t(e){for(var t=new RegExp("^"+i+"+.{1}"+i+"+(.+)"+i+"+\\W*([\\s\\S]+)","m"),n=[],o=1;o<e.length;o++){var s=e[o].match(t),u=null!==s&&s[1]?s[1].replace(a,"").trim():"",l=null!==s&&s[2]?s[2].replace(a,"").trim():"";u=TextCleaner.ConvertWin1252ToUtf8(u),l=TextCleaner.ConvertWin1252ToUtf8(l),l=l.replace(/\/+/g,""),n.push({title:u,lyrics:l})}var c=r(e.slice(-1)[0]),d=!1;return c&&(0===n.length&&c.keywords.length>c.lastLyrics.length?(d=c.lastLyrics,n.push({title:"",lyrics:c.keywords.replace(/\/+/g,"")})):(d=c.keywords,n.length>0?n.slice(-1)[0].lyrics=c.lastLyrics:n.push({title:"",lyrics:c.lastLyrics.replace(/\/+/g,"")}))),{slides:n,keywords:d}}function r(e){var t=e.split(a);if(t=$.grep(t,function(e){var t=e.trim();return t.length>1?t:!1}),t.length>2){var r=t.splice(2).join(", ").replace(/\r\n\t/g,""),n=t[1].match(/^\W*([\s\S]+)/m)[1];return r=TextCleaner.ConvertWin1252ToUtf8(r),n=TextCleaner.ConvertWin1252ToUtf8(n),{keywords:r,lastLyrics:n}}return!1}var n="songshowplus";parser.formats[n]={},parser.formats[n].testFormat=function(e){return/sbsong/i.test(e)},parser.formats[n].convert=function(r,n){var i=r.split("<Properties>")[0].split("%"),a=t(i),o=e(i[0],a.keywords,n);return{title:o.title,info:o.info,slides:a.slides}};var i="[\\xA0\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F]",a=new RegExp(i,"g")}(),function(){function e(e){for(var t="{Title: "+e.title+"}",r=0;r<e.info.length;r++){var n=e.info[r];n.name&&n.value&&(t+="\r\n",t+="{"+n.name+": "+n.value+"}")}t+="\r\n\r\n";for(var i=0;i<e.slides.length;i++){var a=e.slides[i];(a.title.length>0||a.lyrics.length>0)&&(t+=a.title.toUpperCase()+":",t+="\r\n",t+=a.lyrics,i<e.slides.length-1&&(t+="\r\n\r\n"))}return t}var t="chordpro",r=".txt";parser.outputs[t]=function(n,i){var a=[],o=[];$.each(i,function(t,r){try{a.push({name:r.name,data:e(r.data)})}catch(n){o.push(r.name)}}),o.length&&parser.displayError(o.join(", "),"Error converting the following "+o.length+" songs!"),parser.displaySuccessHtml(a,t,r)}}(),function(){function e(e){var t='<h3 class="song-title">'+e.title+"</h3>";t+='<ul class="song-info">';for(var r=0;r<e.info.length;r++){var n=e.info[r];t+="<li><strong>"+n.name+":</strong> "+n.value+"</li>"}t+='</ul><div class="slides-container row">';for(var i=0;i<e.slides.length;i++){var a=e.slides[i],o=a.title.length<1?"&nbsp;":a.title;t+='<div class="col-xs-6 col-sm-4 col-md-3"><div class="thumbnail slide-content"><p class="slide-lyrics">'+a.lyrics+'</p><h6 class="slide-label">'+o+"</h6></div></div>"}return t+="</div>"}function t(e){var t=0;e.find(".slide-lyrics").each(function(){$(this).height()>t&&(t=$(this).height())}).css({"min-height":t})}var r="display";parser.outputs[r]=function(r,n){$.each(r,function(r,i){var a=$(e(i.data));n.append(a),t(a)})}}(),function(){var e="json",t="."+e;parser.outputs[e]=function(r){var n=[],i=[];$.each(r,function(e,t){try{n.push({name:t.name,data:JSON.stringify(t.data,null,2)})}catch(r){i.push(t.name)}}),i.length&&parser.displayError(i.join(", "),"Error converting the following "+i.length+" songs!"),parser.displaySuccessHtml(n,e,t)}}(),function(){function e(e){var r=t(e);r+=n(0);for(var a=0;a<e.slides.length;a++){var o=e.slides[a];r+=i(a+1,o.title,o.lyrics)}return r+=n(e.slides.length+1),r+='</slides><timeline timeOffSet="0" selectedMediaTrackIndex="0" unitOfMeasure="60" duration="0" loop="0"><timeCues containerClass="NSMutableArray"></timeCues><mediaTracks containerClass="NSMutableArray"></mediaTracks></timeline><bibleReference containerClass="NSMutableDictionary"></bibleReference></RVPresentationDocument>'}function t(e){for(var t="",r="",n="",i="",a="",o="",s=new Date,u=s.getFullYear()+"-"+s.getMonth()+"-"+s.getDate()+"T"+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),l=0;l<e.info.length;l++){var c=e.info[l];if(/copyright/i.test(c.name)){var d=c.value.match(/(\d{4})(.*)/);d?(d.length>1&&(i=d[1]),d.length>2&&(a=d[2])):a=c.value}else/ccli/i.test(c.name)?o=c.value:/keywords/i.test(c.name)?t=c.value:/author|artist/i.test(c.name)&&(r=c.value,n=c.value)}return'<RVPresentationDocument height="768" width="1024" versionNumber="400" docType="0" creatorCode="1349676880" lastDateUsed="'+u+'" usedCount="0" category="Song" resourcesDirectory="" backgroundColor="0 0 0 1" drawingBackgroundColor="0" notes="'+t+'" artist="'+r+'" author="'+n+'" album="" CCLIDisplay="0" CCLIArtistCredits="" CCLISongTitle="'+e.title+'" CCLIPublisher="'+a+'" CCLICopyrightInfo="'+i+'" CCLILicenseNumber="'+o+'"><slides containerClass="NSMutableArray">'}function r(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function n(e){return'<RVDisplaySlide backgroundColor="0 0 0 0" enabled="1" highlightColor="0 0 0 0" hotKey="" label="" notes="" slideType="1" sort_index="'+e+'" UUID="'+r()+'" drawingBackgroundColor="0" serialization-array-index="'+e+'"><cues containerClass="NSMutableArray"></cues><displayElements containerClass="NSMutableArray"></displayElements></RVDisplaySlide>'}function i(e,t,n){var i=["{\\rtf1\\ansi\\ansicpg1252\\cocoartf1038\\cocoasubrtf320","{\\fonttbl\\f0\\fswiss\\fcharset0 Helvetica;}","{\\colortbl;\\red255\\green255\\blue255;}","\\pard\\tx560\\tx1120\\tx1680\\tx2240\\tx2800\\tx3360\\tx3920\\tx4480\\tx5040\\tx5600\\tx6160\\tx6720\\qc\\pardirnatural","","\\f0\\fs96 \\cf1 "+n.replace(/\r\n/g,"\\\n")+"}"].join("\n"),a=parser.utilities.encode(i),o=["",'<RVDisplaySlide backgroundColor="0 0 0 0" enabled="1" highlightColor="0 0 0 0" hotKey="" label="'+t+'" notes="" slideType="1" sort_index="'+e+'" UUID="'+r()+'" drawingBackgroundColor="0" serialization-array-index="'+e+'">','	<cues containerClass="NSMutableArray"></cues>','	<displayElements containerClass="NSMutableArray">','		<RVTextElement displayDelay="0" displayName="Default" locked="0" persistent="0" typeID="0" fromTemplate="0" bezelRadius="0" drawingFill="0" drawingShadow="0" drawingStroke="0" fillColor="1 1 1 1" rotation="0" source="" adjustsHeightToFit="0" verticalAlignment="0" RTFData="'+a+'" serialization-array-index="0">','			<_-RVRect3D-_position x="20" y="20" z="0" width="984" height="728"></_-RVRect3D-_position>','			<_-D-_serializedShadow containerClass="NSMutableDictionary">','				<NSCFNumber serialization-native-value="5" serialization-dictionary-key="shadowBlurRadius"></NSCFNumber>','				<NSCalibratedRGBColor serialization-native-value="0 0 0 0.5" serialization-dictionary-key="shadowColor"></NSCalibratedRGBColor>','				<NSCFString serialization-native-value="{3.53553, -3.53553}" serialization-dictionary-key="shadowOffset"></NSCFString>',"			</_-D-_serializedShadow>",'			<stroke containerClass="NSMutableDictionary">','				<NSCachedRGBColor serialization-native-value="0 0 0 1" serialization-dictionary-key="RVShapeElementStrokeColorKey"></NSCachedRGBColor>','				<NSCFNumber serialization-native-value="1" serialization-dictionary-key="RVShapeElementStrokeWidthKey"></NSCFNumber>',"			</stroke>","		</RVTextElement>","	</displayElements>","</RVDisplaySlide>"].join("\n");return o}var a="pro4",o="."+a;parser.outputs[a]=function(t){var r=[],n=[];$.each(t,function(t,i){try{r.push({name:i.name,data:e(i.data)})}catch(a){n.push(i.name)}}),n.length&&parser.displayError(n.join(", "),"Error converting the following "+n.length+" songs!"),parser.displaySuccessHtml(r,a,o)}}(),function(){function e(e){var r=t(e);r+=n(0);for(var a=0;a<e.slides.length;a++){var o=e.slides[a];r+=i(a+1,o.title,o.lyrics)}return r+=n(e.slides.length+1),r+=["","   </groups>",'   <timeline timeOffSet="0" selectedMediaTrackIndex="0" unitOfMeasure="60" duration="0" loop="0">','      <timeCues containerClass="NSMutableArray" />','      <mediaTracks containerClass="NSMutableArray" />',"   </timeline>",'   <bibleReference containerClass="NSMutableDictionary" />','   <arrangements containerClass="NSMutableArray" />',"</RVPresentationDocument>"].join("\n")}function t(e){for(var t="",r="",n="",i="",a="",o="",s=new Date,u=s.getFullYear()+"-"+s.getMonth()+"-"+s.getDate()+"T"+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),l=0;l<e.info.length;l++){var c=e.info[l];if(/copyright/i.test(c.name)){var d=c.value.match(/(\d{4})(.*)/);d?(d.length>1&&(i=d[1]),d.length>2&&(a=d[2])):a=c.value}else/ccli/i.test(c.name)?o=c.value:/keywords/i.test(c.name)?t=c.value:/author|artist/i.test(c.name)&&(r=c.value,n=c.value)}return['<?xml version="1.0" encoding="UTF-8"?>','<RVPresentationDocument height="768" width="1024" versionNumber="500" docType="0" creatorCode="1349676880" lastDateUsed="'+u+'" usedCount="0" category="Song" resourcesDirectory="" backgroundColor="0 0 0 1" drawingBackgroundColor="0" notes="'+t+'" artist="'+r+'" author="'+n+'" album="" CCLIDisplay="0" CCLIArtistCredits="" CCLISongTitle="'+e.title+'" CCLIPublisher="'+a+'" CCLICopyrightInfo="'+i+'" CCLILicenseNumber="'+o+'" chordChartPath="">',"",'    <_-RVProTransitionObject-_transitionObject transitionType="-1" transitionDuration="1" motionEnabled="0" motionDuration="20" motionSpeed="100" />','    <groups containerClass="NSMutableArray">'].join("\n")}function r(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function n(e){return["",'<RVSlideGrouping name="" uuid="'+r()+'" color="0 0 0 0" serialization-array-index="'+e+'">','    <slides containerClass="NSMutableArray">','        <RVDisplaySlide backgroundColor="0 0 0 0" enabled="1" highlightColor="" hotKey="" label="" notes="" slideType="1" sort_index="0" UUID="'+r()+'" drawingBackgroundColor="0" chordChartPath="" serialization-array-index="0">','            <cues containerClass="NSMutableArray" />','            <displayElements containerClass="NSMutableArray" />','            <_-RVProTransitionObject-_transitionObject transitionType="-1" transitionDuration="1" motionEnabled="0" motionDuration="20" motionSpeed="100" />',"        </RVDisplaySlide>","    </slides>","</RVSlideGrouping>"].join("\n")}function i(e,t,n){var i=["{\\rtf1\\ansi\\ansicpg1252\\cocoartf1038\\cocoasubrtf320","{\\fonttbl\\f0\\fswiss\\fcharset0 Helvetica;}","{\\colortbl;\\red255\\green255\\blue255;}","\\pard\\tx560\\tx1120\\tx1680\\tx2240\\tx2800\\tx3360\\tx3920\\tx4480\\tx5040\\tx5600\\tx6160\\tx6720\\qc\\pardirnatural","","\\f0\\fs96 \\cf1 "+n.replace(/\r\n/g,"\\\n")+"}"].join("\n"),a=parser.utilities.encode(i),o=["",'<RVSlideGrouping name="'+t+'" uuid="'+r()+'" color="0 0 0 0" serialization-array-index="'+e+'">','    <slides containerClass="NSMutableArray">','        <RVDisplaySlide backgroundColor="0 0 0 0" enabled="1" highlightColor="" hotKey="" label="" notes="" slideType="1" sort_index="'+e+'" UUID="'+r()+'" drawingBackgroundColor="0" chordChartPath="" serialization-array-index="0">','            <cues containerClass="NSMutableArray" />','            <displayElements containerClass="NSMutableArray">','                <RVTextElement displayDelay="0" displayName="Default" locked="0" persistent="0" typeID="0" fromTemplate="0" bezelRadius="0" drawingFill="0" drawingShadow="0" drawingStroke="0" fillColor="1 1 1 1" rotation="0" source="" adjustsHeightToFit="0" verticalAlignment="0" RTFData="'+a+'" revealType="0" serialization-array-index="0">','                    <_-RVRect3D-_position x="20" y="20" z="0" width="984" height="728" />','                    <_-D-_serializedShadow containerClass="NSMutableDictionary">','                        <NSMutableString serialization-native-value="{3.5355301, -3.5355301}" serialization-dictionary-key="shadowOffset" />','                        <NSNumber serialization-native-value="5" serialization-dictionary-key="shadowBlurRadius" />','                        <NSColor serialization-native-value="0 0 0 0.5" serialization-dictionary-key="shadowColor" />',"                    </_-D-_serializedShadow>",'                    <stroke containerClass="NSMutableDictionary">','                        <NSColor serialization-native-value="0 0 0 1" serialization-dictionary-key="RVShapeElementStrokeColorKey" />','                        <NSNumber serialization-native-value="1" serialization-dictionary-key="RVShapeElementStrokeWidthKey" />',"                    </stroke>","                </RVTextElement>","            </displayElements>",'            <_-RVProTransitionObject-_transitionObject transitionType="-1" transitionDuration="1" motionEnabled="0" motionDuration="20" motionSpeed="100" />',"        </RVDisplaySlide>","    </slides>","</RVSlideGrouping>"].join("\n");
return o}var a="pro5",o="."+a;parser.outputs[a]=function(t){var r=[],n=[];$.each(t,function(t,i){try{r.push({name:i.name,data:e(i.data)})}catch(a){n.push(i.name)}}),n.length&&parser.displayError(n.join(", "),"Error converting the following "+n.length+" songs!"),parser.displaySuccessHtml(r,a,o)}}(),function(){function e(e){for(var t="Title: "+e.title,r=0;r<e.info.length;r++){var n=e.info[r];n.name&&n.value&&(t+="\r\n",t+=n.name+": "+n.value)}t+="\r\n\r\n";for(var i=0;i<e.slides.length;i++){var a=e.slides[i];(a.title.length>0||a.lyrics.length>0)&&(t+=a.title,t+="\r\n",t+=a.lyrics,i<e.slides.length-1&&(t+="\r\n\r\n"))}return t}var t="text",r=".txt";parser.outputs[t]=function(n){var i=[],a=[];$.each(n,function(t,r){try{i.push({name:r.name,data:e(r.data)})}catch(n){a.push(r.name)}}),a.length&&parser.displayError(a.join(", "),"Error converting the following "+a.length+" songs!"),parser.displaySuccessHtml(i,t,r)}}();
//# sourceMappingURL=./parser-min.js.map