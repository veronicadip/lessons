# Lesson 7

```js
const a = 1
const b = 2
console.log(a)
```

### IF / ELSE

```js
// expressions that evaluate to booleans
const exp = true && []

// only if
if (exp) {
    console.log('is true')
}

// if / else
if (exp) {
    console.log('enters if')
} else {
    console.log('not enters if')
}

// else if
if (exp) {
    console.log('enters if')
} else if (exp2) {

} else if (exp3) {

}
```

### Loops

```js
while (exp) {
    console.log('inside while')
}

let number = 0

while (number !== 10) {
    console.log(number)
    number = number + 1
}
```


```js
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// returns the sum only if number1 is even AND number2 is even
// otherwise returns false
function sumIfEven(number1, number2) {
    const isNumber1Even = isEven(number1)
    const isNumber2Even = isEven(number2)

    if(isNumber1Even && isNumber2Even) {
        return number1 + number2
    } else {
        return false
    }
}

console.log(sumIfEven(2, 2), 4)
console.log(sumIfEven(3, 2), false)
```

https://eloquentjavascript.net/02_program_structure.html#h_wpz5oi2dy7