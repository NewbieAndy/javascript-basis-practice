/**
 * Created by Mtime on 2017/7/31.
 */

function test() {
    // "_"下划线表示属性只能通过对象方法(getter,setter)访问
    var person = {
        name: "andy",
        _year: 12
    };
    console.log(person.name);
    person.name = "andy1"
    console.log(person.name);

    console.log(person.name);
    person.name = "andy4"
    console.log(person.name);

    //设置对象属性方法一
    Object.defineProperty(person, "year", {
        get: function () {
            return this._year + 1;
        },
        set: function (yearVal) {
            if (yearVal > 0) {
                this._year = yearVal;
            }
        }
    })

    console.log(person.year)
    person.year = 1;
    console.log(person.year)

    //设置对象属性方法二
    var book = {
        name: "java",
        _year: 2001
    }

    book.__defineGetter__("year", function () {
        return this._year;
    })

    book.__defineSetter__("year", function (year) {
        this._year = year + 1000;
    })

    console.log(book.year)
    book.year = 3000;
    console.log(book.year)

    //定义多个属性
    console.log("定义多个属性++++++++++++++++++")
    var student = {
        name: "amy",
        _number: 12,
        _classNum: 1
    }

    Object.defineProperties(student, {
        name: {
            value: "andy"
        },
        number: {
            get: function () {
                return this._number;
            },
            set: function (val) {
                this._number = val + 1;
            }
        },
        classNum: {
            get: function () {
                return this._classNum + 1;
            },
            set: function (val) {
                this._classNum = val;
            }
        }
    })
    student.name="aaa";
    student.number=1;
    student.classNum=3;

    console.log(student.name);
    console.log(student.number);
    console.log(student.classNum);

    console.log("读取属性特性++++++++++++")
    var ownPropertyDescriptor = Object.getOwnPropertyDescriptor(student, "_classNum");
    console.log(ownPropertyDescriptor.value);
    console.log(ownPropertyDescriptor.configurable);
    var ownPropertyDescriptor2 = Object.getOwnPropertyDescriptor(student, "name");
    console.log(ownPropertyDescriptor2.value);
    console.log(ownPropertyDescriptor2.configurable);

}