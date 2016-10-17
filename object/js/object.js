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
}

/**
 * 数组测试-检测
 *      判断一个对象是不是数组
 */
function arrayTest3() {
    var arr = ["andy",23,true];
    if (Array.isArray(arr)){
        document.write("arr is Array!");
    } else {
        document.write("arr is not Array!");
    }
}

/**
 * 数组测试--属性
 */
function arrayTest2() {
    var arr = ["andy",23,true];
    document.write("arr[0]:"+arr[0]);
    document.write("</br>");
    document.write(("arr[2]"+ arr[2]));
    document.write("</br>");
    document.write("arr length:"+arr.length);
    document.write("</br>");
    arr.length=2;
    document.write(("arr[2]"+ arr[2]));
    document.write("</br>");
    document.write("arr length:"+arr.length);
}

/**
 * 数组创建测试
 */
function arrayTest1() {
    //创建数组方式1
    var arr1 = new Array();
    document.write("arr1 length:"+ arr1.length);
    document.write("</br>");
    document.write("</br>");
    //创建数组方式2.指定数组大小
    var arr2 = new Array(12);
    document.write("arr2 length:"+arr2.length);
    document.write("</br>");
    document.write("</br>");
    //创建数组方式3,构造函数直接传值
    var arr3 = new Array("andy",12);
    document.write("arr3[0]:"+arr3[0]);
    document.write("</br>");
    document.write("arr3[1]:"+arr3[1]);
    document.write("</br>");
    document.write("</br>");
    //创建数组方式4
    var arr4 = ["tom",22,true];
    document.write("arr4[0]:"+ arr4[0]);
    document.write("</br>");
    document.write("arr4[1]:"+ arr4[1]);
    document.write("</br>");
    document.write("arr4[2]:"+ arr4[2]);
    document.write("</br>");
    arr4[5] = "arr[5]";
    document.write("arr4[5]:"+arr4[5]);
    document.write("</br>");
    document.write("arr4 length:"+ arr4.length);
    document.write("</br>");
    document.write("arr4[4]:"+arr4[4]);
}

/**
 * 显示信息
 * @param args
 */
function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string"){
        output += "Name:"+ args.name+"|";
    }
    if (typeof args.age == "number"){
        output += "Age:"+args.age+"|";
    }
    document.write(output);
}