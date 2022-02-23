# Lesson 8

### Functions are values (first class citizens)

```js
const str = "asdf";
const numb = 1;

sum(1, 1);

// Functions are the same!!

const myFunc = function () {
  console.log("works");
};

myFunc();

// Also works with objects

const puki = {
  name: "Puki",
  bark: function () {
    console.log("barf barf");
  },
};

// Also works as parameters
function callOtherFunction(otherFunction) {
  console.log("I am the parent function");
  otherFunction();
}

callOtherFunction(function () {
  console.log("I am otherfunction");
});

// Why? things can happen at different times
button.on("click", function () {
  console.log("asdf");
});

// Array.map()
const arr = [1, 2, 3]
const arr2 = arr.map(function (item) {
    return item * 10
})
```

### Classes

```js
class Dog {
   numberOfLegs = 4

  constructor(dogName) {
    this.name = dogName;
  }

  bark() {
    console.log("BARF BARF, I am " + this.name);
    console.log("I have " + this.numberOfLegs + " legs")
  }
}

const puki = new Dog();
puki.bark();

const kira = new Dog();
kira.bark();

// classes can be extended
class Animal {
    constructor(name) {
        this.name = name
    }
}

class Dog extends Animal {
    bark() {
        console.log("I am " + this.name)
    }
}

class Cat extends Animal {
    meaow () {
        console.log("I am " + this.name)
    }
}
```

