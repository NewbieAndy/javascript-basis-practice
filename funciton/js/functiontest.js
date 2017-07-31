/**
 * Created by Mtime on 2016/11/16.
 */
var functionTest = function () {
    // alert("hello world");
    // var funtest = funtest1(1);
    // alert(funtest)
    // alert(typeof funtest)
    // fun1(callbackfunction);
    // jsonTest();
    // var father = callBaceFather(callBack);
    // alert(father);
    argumentsTest("a","b","c");
}

var callBaceFather = function(callBac){
    callBac();
}

var callBack = function(){
    return "callBack";
}

var jsonTest = function () {
    var param = {
        a: 123,
        b: "345"
    };
    alert(param);
    param.c = "789";
    alert(param);
}

var funtest1 = function (a) {
    if (a == 1) {
        return true;
    } else {
        return "输入错误";
    }

}

var fun1 = function (callback) {
    callback("!!!data.....");
}

var callbackfunction = function (data) {
    alert("callbackfunction running.." + data);
}

var argumentsTest =  function(){
    var length = arguments.length;
    console.log("arg length:"+length);

}

