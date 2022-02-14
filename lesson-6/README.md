# JavaScript

### Programming languages

All concepts are similar, they mainly differ on:

- Syntax: how do you type things
- Compiled vs Interpreted

They define a series of basic "types":

- Number
- Strings -> letras
- Collections
- Booleans -> True / False

They define instructions:

- If / Else
- Loops
- Functions

### JavaScript

- Interpreted
- There are various interpreters:
	- Web browsers are interpreters, Firefox and Chrome have different interpreters
	- Node.js

**Type: numbers**

Integers: 1, 2, etc
Floats: 1.2, 1.0, etc
Operators: +, -, * and / to sum, substract, multiply and divide

**Type: string**

Can use single quotes (') or double quotes (")
Operators: +

**Type: boolean*

true and false
Operators:
	- `&&` AND, everything has to be true for the statement to be true, otherwise is false
	- `||` OR, at least one is true
	- `!` negates the value

**Type: Array**
A collection of items, can contain any type of item
Arrays are defined via `[]`
Array items are accesed via `[index]`

**Type: Object**

A collection of key-value pairs, keys can be anything but are generally strings, values can be anything

```
> const puki = { name: 'puki' }
undefined
> puki
{ name: 'puki' }
> puki.name
'puki'
> 
```
