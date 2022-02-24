/**
 * Let's say you're working on an application for an school
 *
 * You're dealing with students, professors and lessons, which
 * classes would you create and what attributes could they have?
 *
 */

class Person {
  constructor(personName, personAge) {
    this.name = personName;
    this.age = personAge;
  }
}

class Professor extends Person {
    constructor(personName, personAge, profSubject) {
        super(personName, personAge)
        this.subject = profSubject
    }
    profPresentation() {
        console.log("Hi, my name is " + this.name + ", I'm " + this.age + " years old and I will teach you " + this.subject);
    }
}

const Fulano = new Professor("Fulano", 37, "history");
{
    Fulano.profPresentation();
}

const Mengano = new Professor("Mengano", 49, "english");
{
  Mengano.profPresentation();
}

class Student extends Person {
    constructor(personName, personAge, studentYear) {
        super(personName, personAge)
        this.year = studentYear
    }
    studPresentation() {
        console.log("Hi, my name is " + this.name + ", I'm " + this.age + " years old and I'm at my " + this.year + " year in this school");
    }
}

const Fulanito = new Student("Fulanito", 14, "third"); {
    Fulanito.studPresentation();
}

const Menganito = new Student("Menganito", 16, "fifth");{
    Menganito.studPresentation();
}

class Lesson {
  constructor(lessonSubject, lessonNumber) {
    this.subject = lessonSubject;
    this.number = lessonNumber;
  }
}
