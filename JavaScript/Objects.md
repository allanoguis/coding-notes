# Objects in JavaScript with ES6+

## Table of Contents

1. [Introduction to Objects](#introduction-to-objects)
2. [Object Declaration](#object-declaration)
3. [Object Properties](#object-properties)
4. [Object Methods](#object-methods)
5. [Object Destructuring](#object-destructuring)
6. [Object Spread Operator](#object-spread-operator)
7. [Computed Property Names](#computed-property-names)
8. [Object.assign()](#objectassign)
9. [Object.keys(), Object.values(), Object.entries()](#objectkeys-objectvalues-objectentries)
10. [Private Fields and Methods](#private-fields-and-methods)

## Introduction to Objects

Objects are a fundamental data structure in JavaScript used to store collections of key-value pairs. With the introduction of ES6, JavaScript added several new features and methods to make object manipulation more powerful and flexible.

## Object Declaration

Objects can be declared using object literals or the `Object` constructor.

```javascript
javascript const obj1 = { name: 'Alice', age: 30 }; // Object literal const obj2 = new Object({ name: 'Bob', age: 25 }); // Object constructor
```

## Object Properties

Object properties can be accessed using dot notation or bracket notation.

```javascript
const person = { name: 'Alice', age: 30 }; console.log(person.name); // 'Alice' console.log(person['age']); // 30
```

## Object Methods

Object methods are functions stored as object properties.

```javascript
const person = { name: 'Alice', age: 30, greet() { console.log(Hello, my name is ${this.name} and I am ${this.age} years old.); } };

person.greet(); // 'Hello, my name is Alice and I am 30 years old.'
```

## Object Destructuring

Object destructuring allows you to unpack values from objects into distinct variables.

```javascript
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name); // 'Alice'
console.log(age); // 30
```

## Object Spread Operator

The spread operator `(...)` allows an iterable `(like an object)` to be expanded in places where zero or more key-value pairs are expected.

```javascript
const obj1 = { name: 'Alice', age: 30 };
const obj2 = { ...obj1, city: 'New York' };
console.log(obj2); // { name: 'Alice', age: 30, city: 'New York' }
```

## Computed Property Names

ES6 introduced computed property names, which allow you to use expressions as property names.

```javascript
const key = 'name';
const person = {
  [key]: 'Alice',
  age: 30
};
console.log(person); // { name: 'Alice', age: 30 }
```

## Object.assign()

The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object.

```javascript
const obj1 = { name: 'Alice' };
const obj2 = { age: 30 };
const combined = Object.assign({}, obj1, obj2);
console.log(combined); // { name: 'Alice', age: 30 }
```

## Object.keys(), Object.values(), Object.entries()

These methods return arrays of the object's keys, values, and key-value pairs, respectively.

```javascript

const person = { name: 'Alice', age: 30 };
console.log(Object.keys(person)); // ['name', 'age']
console.log(Object.values(person)); // ['Alice', 30]
console.log(Object.entries(person)); // [['name', 'Alice'], ['age', 30]]
```

## Private Fields and Methods

ES6+ introduced private fields and methods using the # symbol. These are not accessible outside the object.

```javascript
class Person {
  #name = 'Alice'; // Private field

  #greet() { // Private method
    console.log(`Hello, my name is ${this.#name}.`);
  }

  introduce() {
    this.#greet();
  }
}

const person = new Person();
person.introduce(); // 'Hello, my name is Alice.'
console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
```

> [!TIP]
>
> Use object destructuring and the spread operator for concise and readable code.
> Leverage computed property names for dynamic property creation.
> Use Object.assign() for merging objects.
> Use private fields and methods to encapsulate implementation details.

[EOF]
