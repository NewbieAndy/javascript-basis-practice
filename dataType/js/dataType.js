var dataTypeTest = function () {
    document.writeln("JavaScript 基本数据类型start");
    document.writeln("</br>");
    /**
     * JavaScript基本数据类型
     */
        //undefined
    var a;
    document.writeln("undefined:" + typeof(a));
    document.writeln("</br>");
    //字符串
    var b = "stringType";
    document.writeln("stringType:" + typeof(b));
    document.writeln("</br>");
    //boolean
    var c = true;
    document.writeln("booleanType:" + typeof(c));
    document.writeln("</br>");
    //number
    var d = 1;
    document.writeln("numberType:" + typeof(d));
    document.writeln("</br>");
    //object
    var e = new Object();
    document.writeln("objectType:" + typeof(e));
    document.writeln("</br>");
    //object-1
    var e1 = {};
    document.writeln("objectType1:" + typeof(e1));
    document.writeln("</br>");
    //null
    var f = null;
    document.writeln("nullType:" + typeof(f));
    document.writeln("</br>");
    //Array
    var g = new Array();
    g[0] = "a";
    g[1] = "b";
    document.writeln("ArrayType:" + typeof(g));
    document.writeln("g[0]=a:" + g[0])
    document.writeln("</br>");

    //Array-1
    var h = [];
    h[0] = "h0";
    h[1] = "h1";
    h[2] = "h2";
    document.writeln("array-1:" + typeof(h));
    document.writeln("h[0]=h0:" + h[0]);
    document.writeln("</br>");

    //function
    var i = function () {

    }
    document.writeln("function:" + typeof(i));
    document.writeln("</br>");

    document.writeln("end");
}
