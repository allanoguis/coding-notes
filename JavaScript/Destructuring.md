# Destructuring in JavaScript with ES6+

## Table of Contents

1. [Introduction to Destructuring](#introduction-to-destructuring)
2. [Array Destructuring](#array-destructuring)
   - [Array Destructuring Basic Example](#array-destructuring-basic-example)
   - [Skipping Elements](#skipping-elements)
   - [Array Rest Syntax](#array-rest-syntax)
3. [Object Destructuring](#object-destructuring)
   - [Object Destructuring Basic Example](#object-destructuring-basic-example)
   - [Renaming Variables](#renaming-variables)
   - [Object Rest Syntax](#object-rest-syntax)
4. [Default Values](#default-values)
   - [Array Example](#array-example)
   - [Object Example](#object-example)
5. [Nested Destructuring](#nested-destructuring)
   - [Nested Array Example](#nested-array-example)
   - [Nested Object Example](#nested-object-example)
6. [Rest and Spread Syntax](#rest-and-spread-syntax)
   - [Rest Syntax in Array Destructuring](#rest-syntax-in-array-destructuring)
   - [Rest Syntax in Object Destructuring](#rest-syntax-in-object-destructuring)
   - [Spread Syntax in Array Destructuring](#spread-syntax-in-array-destructuring)
   - [Spread Syntax in Object Destructuring](#spread-syntax-in-object-destructuring)
7. [Use Cases](#use-cases)
   - [Function Parameters](#function-parameters)
   - [Swapping Variables](#swapping-variables)

## Introduction to Destructuring

Destructuring is a feature introduced in ES6 that allows you to extract values from arrays or properties from objects into distinct variables. It provides a concise and readable way to unpack values from arrays and objects.

## Array Destructuring

Array destructuring allows you to unpack values from arrays into distinct variables.

### Array Destructuring Basic Example

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

In the above example, we have an array `numbers` with three values. We use array destructuring to extract the values into three variables `a`, `b`, and `c`. The values are assigned to the variables in the order they appear in the array.

### Skipping Elements

You can skip elements by leaving holes in the destructuring pattern.

```javascript
const numbers = [1, 2, 3, 4];
const [a, , c] = numbers;
console.log(a); // 1
console.log(c); // 3
```

In the above example, we have an array `numbers` with four values. We use array destructuring to extract the first and third values into variables `a` and `c`. The second value is skipped because we left a hole in the destructuring pattern.

### Array Rest Syntax

The rest syntax `(...)` allows you to collect the remaining elements into a new array.

```javascript
const numbers = [1, 2, 3, 4];
const [a, ...rest] = numbers;
console.log(a); // 1
console.log(rest); // [2, 3, 4]
```

## Object Destructuring

Object destructuring allows you to unpack properties from objects into distinct variables.

### Object Destructuring Basic Example

```javascript
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name); // 'Alice'
console.log(age); // 30
```

In the above example, we have an object `person` with two properties `name` and `age`. We use object destructuring to extract the values of these properties into variables `name` and `age`.

### Renaming Variables

You can rename variables during destructuring.

```javascript
const person = { name: 'Alice', age: 30 };
const { name: fullName, age: years } = person;
console.log(fullName); // 'Alice'
console.log(years); // 30
```

### Object Rest Syntax

The rest syntax `(...)` allows you to collect the remaining properties into a new object.

```javascript
const person = { name: 'Alice', age: 30, city: 'New York' };
const { name, ...rest } = person;
console.log(name); // 'Alice'
console.log(rest); // { age: 30, city: 'New York' }
```

## Default Values

You can provide default values for variables in case the destructured value is `undefined`.

### Array Example

```javascript
const numbers = [1];
const [a = 0, b = 0] = numbers;
console.log(a); // 1
console.log(b); // 0
```

In the above example, we have an array `numbers` with one value. We use array destructuring to extract the value into two variables `a` and `b`. We provide default values of `0` for `a` and `b` in case they are `undefined`.

### Object Example

```javascript
const person = { name: 'Alice' };
const { name, age = 18 } = person;
console.log(name); // 'Alice'
console.log(age); // 18
```

## Nested Destructuring

### Nested Array Example

```javascript
const numbers = [1, [2, 3], 4];
const [a, [b, c], d] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
```

In this example:

`first` is assigned the value 1.
`[second, third]` is a nested destructuring pattern that assigns 2 to second and 3 to third.
`fourth` is assigned the value 4.
This allows you to easily extract values from nested arrays in a concise manner.

### Nested Object Example

```javascript
const person = { name: 'Alice', address: { city: 'New York', zip: '10001' } };
const { name, address: { city, zip } } = person;
console.log(name); // 'Alice'
console.log(city); // 'New York'
console.log(zip); // '10001'
```

## Rest and Spread Syntax

```javascript
const numbers = [1, 2, 3, 4];
const [a, ...rest] = numbers;
console.log(a); // 1
console.log(rest); // [2, 3, 4]
```

### Rest Syntax in Array Destructuring

```javascript
const numbers = [1, 2, 3, 4, 5];

// Destructuring with rest syntax
const [first, second, ...rest] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);  // Output: [3, 4, 5]
```

In the above example, we have an array `numbers` with five values. We use array destructuring with rest syntax to extract the first three values into variables `first`, `second`, and `rest`. The remaining values are collected into a new array `rest`.

### Rest Syntax in Object Destructuring

```javascript
const person = { name: 'Alice', age: 30, city: 'New York' };
const { name, ...rest } = person;
console.log(name); // 'Alice'
console.log(rest); // { age: 30, city: 'New York' }
```

### Spread Syntax in Array Destructuring

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]
```

### Spread Syntax in Object Destructuring

```javascript
const person = { name: 'Alice', age: 30 };
const newPerson = { ...person, city: 'New York' };
console.log(newPerson); // { name: 'Alice', age: 30, city: 'New York' }
```

## Use Cases

### Function Parameters

Destructuring can be used in function parameters to extract values from objects.

```javascript
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person = { name: 'Alice', age: 30 };
greet(person); // 'Hello, my name is Alice and I am 30 years old.'
```

### Swapping Variables

Destructuring can be used to swap variables without a temporary variable.

```javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```

> [!TIP]
>
> Use array destructuring to unpack values from arrays.
> Use object destructuring to unpack properties from objects.
> Leverage default values to handle undefined cases.
> Use nested destructuring for complex data structures.
> Use rest and spread syntax for collecting or spreading elements.

[EOF]
