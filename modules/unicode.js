var escapeindescription = function (obj) {
    var s = "";
    if (obj.length == 0)
        return "";
    s = obj.replace(/&/g, "&g;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\\/g, "&#3c;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
};
var escapein = function (obj) {
    var s = "";
    if (obj.length == 0)
        return "";
    s = obj.replace(/&/g, "&agt;");
    s = s.replace(/</g, "&alt;");
    s = s.replace(/>/g, "&agtc;");
    s = s.replace(/ /g, "&anbsp;");
    s = s.replace(/\\/g, "&#a3c;");
    s = s.replace(/\'/g, "&#a39;");
    s = s.replace(/\"/g, "&aquot;");
    s = s.replace(/\n/g, "<br>");
    return s;
};
var escapeOut = function (obj) {
    var s = "";
    if (obj.length == 0)
        return "";
    s = obj.replace(/&agt;/g, "&");
    s = s.replace(/&alt;/g, "<");
    s = s.replace(/&agtc;/g, ">");
    s = s.replace(/&anbsp;/g, " ");
    s = s.replace(/&#a3c;/g, "\\");
    s = s.replace(/&a#39;/g, "\'");
    s = s.replace(/&aquot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
}
var GB2312UnicodeConverter = {
    ToUnicode: function (str) {
        str = escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
        str = escapein(str)
        return str;
    }
    , ToGB2312: function (str) {
        str = escapeOut(str);
        str = unescape(str.replace(/\\u/gi, '%u'));
        return str;
    }
};
module.exports = {
    toUnicode: GB2312UnicodeConverter,
    escapein: escapein,
    escapeOut: escapeOut,
    escapeindescription: escapeindescription
}