window.onload=function(){
	/**
	 * JavaScript基本数据类型
	 */
	//undefined
	var a;
	alert("undefined:"+typeof(a));
	//字符串
	var b = "stringType";
	alert("stringType:"+typeof(b));
	//boolean
	var c = true;
	alert("booleanType:"+typeof(c));
	//number
	var d = 1;
	alert("numberType:"+typeof(d));
	//object
	var e = new Object();
	alert("objectType:"+typeof(e));
	//object-1
	var e1 = {};
	alert("objectType1:"+typeof(e1));
	//null
	var f = null;
	alert("nullType:"+typeof(f));
	//Array
	var g = new Array();
	g[0] = "a";
	g[1] = "b";
	alert("ArrayType:"+typeof(g));
	alert("g[0]=a:"+g[0])
	
	//Array-1
	var h = [];
	h[0] = "h0";
	h[1] = "h1";
	h[2] = "h2";
	alert("array-1:"+ typeof(h));
	alert("h[0]=h0:"+h[0]);
	
	alert("end");

}
