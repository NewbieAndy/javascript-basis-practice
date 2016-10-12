window.onload=function(){
	/**
	 * JavaScript闭包
	 */
	test2();
}

function test2(){
	function Counter(start){
		var count = start;
		return {
			increment:function(){
				count++;
			},
			get:function(){
				return count;
			}
		}
	}
	
	var foo = Counter(4);
	foo.increment();
	alert(foo.get());
}

function test1(){
	function a(){
		var i=0;
		function b(){
			alert(++i);
		}
		return b;
	}
	
	var c = a();
	c();
	c();
}
