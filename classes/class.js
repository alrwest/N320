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