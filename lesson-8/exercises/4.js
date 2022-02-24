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
  presentation() {
    console.log("Hi, my name is " + this.name + " and my age is " + this.age);
  }
}

class Professor extends Person {}

const Fulano = new Professor("Fulano", 37);
{
  Fulano.presentation();
}

const Mengano = new Professor("Mengano", 49);
{
  Mengano.presentation();
}

class Student extends Person {}

const Fulanito = new Student("Fulanito", 14);
{
  Fulanito.presentation();
}

const Menganito = new Student("Menganito", 16);
{
  Menganito.presentation();
}

class Lesson {
  constructor(lessonSubject, lessonNumber) {
    this.subject = lessonSubject;
    this.number = lessonNumber;
  }
}
