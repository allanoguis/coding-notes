# Variables in JavaScript with ES6+

## Table of Contents

1. [Introduction to Variables](#introduction-to-variables)
2. [Variable Declaration](#variable-declaration)
   - [var](#var)
   - [let](#let)
   - [const](#const)
3. [Scope](#scope)
   - [Global Scope](#global-scope)
   - [Function Scope](#function-scope)
   - [Block Scope](#block-scope)
4. [Hoisting](#hoisting)
5. [Data Types](#data-types)
6. [Type Coercion](#type-coercion)
7. [Variable Naming Conventions](#variable-naming-conventions)

## Introduction to Variables

Variables are used to store data values that can be referenced and manipulated in a program. JavaScript introduced significant improvements in variable declaration with ES6, including `let` and `const`, which provide better control over variable scope and mutability.

## Variable Declaration

### var

- **Scope**: Function-scoped or globally-scoped.
- **Reassignable**: Yes.
- **Redeclareable**: Yes.
- **Hoisting**: Hoisted to the top of its scope and initialized with `undefined`.

```javascript
var x = 10;
function example() {
  var y = 20;
  console.log(x + y); // 30
}
example();
console.log(x); // 10
console.log(y); // ReferenceError: y is not defined
```

### let

- **Scope**: Block-scoped.
- **Reassignable**: Yes.
- **Redeclareable**: No.
- **Hoisting**: Not hoisted.

```javascript
let x = 10;
if (true) {
  let y = 20;
  console.log(x + y); // 30
}
console.log(x); // 10
console.log(y); // ReferenceError: y is not defined
```

### const

- **Scope**: Block-scoped.
- **Reassignable**: No.
- **Redeclareable**: No (within the same block).
- **Hoisting**: Hoisted to the top of its block but not initialized (Temporal Dead Zone).

```javascript
const x = 10;
if (true) {
  const y = 20;
  console.log(x + y); // 30
}
console.log(x); // 10
console.log(y); // ReferenceError: y is not defined
```

## Scope

### Global Scope

Variables declared outside any function or block are globally scoped and accessible everywhere in the script.

```javascript
var globalVar = 10;
function example() {
  console.log(globalVar); // 10
}
example();
console.log(globalVar); // 10
```

### Function Scope

Variables declared within a function are function-scoped and accessible only within that function.

```javascript
function example() {
  var functionVar = 20;
  console.log(functionVar); // 20
}
example();
console.log(functionVar); // ReferenceError: functionVar is not defined
```

### Block Scope

Variables declared with let and const are block-scoped and accessible only within the block they are declared in.

```javascript
if (true) {
  let blockVar = 30;
  console.log(blockVar); // 30
}
console.log(blockVar); // ReferenceError: blockVar is not defined
```

## Hoisting

- **var**: Hoisted to the top of its scope and initialized with undefined.
- **let and const**: Hoisted to the top of their block but not initialized (Temporal Dead Zone).

```javascript
console.log(hoistedVar); // undefined
var hoistedVar = 10;

console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 20;
```

## Data Types

JavaScript supports several data types:

| Type | Description | Example |
|:----------|:------------|:--------|
| Number | Numeric data type | `let age = 25;` |
| String | Textual data type | `let name = "John";` |
| Boolean | Logical data type | `let isStudent = true;` |
| Undefined | Variable declared but not assigned a value | `let x;` |
| Null | Intentional absence of any object value | `let empty = null;` |
| Symbol | Unique identifier | `let id = Symbol('id');` |
| BigInt | Integer values larger than `2^53 - 1` | `let bigNumber = 1234567890123456789012345678901234567890n;` |

## Type Coercion

JavaScript performs implicit type conversion in certain operations:

| Operation | Description | Example |
|:----------|:------------|:--------|
| Implicit | Automatic type conversion | `"5" + 3 results in "53"` |
| Explicit | Manual type conversion | `Number("5") results in 5` |

## Variable Naming Conventions

| Convention | Description | Example |
|:-----------|:------------|:--------|
| camelCase | First word lowercase, subsequent words capitalized | `let firstName = "John";` |
| PascalCase | Each word capitalized (typically used for classes) | `class Person {}` |
| snake_case | Words separated by underscores | `let user_age = 25;` |
| UPPERCASE | All capital letters (typically used for constants) | `const MAX_SIZE = 100;` |

>[!TIP]
>
> Choose meaningful and descriptive variable names.
> Use camelCase for variable and function names.
> Use PascalCase for class names.
> Use UPPERCASE for constants.
> Declare variables at the top of their scope.
> Avoid global variables when possible.

[EOF]
