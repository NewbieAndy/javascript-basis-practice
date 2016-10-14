function varAndScopeTest() {
	// test1();
    test2();
}

/**
 * 只能给引用类型(对象)添加属性
 * 		结论:
 * 			给对象设置的属性能正常访问
 * 			给基本类型设置的属性,虽然不报错,但无法访问,结果为undefined
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
 * 参数传递测试
 */
function test2() {
	var count = 10;
    // 调用+10函数
    var result = addTen(count);
	document.write("count:"+count);
	document.write("</br>");
	document.write("result:"+ result);
	document.write("</br>");
}

/**
 * 对参数进行+10操作
 * @param {Object} num
 */
function addTen(num){
	return num+10;
}
