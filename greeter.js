var Student = /** @class */ (function () {
    function Student(firstName, middleIntital, lastName) {
        this.firstName = firstName;
        this.middleIntital = middleIntital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleIntital + " " + lastName;
    }
    return Student;
}());
;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
;
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
var x; //声明一个数组中第一个参数为string，第二个为number
x = ['hello', 10];
console.log(x[0].substr(1));
x[3] = "world";
//枚举
