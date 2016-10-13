var statementTest = function() {
	forinTest1();
	forinTest2();
}

/**
 * for-in语句:
 * 			for (property in expression) statement
 * 			一种精准的迭代语句,可以用来枚举对象的属性
 */
function forinTest1() {
	for(var propName in window) {
		document.write(propName);
		document.writeln("</br>");
	}
}

/**
 * 遍历自定义对象属性
 */
function forinTest2() {

	/**
	 * 定义个person对象
	 */
	var person = {
		"name": "andy",
		"age": 22,
		"gender": "男"
	}

	for(var propName in person) {
		document.write(propName);
		document.write("</br>");
	}

}