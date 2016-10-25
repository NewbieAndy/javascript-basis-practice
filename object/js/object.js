/**
 * Created by Mtime on 2016/10/17.
 */
function objectTest() {
    // displayInfo({
    //     name:"Andy",
    //     age:23
    //             });
    // displayInfo({
    //     name:"Tom"
    //             });

    // arrayTest1();
    // arrayTest2();
    // arrayTest3();
    // arrayStack();
    // arrayQueue();
    // arrayReverseTest();
    // arraySortTest();
    // concatTest();
    // sliceTest();
    // spliceTest();
    // indexTest();
    // iterationTest();
    // reduceTest();
    // dateTest();
}
/**
 * JS 正则表达式测试
 */
function regExpTest() {

}

/**
 * Date测试
 */
function dateTest() {
    var now = new Date();
    var number = Date.parse(now);
    var localeDateString = now.toLocaleDateString();
    document.write("now:"+now);
    document.write("</br>");
    document.write("number:"+number);
    document.write("</br>");
    document.write("localeDateString:"+localeDateString);
    document.write("</br>");
}

/**
 * JS数组reduce测试
 */
function reduceTest() {
    var arr = [1,2,3,4,5,6];
    var reduce = arr.reduce(function (prev, current, index, array) {
        return prev+current;
    });
    document.write("reduce:"+reduce);
    document.write("</br>");

    var reduceRight = arr.reduceRight(function (prev, current, index, array) {
        return prev+current;
    });

    document.write("rightReduce:"+reduceRight);
    document.write("</br>");
}

/**
 * 数组迭代测试
 */
function iterationTest() {
    var arr = ["andy1", "tom2", "amy3", "jack4"];
    var everyResult = arr.every(iterator);
    var someResult = arr.some(iterator);
    var filterResult = arr.filter(iterator);
    var mapResult = arr.map(iterator);
    document.write("everyResult:" + everyResult);
    document.write("</br>");
    document.write("someResult:" + someResult);
    document.write("</br>");
    document.write("filterResult:" + filterResult);
    document.write("</br>");
    document.write("mapResult:" + mapResult);
    document.write("</br>");

}
var iterator = function (item, index, array) {
    if (item.length > 4) {
        return true;
    } else {
        return false;
    }
}

/**
 * 数组索引测试
 */
function indexTest() {
    var arr = ["andy1", "tom2", "amy3", "andy1"];
    document.write("arr = " + arr);
    document.write("</br>");
    var indexOf = arr.indexOf("andy1");
    var lastIndexOf = arr.lastIndexOf("andy1");
    document.write("indexOf = " + indexOf);
    document.write("</br>");
    document.write("lastIndexOf= " + lastIndexOf);
    document.write("</br>");
}

/**
 * 数组切割测试
 */
function spliceTest() {
    var arr = ["andy1", "tom2", "amy3"];
    var strings = arr.splice(0, 2);
    document.write("arr:" + arr);
    document.write("</br>");
    document.write("strings:" + strings);
    document.write("</br>");
    var strings2 = arr.splice(0, 0, "andy11", "tom22");
    document.write("arr:" + arr);
    document.write("</br>");
    document.write("strings2:" + strings2);
    document.write("</br>");
}

/**
 * 数组分割测试
 */
function sliceTest() {
    var arr = ["andy1", "tom2", "amy3"];
    var arr1 = arr.slice(1);
    var arr2 = arr.slice(1, 2);
    document.write("arr:" + arr);
    document.write("</br>");
    document.write("arr1:" + arr1);
    document.write("</br>");
    document.write("arr2:" + arr2);
    document.write("</br>");
}

/**
 * 数组组合测试
 *  相当于复制,有参数则在复杂的数组后新增,无参数则单纯的复制
 */
function concatTest() {
    var arr = ["andy1", "tom2", "amy3"];
    var arr1 = arr.concat();
    var arr2 = arr.concat("jack4");
    var arr3 = arr.concat(arr);
    document.write("arr:" + arr);
    document.write("</br>");
    document.write("arr1:" + arr1);
    document.write("</br>");
    document.write("arr2:" + arr2);
    document.write("</br>");
    document.write("arr3:" + arr3);
    document.write("</br>");
    document.write("final arr:" + arr);
    document.write("</br>");
}

/**
 * JS数组排序函数测试
 *      JSsort使用的是字符串排序
 */
