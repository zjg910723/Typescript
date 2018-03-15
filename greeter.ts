class Student {
    fullName: string;
    constructor(public firstName: string, public middleIntital: string, public lastName: string){
        this.fullName = firstName + " " + middleIntital + " " + lastName;
    }
}


interface Person {
    firstName: string,
    lastName: string
};


function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
};

let user = new Student("Jane", "M.", "User");


document.body.innerHTML = greeter(user);


let x: [string, number];//声明一个数组中第一个参数为string，第二个为number
x = ['hello', 10];

console.log(x[0].substr(1));


x[3] = "world";


//枚举




