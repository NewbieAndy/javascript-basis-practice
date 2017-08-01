/**
 * Created by Mtime on 2017/8/1.
 */

function test() {
    console.log("test..running..")
    
    function Person(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender=gender;
        this.sayHolle = function () {
            console.log("My name is "+name+","+age+"year old. I'm a "+gender);
        }
    }

    var person1 = new Person("andy",13,"boy");
    person1.sayHolle();
    var person2 = new Person("amy",12,"girl");
    person2.sayHolle();

    console.log("person1 instanceof Person:"+(person1 instanceof Person));
    console.log("person2 instanceof Person:"+(person2 instanceof Person));
    console.log("person1 instanceof Object:"+(person1 instanceof Object));
    console.log("person2 instanceof Object:"+(person2 instanceof Object));
}
