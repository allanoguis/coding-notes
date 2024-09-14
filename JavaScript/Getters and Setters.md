# Getters and Setters in JavaScript (ES6+)

## Table of Contents

1. [Introduction](#introduction)
2. [What are Getters and Setters?](#what-are-getters-and-setters)
3. [Syntax for Getters and Setters](#syntax-for-getters-and-setters)
    - [Getter Syntax](#getter-syntax)
    - [Setter Syntax](#setter-syntax)
4. [Advantages of Getters and Setters](#advantages-of-getters-and-setters)
    - [Encapsulation](#encapsulation)
    - [Validation](#validation)
    - [Lazy Computation](#lazy-computation)
5. [Examples](#examples)
    - [Customizing Property Access](#customizing-property-access)
    - [Computed Properties](#computed-properties)
        - [Use Cases](#use-cases)
            - [Dynamic Key Assignment](#dynamic-key-assignment)
            - [Using Expressions](#using-expressions)
            - [In Function Parameters](#in-function-parameters)
6. [ES6+ Classes with Getters and Setters](#es6-classes-with-getters-and-setters)
    - [Example: Class with Getters and Setters](#example-class-with-getters-and-setters)
        - [Example: Class with Private Properties](#example-class-with-private-properties)

## Introduction

In modern JavaScript, properties of objects are often accessed directly by their names. However, to maintain better control over how these properties are accessed and modified, you can use *getters* and *setters*. These are methods that allow you to intercept property access and modification, providing a way to customize the behavior of an object property.

## What are Getters and Setters?

**Getters** and **setters** allow you to execute code when an object property is accessed or assigned, instead of simply retrieving or setting its value directly. This is useful for:

- **Getters**: Encapsulating logic when retrieving the value.
- **Setters**: Encapsulating logic when setting the value (e.g., validation).

### Syntax for Getters and Setters

#### Getter Syntax

The getter allows you to bind a property to a function that will be called when the property is accessed.

```js
let obj = {
  get propName() {
    // logic to return a value
    return 'value';
  }
};
```

In this example, the `propName` property has a setter that allows custom logic (e.g., validation or transformation) when the value is being set.

#### Setter Syntax

The setter allows you to bind a property to a function that will be called when the property is assigned a new value.

```javascript
class MyClass {
  constructor(value) {
    this._value = value; // conventionally prefixed with an underscore
  }

  // Getter
  get value() {
    return this._value;
  }

  // Setter
  set value(newValue) {
    this._value = newValue;
  }
}

// Example of usage:
const myObject = new MyClass(10);
console.log(myObject.value); // Output: 10

myObject.value = 20; // Using the setter
console.log(myObject.value); // Output: 20
```

In this example:

The `get` keyword is used to define a getter method called `value`, which allows you to access the `_value` property.
The `set` keyword is used to define a setter method called `value`, which allows you to modify the `_value` property.

## Advantages of Getters and Setters

### Encapsulation

Getters and setters allow for **encapsulation** of logic when interacting with object properties. Rather than exposing internal properties directly, you can abstract the access to these properties through getter and setter methods, giving more control over what data can be accessed or modified.

### Validation

Setters can be used to **validate** incoming data, ensuring that invalid or out-of-bounds values are rejected or modified before being stored.

### Lazy Computation

Getters can implement **lazy computation**, where values are calculated only when needed, instead of being stored or computed every time the property is accessed.

## Examples

### Basic Usage

Here’s a simple example demonstrating the use of both a getter and a setter:

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // John Doe

person.fullName = 'Jane Smith';
console.log(person.firstName); // Jane
console.log(person.lastName);  // Smith
```

In this example, we have a `person` object with a `fullName` property that is a combination of `firstName` and `lastName`. We have defined a getter method `fullName` that returns the full name as a string. We also have a setter method `fullName` that takes a string and splits it into `firstName` and `lastName` properties.

### Customizing Property Access

In this example, the setter checks whether the age is a valid number before setting it.

```javascript
let user = {
  _age: 20,

  get age() {
    return this._age;
  },

  set age(value) {
    if (value < 0) {
      console.log('Age cannot be negative!');
    } else {
      this._age = value;
    }
  }
};

user.age = 25;         // Updates the age
console.log(user.age); // 25

user.age = -5;         // Invalid value, error message is logged
// Age cannot be negative!
```

This ensures that the `age` property is only set with valid values, and it logs an error if the value is invalid.

### Computed Properties

Definition: Computed properties enable you to create property names for object literals that are determined at runtime. Instead of using fixed property names, you can use expressions inside square brackets to define keys dynamically.

```javascript
const dynamicKey = 'myProperty';
const obj = {
  [dynamicKey]: 'value', // Using a variable as a property key
  ['another' + 'Property']: 42, // Using an expression as a property key
};

console.log(obj.myProperty); // Output: value
console.log(obj.anotherProperty); // Output: 42
```

#### Use Cases

##### Dynamic Key Assignment

```javascript
const key = 'name';
const person = {
  [key]: 'Alice',
};
console.log(person.name); // Output: Alice
```

###### Using Expressions

```javascript
const obj = {
  ['property' + 1]: 'value1',
  ['property' + 2]: 'value2',
};
console.log(obj.property1); // Output: value1
console.log(obj.property2); // Output: value2
```

###### In Function Parameters

```javascript
function createObject(key, value) {
  return {
    [key]: value,
  };
}
const newObj = createObject('dynamicKey', 'Hello World');
console.log(newObj.dynamicKey); // Output: Hello World
```

## ES6+ Classes with Getters and Setters

With the introduction of `ES6`, JavaScript made object-oriented programming more structured through the `class` syntax. Getters and setters fit naturally into classes, allowing you to manage class properties with more control.

### Example: Class with Getters and Setters

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area() {
    return this.width * this.height;
  }

  // Setter for dimensions
  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

// Update the dimensions using setter
rect.dimensions = { width: 20, height: 10 };
console.log(rect.area); // 200
```

In this example, `area` is a getter that computes the area based on the rectangle’s dimensions, and `dimensions` is a setter that allows you to modify both the width and height of the rectangle at once.

### Example: Class with Private Properties

Using private class fields (introduced in `ES2020`) in combination with getters and setters allows for true encapsulation of class properties.

```javascript
class Counter {
  #count = 0; // private field

  get value() {
    return this.#count;
  }

  set value(val) {
    if (typeof val === 'number' && val >= 0) {
      this.#count = val;
    } else {
      console.log('Invalid value');
    }
  }
}

let counter = new Counter();
console.log(counter.value); // 0

counter.value = 5;         // Valid input
console.log(counter.value); // 5

counter.value = -3;        // Invalid input
// Output: "Invalid value"
```

Here, the `#count` field is truly private and cannot be accessed directly from outside the class, providing better control over property access.

> [!TIP]
>
> Best Practices:
>
> - Avoid complex logic in getters: Keep getter methods simple and lightweight to avoid performance bottlenecks when accessing properties.
> - Use private variables: Use private variables (commonly prefixed with `_` or using `ES2020` `#` private fields) to store internal state, ensuring that direct access to properties is encapsulated.
> - Combine with other methods: Use getters and setters alongside regular methods. Don’t overuse them for complex logic or non-property-related functionality.

[EOF]
