/**
 * 闭包的概念
 *
 */
var closureTest = function () {
    //调用外部函数
    outerFun_1("outerArg");
    //闭包,此时innerFun是一个闭包
    var innerFun = outerFun_2("outerArg");
    innerFun("innerArg");
}

/**
 * 当 function嵌套时候,内部function可以访问外部function的变量
 *  但是此时不是闭包
 */
//外部函数
var outerFun_1 = function (outerArg) {
    var outerParam = 1;
    //内部函数
    var innerFun = function (innerArg) {
        //引用外部函数变量
        alert(outerArg+"::"+innerArg+"::"+(++outerParam));
    }
    //调用内部函数
    innerFun("innerArg");
}

/**
 * 当function嵌套时,内部的function可以访问外部的function的变量
 * 当外部函数返回的 是内部的function时,就好一个闭包
 */
//外部函数
var outerFun_2 = function (outerArg) {
    var outerParam = 2;
    //内部函数
    var innerFun = function (innerArg) {
        //引用外部函数变量
        alert(outerArg+"::"+innerArg+"::"+(++outerParam));
    }
    return innerFun;
}




