function varAndScopeTest() {
    // test1();
    // test2();
    // test3();
    // test4();
    // instanceofTest();
    // scopeChainTest1();
    // blockScopeTest();

    // v2 = "test2";
    // varStatementTest();
}

/**
 * 只能给引用类型(对象)添加属性
 *        结论:
 *            给对象设置的属性能正常访问
 *            给基本类型设置的属性,虽然不报错,但无法访问,结果为undefined
 */
function test1() {

    /**
     * 创建一个对象 person
     */
    var person = new Object();

    /**
     * 为对象设置属性
     */
    person.name = "Amy";

    /**
     * 访问对象的属性
     */
    document.write("person.name= " + person.name);
    document.write("</br>");

    /*
     * 定义一个基本类型
     */
    var name = "Andy";

    /**
     * 为基本类似设置属性,并没有报错
     */
    name.firstname = "ma";

    /**
     * 访问基本类型的自定义属性
     */
    document.write("name.firstname=" + name.firstname);

}

/**
 * 参数传递测试-值类型
 */
function test2() {
    var count = 10;
    // 调用+10函数
    var result = addTen(count);
    document.write("count:" + count);
    document.write("</br>");
    document.write("result:" + result);
    document.write("</br>");
}

/**
 * 对参数进行+10操作
 * @param {Object} num
 */
function addTen(num) {
    return num + 10;
}

/**
 * 参数传递测试-伪引用传递
 * 输出结果为 andy
 */
function test3() {
    //创建一个对象
    var person = {};
    setName(person);
    document.write("person.name:" + person.name);
    document.write("</br>");
}

/**
 * 设置对象name属性为andy
 * @param obj
 */
function setName(obj) {
    obj.name = "andy";
}

/**
 * 对setname进行改动
 */
function setName2(obj) {
    obj.name = "andy";

    obj = {};
    obj.name = "Amy";
}

/**
 * 输出结果为 andy,并没有改变
 * setName2函数中的obj为局部对象,会被垃圾回收
 */
function test4() {
    //创建一个对象
    var person = {};
    setName2(person);
    document.write("person.name:" + person.name);
    document.write("</br>");
}

/**
 * instanceof  测试
 *            instanceof判断对象是否是某类型实例
 */
function instanceofTest() {
    var name = "andy";
    /**
     * 判断name是否是 string类型实例 ,返回false 因为基本类型不是对象 基本类似使用typeof判断
     */
    document.write("name instanceof String:" + (name instanceof String));
    document.write("</br>");
    var person = {};
    document.write("person instanceof Object:" + (person instanceof Object));
    document.write("</br>");
}

/**
 * 作用域链测试1
 *        函数内changeColor函数可以访问 color变量,是因为可以在作用域链中找到color变量
 *        反之,在函数changeColor2中报    color is not defined 异常,是因为在其作用域链中找不到
 *        color变量的定义
 *        PS:作用域链只能由内向外访问
 */
function scopeChainTest1() {

    var color = "blue";

    function changeColor() {
        document.write(color);
    }

    changeColor();
    changeColor2();
}

function changeColor2() {
    document.write(color);//color is not defined
}

/**
 * 在JS中没有块级作用域,不像在C或者Java中那种,在{}内的变量就为局部变量
 * 在JS中即便在{}中声明的变量,也是属于{}所在环境的变量
 */
function blockScopeTest() {
    if (true) {
        var color = "red";
    }
    /*
     在C或者JAVA中,此处应该是错误的,但在JS中,此处是正确的
     color是blockScopeTest函数环境下的变量
     */
    document.write(color);
    document.write("</br>");
}

/**
 * 函数测试测试
 *        使用var声明的变量,会被添加到最近的环境中
 *        不使用var声明的变量会被添加到全局环境
 */
function varStatementTest() {
    var v1 = "test1";
    document.write("局部变量:" + v1);
    document.write("</br>");
    document.write("全局变量:" + v2);
}
