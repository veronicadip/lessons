/**
 * Let's say you're working on an application for an school
 *
 * You're dealing with students, professors and lessons, which
 * classes would you create and what attributes could they have?
 *
 */


class Person {
    constructor(personName, personAge, personLesson) {
        this.name = personName;
        this.age = personAge;
        this.lesson = personLesson
    }
}

class Professor extends Person {
    constructor(personName, personAge, personLesson) {
        super(personName, personAge, personLesson)
    }
    present() {
        console.log("Hi, my name is " + this.name + ", I'm " + this.age + " years old and I will teach you " + this.lesson);
    }
}

const fulano = new Professor("Fulano", 37, "history");
fulano.present();

const mengano = new Professor("Mengano", 49, "english");
mengano.present();

class Student extends Person {
    constructor(personName, personAge, studentYear, personLesson) {
        super(personName, personAge, personLesson)
        this.year = studentYear
    }
    present() {
        console.log("Hi, my name is " + this.name + ", I'm " + this.age + " years old and I'm at my " + this.year + " year in this school");
    }
    studLessons() {
        console.log("I'm taking these classes: " + this.lesson)
    }
}

const fulanito = new Student("Fulanito", 14, "third", ["history", "english", "psicology"]);
fulanito.present();
fulanito.studLessons();


const menganito = new Student("Menganito", 16, "fifth", "spanish, math, biology and history II");
menganito.present();
menganito.studLessons();



/**
 * Hey, I'm {pesonName} and I'm taking the following lessons:
 * 
 * - {lesson 1}
 * - {lesson 2}
 */