function arraySortTest() {
    var arr = [0, 1, 5, 10, 15];
    var arr1 = ["a", "c", "b", "ab", "ba"];

    document.write("arr:" + arr);
    document.write("</br>");
    document.write("arr1:" + arr1);
    document.write("</br>");
    var sort = arr.sort(compare);
    var sort1 = arr1.sort(compare);
    document.write("arr:" + arr);
    document.write("</br>");
    document.write("sort:" + sort);
    document.write("</br>");
    document.write("arr1:" + arr1);
    document.write("</br>");
    document.write("sort1:" + sort1);
    document.write("</br>");
}

/**
 * 排序比较函数(类似比较器) 此栗子为降序
 *      value1  在  value2 之前 返回 负数
 *      value1 在 value2  之后 返回 正数
 *      value1 == value2 返回0
 * @param value1
 * @param value2
 */
function compare(value1, value2) {
    if (value1 > value2) {
        return -1;
    } else if (value1 < value2) {
        return 1;
    } else {
        return 0;
    }
}

/**
 * JS数组倒排函数测试
 */
function arrayReverseTest() {
    var arr = ["andy1", "tom2", "amy3"];

    document.write("arr:" + arr);
    document.write("</br>");
    var reverse = arr.reverse();
    document.write("arr:" + arr);
    document.write("</br>");
    document.write("reverse:" + reverse);
    document.write("</br>");
}

/**
 * JS数组队列模式
 */
function arrayQueue() {
    var arr = ["andy1", "tom2", "amy3"];
    //添加一个
    arr.push("jack4");
    document.write("arr length:" + arr.length);
    document.write("</br>");
    var shift = arr.shift();
    document.write("arr length:" + arr.length);
    document.write("</br>");
    document.write("shift:" + shift);
    document.write("</br>");

}

/**
 * JS数组栈模式
 */
function arrayStack() {
    var arr = new Array();
    arr.push("red1", "yellow2", "black3");
    document.write("arr length:" + arr.length);
    document.write("</br>");
    var pop = arr.pop();
    document.write("pop:" + pop);
    document.write("</br>");
    document.write("arr length:" + arr.length);

}

/**
 * 数组测试-检测
 *      判断一个对象是不是数组
 */
function arrayTest3() {
    var arr = ["andy", 23, true];
    if (Array.isArray(arr)) {
        document.write("arr is Array!");
    } else {
        document.write("arr is not Array!");
    }
}

/**
 * 数组测试--属性
 */
function arrayTest2() {
    var arr = ["andy", 23, true];
    document.write("arr[0]:" + arr[0]);
    document.write("</br>");
    document.write(("arr[2]" + arr[2]));
    document.write("</br>");
    document.write("arr length:" + arr.length);
    document.write("</br>");
    arr.length = 2;
    document.write(("arr[2]" + arr[2]));
    document.write("</br>");
    document.write("arr length:" + arr.length);
}

/**
 * 数组创建测试
 */
function arrayTest1() {
    //创建数组方式1
    var arr1 = new Array();
    document.write("arr1 length:" + arr1.length);
    document.write("</br>");
    document.write("</br>");
    //创建数组方式2.指定数组大小
    var arr2 = new Array(12);
    document.write("arr2 length:" + arr2.length);
    document.write("</br>");
    document.write("</br>");
    //创建数组方式3,构造函数直接传值
    var arr3 = new Array("andy", 12);
    document.write("arr3[0]:" + arr3[0]);
    document.write("</br>");
    document.write("arr3[1]:" + arr3[1]);
    document.write("</br>");
    document.write("</br>");
    //创建数组方式4
    var arr4 = ["tom", 22, true];
    document.write("arr4[0]:" + arr4[0]);
    document.write("</br>");
    document.write("arr4[1]:" + arr4[1]);
    document.write("</br>");
    document.write("arr4[2]:" + arr4[2]);
    document.write("</br>");
    arr4[5] = "arr[5]";
    document.write("arr4[5]:" + arr4[5]);
    document.write("</br>");
    document.write("arr4 length:" + arr4.length);
    document.write("</br>");
    document.write("arr4[4]:" + arr4[4]);
}

/**
 * 显示信息
 * @param args
 */
function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string") {
        output += "Name:" + args.name + "|";
    }
    if (typeof args.age == "number") {
        output += "Age:" + args.age + "|";
    }
    document.write(output);
}