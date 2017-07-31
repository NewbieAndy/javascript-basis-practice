/**
 * 一直不理解闭包,在维基百科上如是解释:
 *
 * 在计算机科学中,闭包(Closure),又称词法闭包(Lexical Closure) 或函数闭包(function closure), 是引用了自由变量的函数.
 * 这个被引用的自由变量将和这个函数一同存在,即使已经离开了创造它的环境也不例外.所以,有另一种说法认为闭包是由函数和与其相
 * 关的引用环境组合而成的实体.闭包在运行时可以有多个实例,不同的引用环境和相同的函数组合可以产生不同的实例.
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




