//creating classes

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Welcome, ${this.name}. You are ${this.age} years old.`);
    }
}

let William = new Person('Will', 21);

//call greeting
William.greeting();

//Extending class

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //importing from our Person class
        this.major = major; 
    }

    greeting() {
        super.greeting(); //inheriting greeting

        console.log(`I am a student. My name is ${this.name}. I am majoring in ${this.major} at ${this.age} years old!`);
    }
}

let Abby = new Student('Abby', 24, 'Informatics');
Abby.greeting();


class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    vInfo() {
        return `This vehicle is a ${this.year} ${this.make} ${this.model}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, version, doorSize) {
        super(make, model, year);
        this.version = version;
        this.doorSize = doorSize;
        this.wheels = 4;
    }
}

let charger = new Car("Dodge", "Charger", 2000, 4);
console.log(charger.vInfo());

class Motorcycle extends Vehicle  {
    constructor() {
        super(...arguments);
        this.wheels = 2;

    }
}