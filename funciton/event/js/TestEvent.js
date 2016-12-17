/**
 * Created by Mtime on 2016/11/17.
 */

var TestObj = {
    fun1:function () {
        testfunccc("hello fun1");
    },
    fun2:function (a) {
        testfunccc("hello fun2 "+ a)
    }
}

var  testfunccc = function(a){
    alert(a)
}
