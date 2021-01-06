//Unicode转中文
function ascii2zh() {
    var s = document.getElementById("ascii").value;
    if (s==""){
        alert("Unicode 文本框没有值！")
    }
    s = reconvert(s);
    document.getElementById("zh").value = s;
}

//中文转Unicode
function zh2ascii() {
    var s = document.getElementById("zh").value;
    if (s==""){
        alert("中文文本框没有值！")
    }
    s = unicode(s);
    document.getElementById("ascii").value = s;
}

//Unicode转中文
function reconvert(str) {
    str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) {
        return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2")), 16)));
    });
    str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
    });
    str = str.replace(/(&#)(\d{1,6});/gi, function ($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")));
    });
    return str;
}

//中文转Unicode
function unicode(str) {
    var value = '';
    for (var i = 0; i < str.length; i++) {
        value += '\\u' + left_zero_4(parseInt(str.charCodeAt(i)).toString(16));
    }
    return value;
}

function left_zero_4(str) {
    if (str != null && str != '' && str != 'undefined') {
        if (str.length == 2) {
            return '00' + str;
        }
    }
    return str;
}

