# Classes in JavaScript with ES6+

## Table of Contents

1. [Introduction to Classes](#introduction-to-classes)
2. [Class Declaration](#class-declaration)
3. [Class Constructor](#class-constructor)
4. [Instance Methods](#instance-methods)
5. [Static Methods](#static-methods)
6. [Inheritance](#inheritance)
   - [Extending Classes](#extending-classes)
   - [Super Keyword](#super-keyword)
7. [Getters and Setters](#getters-and-setters)
8. [Private Fields and Methods](#private-fields-and-methods)
9. [Conclusion](#conclusion)

## Introduction to Classes

Classes in JavaScript provide a more structured way to create objects and handle inheritance. With the introduction of ES6, JavaScript introduced class syntax, which is syntactic sugar over the existing prototype-based inheritance.

## Class Declaration

Classes can be declared using the `class` keyword.

```javascript
javascript class Person { constructor(name, age) { this.name = name; this.age = age; }

greet() { console.log(Hello, my name is ${this.name} and I am ${this.age} years old.); } }
```

In the above example, we have declared a class `Person` with a constructor that takes in two parameters `name` and `age`. We have also defined an instance method `greet` that logs a greeting message to the console.

## Class Constructor

The `constructor` method is a special method for creating and initializing an object created with a class. There can only be one `constructor` method per class.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person('Alice', 30);
console.log(person.name); // 'Alice'
console.log(person.age); // 30
```

1. We declare a class `Person` with a constructor that takes in two parameters `name` and `age`.
2. We create an object `person` of the `Person` class by calling the `new` operator and passing in the `name` and `age` parameters.
3. We log the `name` and `age` properties of the `person` object to the console.

## Instance Methods

Instance methods are methods that are defined on the class prototype and can be called on instances of the class.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('Alice', 30);
person.greet(); // 'Hello, my name is Alice and I am 30 years old.'
```

1. We declare a class `Person` with a constructor that takes in two parameters `name` and `age`.
2. We define an instance method `greet` on the `Person` class that logs a greeting message to the console.
3. We create an object `person` of the `Person` class by calling the `new` operator and passing in the `name` and `age` parameters.
4. We call the `greet` method on the `person` object to log the greeting message to the console.

## Static Methods

Static methods are methods that are defined on the class itself and do not have access to the instance.

```javascript
class MathHelper {
  static square(num) {
    return num * num;
  }
}

console.log(MathHelper.square(5)); // 25
```

1. We declare a class `MathHelper` with a static method `square` that takes in a parameter `num` and returns the square of the number.
2. We call the `square` method on the `MathHelper` class and pass in the number `5`.

## Inheritance

Inheritance in JavaScript is a mechanism that allows a class to inherit properties and methods from another class.

### Extending Classes

To extend a class, we use the `extends` keyword followed by the name of the class we want to extend.

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for grade ${this.grade}.`);
  }
}

const student = new Student('Bob', 20, 'A');
student.greet(); // 'Hello, my name is Bob and I am 20 years old.'
student.study(); // 'Bob is studying for grade A.'
```

1. We declare a class `Student` that extends the `Person` class.
2. We define a constructor for the `Student` class that calls the `super` method to call the `constructor` method of the `Person` class and passes in the `name` and `age` parameters.
3. We define an instance method `study` on the `Student` class that logs a message to the console.
4. We create an object `student` of the `Student` class by calling the `new` operator and passing in the `name`, `age`, and `grade` parameters.
5. We call the `greet` method on the `student` object to log the greeting message to the console.
6. We call the `study` method on the `student` object to log the study message to the console.

### Super Keyword

1. The `super` keyword is used to call the parent class constructor.
2. It can only be used inside the constructor of a subclass.
3. It can only be called once in the constructor of a subclass.
4. It can be used to pass arguments to the parent class constructor.

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Calls the parent class constructor
    this.grade = grade;
  }

  greet() {
    super.greet(); // Calls the parent class greet method
    console.log(`I am a student with grade ${this.grade}.`);
  }
}

const student = new Student('Bob', 20, 'A');
student.greet();
// 'Hello, my name is Bob and I am 20 years old.'
// 'I am a student with grade A.'
```

In the above example, we have overridden the `greet` method on the `Student` class to call the `greet` method of the `Person` class using the `super` keyword. We have also added a new message to the console that includes the student's grade.

## Getters and Setters

1. Getters and setters are special methods that allow us to control the access to an object's properties.
2. Getters are used to get the value of a property.

> [!NOTE]
> Getters and setters allow you to define object properties that are accessed like regular properties but are actually methods.

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  set diameter(value) {
    this._radius = value / 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // 10
circle.diameter = 20;
console.log(circle.diameter); // 20
console.log(circle._radius); // 10
```

## Private Fields and Methods

ES6+ introduced private fields and methods using the # symbol. These are not accessible outside the class.

```javascript
class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 1
console.log(counter.#count); // SyntaxError: Private field '#count' must be declared in an enclosing class
```

In the above example, we have declared a private field `#count` and a public method `increment` that increments the count. We have also defined a public method `getCount` that returns the value of the count.

1. We declare a class `Counter` with a private field `#count` and a public method `increment` that increments the count.
2. We define a public method `getCount` that returns the value of the count.
3. We create an object `counter` of the `Counter` class by calling the `new` operator.
4. We call the `increment` method on the `counter` object to increment the count.
5. We call the `getCount` method on the `counter` object to get the count.
6. We try to access the private field `#count` directly and get a `SyntaxError`.

> [!TIP]
>
> Use classes for creating objects with shared behavior.
> Leverage inheritance to create specialized classes from base classes.
> Use getters and setters for controlled access to object properties.
> Use private fields and methods to encapsulate implementation details.

[EOF]
