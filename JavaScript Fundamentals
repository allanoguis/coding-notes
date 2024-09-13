# **JavaScript Notes**

## Table of Contents

1. [Regular Expressions (RegEx)](#regular-expressions-regex)
2. [Variables](#variables)
3. [Strings](#strings)
4. [Arrays](#arrays)
5. [Objects](#objects)
6. [Math and Numbers](#math-and-numbers)
7. [Arrow Functions](#arrow-functions)
8. [Array Methods](#array-methods)
   - [The .map() Method](#the-map-method)
9. [Constructors](#constructors)
10. [Classes](#classes)
11. [Getters and Setters](#getters-and-setters)
12. [Destructuring](#destructuring)
13. [Timing and Asynchronous Operations](#timing-and-asynchronous-operations)
14. [DOM Manipulation](#dom-manipulation)
15. [JSON Handling](#json-handling)

## Regular Expressions (RegEx)

Regular expressions are powerful patterns used to match character combinations in strings.

***Syntax***

| Symbol | Meaning |
|:-------|:--------|
| `.`     | Any character except newline |
| `*`     | 0 or more occurrences |
| `+`     | 1 or more occurrences |
| `?`     | 0 or 1 occurrence |
| `^`     | Start of string |
| `$`     | End of string |
| `\`     | Escape character |
| `[]`    | Character set |
| `[^]`   | Negated character set |
| `\d`    | Digit |
| `\w`    | Word character (alphanumeric + underscore) |
| `\s`    | Whitespace character |

### Quantifiers

| Symbol | Meaning |
|:-------|:--------|
| `{n}`   | Exactly n occurrences |
| `{n,}`  | n or more occurrences |
| `{n,m}` | Between n and m occurrences |

### Special Characters

| Symbol | Meaning |
|:-------|:--------|
| `\b`    | Word boundary |
| `\B`    | Not a word boundary |
| `\A`    | Start of string |
| `\Z`    | End of string |

### Groups and Capturing

| Symbol | Meaning |
|:-------|:--------|
| `()`    | Capturing group |
| `(?:)`  | Non-capturing group |
| `\1, \2` | Backreferences to captured groups |

### Flags

| Flag | Meaning |
|:-----|:--------|
| `g`  | Global search |
| `i`  | Case-insensitive search |
| `m`  | Multi-line search |

Examples

- Email: `/^[\w.-]+@[\w.-]+\.\w+$/`
- URL: `/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`
- Date (YYYY-MM-DD): `/^\d{4}-\d{2}-\d{2}$/`

> [!TIP]
> Use online tools like regex101.com to test and debug your regular expressions.

## Variables

### Declaration

| Keyword | Description |
|:--------|:------------|
| `var`   | Function-scoped or globally-scoped variable, can be redeclared and updated |
| `let`   | Block-scoped variable, can be updated but not redeclared |
| `const` | Block-scoped variable, cannot be updated or redeclared |

### Scope

| Scope Type | Description |
|:-----------|:------------|
| Global     | Variables declared outside any function or block, accessible everywhere |
| Function   | Variables declared within a function, accessible only within that function |
| Block      | Variables declared inside a block (e.g., if statements, loops), accessible only within that block (for `let` and `const`) |

### Hoisting

| Behavior | Description |
|:---------|:------------|
| `var`    | Hoisted to the top of its scope and initialized with `undefined` |
| `let`    | Hoisted to the top of its block but not initialized (Temporal Dead Zone) |
| `const`  | Hoisted to the top of its block but not initialized (Temporal Dead Zone) |

### Data Types

| Type      | Description | Example |
|:----------|:------------|:--------|
| Number    | Numeric data type | `let age = 25;` |
| String    | Textual data type | `let name = "John";` |
| Boolean   | Logical data type | `let isStudent = true;` |
| Undefined | Variable declared but not assigned a value | `let x;` |
| Null      | Intentional absence of any object value | `let empty = null;` |
| Symbol    | Unique identifier | `let id = Symbol('id');` |
| BigInt    | Integer values larger than 2^53 - 1 | `let bigNumber = 1234567890123456789012345678901234567890n;` |

### Objects and Arrays

| Type   | Description | Example |
|:-------|:------------|:--------|
| Object | Collection of key-value pairs | `let person = {name: "Alice", age: 30};` |
| Array  | Ordered list of values | `let colors = ["red", "green", "blue"];` |

### Type Coercion

| Operation | Description | Example |
|:----------|:------------|:--------|
| Implicit  | Automatic type conversion | `"5" + 3` results in `"53"` |
| Explicit  | Manual type conversion | `Number("5")` results in `5` |

### Variable Naming Conventions

| Convention | Description | Example |
|:-----------|:------------|:--------|
| camelCase  | First word lowercase, subsequent words capitalized | `let firstName = "John";` |
| PascalCase | Each word capitalized (typically used for classes) | `class Person {}` |
| snake_case | Words separated by underscores | `let user_age = 25;` |
| UPPERCASE  | All capital letters (typically used for constants) | `const MAX_SIZE = 100;` |

> [!TIP]
>
> - Use `const` by default, and only use `let` if rebinding is needed.
> - Avoid using `var` in modern JavaScript.
> - Choose meaningful and descriptive variable names.
> - Use camelCase for variable and function names.
> - Use PascalCase for class names.
> - Use UPPERCASE for constants.
> - Declare variables at the top of their scope.
> - Avoid global variables when possible.

## Strings

### String Methods

| Method        | Description                                                                |
|:---           |:---                                                                        |
| `.split()`    | Splits a string into an array of substrings                                |
| `.join()`     | Joins all elements of an array into a string                               |
| `.slice()`    | Extracts a section of a string and returns it as a new string              |
| `.substring()`| Returns the part of the string between the start and end indexes           |
| `.toLowerCase()`| Converts a string to lowercase letters                                   |
| `.toUpperCase()`| Converts a string to uppercase letters                                   |
| `.trim()`     | Removes whitespace from both ends of a string                              |
| `.replace()`  | Replaces a specified value with another value in a string                  |

## Arrays

### Mutator Methods

| Method     | Description  |
|:---        |:---  |
| `.push()`   | Adds elements to the end of an array |
| `.pop()`    | Removes the last element from an array   |
| `.shift()`  | Removes the first element from an array  |
| `.unshift()`| Adds elements to the beginning of an array   |
| `.splice()` | Adds/Removes elements from an array  |

### Accessor Methods

| Method         | Description  |
|:---            |:---  |
| `.concat()`    | Joins two or more arrays and returns a copy of the result    |
| `.join()`      | Joins all elements of an array into a string |
| `.slice()`     | Returns a shallow copy of a portion of an array  |
| `.indexOf()`   | Returns the index of the first occurrence of a value in an array |
| `.lastIndexOf()`| Returns the index of the last occurrence of a value in an array |
| `.includes()`  | Determines whether an array includes a certain value among its entries   |
| `.find()`      | Returns the value of the first element in an array that satisfies a provided testing function    |
| `.findIndex()` | Returns the index of the first element in an array that satisfies a provided testing function    |

### Iteration Methods

| Method       | Description                                                                                       |
|:---          |:---                                                                                               |
| `.forEach()` | Executes a function for each array element                                                        |
| `.map()`     | Creates a new array with the results of calling a function for every array element                |
| `.filter()`  | Creates a new array with all elements that pass the test implemented by the provided function     |
| `.reduce()`  | Reduces the array to a single value                                                               |
| `.some()`    | Tests whether at least one element in the array passes the test implemented by the provided function |
| `.every()`   | Tests whether all elements in the array pass the test implemented by the provided function        |

### Other Array Methods

| Method           | Description    |
|:---              |:---    |
| `Array.isArray()`| Determines whether the passed value is an array    |
| `Array.from()`   | Creates a new array from an array-like or iterable object  |
| `Array.of()`     | Creates a new array with a variable number of arguments, regardless of number or type of the arguments |
| `.fill()`        | Fills the elements of an array with a static value |
| `.copyWithin()`  | Copies a sequence of array elements within the array   |
| `.flat()`        | Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth |
| `.flatMap()`     | First maps each element using a mapping function, then flattens the result into a new array    |
| `.entries()`     | Returns a new Array Iterator object that contains the key/value pairs for each index in the array  |
| `.keys()`        | Returns a new Array Iterator object that contains the keys for each index in the array |
| `.values()`      | Returns a new Array Iterator object that contains the values for each index in the array   |
| `.sort()`        | Sorts the elements of an array in place and returns the sorted array                              |
| `.reverse()`     | Reverses the order of the elements in an array in place                                           |

## Objects

### Creating Objects

| Method | Description | Example |
|:-------|:------------|:--------|
| Object literal | Create an object using curly braces | `let person = {name: "Alice", age: 30};` |
| Constructor function | Create an object using a function | `function Person(name, age) { this.name = name; this.age = age; }``let person = new Person("Alice", 30);` |
| Object.create() | Create an object with a specified prototype |`let personProto = {greet() { console.log("Hello!"); }}``let person = Object.create(personProto);` |

### Accessing Object Properties

| Method | Description | Example |
|:-------|:------------|:--------|
| Dot notation | Access properties using a dot | `person.name` |
| Bracket notation | Access properties using brackets | `person["name"]` |

### Object Methods

| Method | Description |
|:-------|:------------|
| `Object.keys()` | Returns an array of a given object's own enumerable property names |
| `Object.values()` | Returns an array of a given object's own enumerable property values |
| `Object.entries()` | Returns an array of a given object's own enumerable string-keyed property [key, value] pairs |
| `Object.assign()` | Copies the values of all enumerable own properties from one or more source objects to a target object |
| `Object.freeze()` | Freezes an object: prevents new properties from being added and existing properties from being removed or modified |
| `Object.seal()` | Seals an object: prevents new properties from being added and marks all existing properties as non-configurable |

### Prototypes and Inheritance

> [!Note]
> the object's properties can still be modified.

| Concept | Description |
|:--------|:------------|
| Prototype chain | Objects inherit properties and methods from their prototype |
| Constructor prototype | Add methods to all instances of a constructor |
| Class syntax | ES6 introduced class syntax as syntactic sugar over prototypes |

> [!TIP]
>
> - Use object literals for simple structures and classes for complex ones with methods.
> - Avoid modifying built-in object prototypes.
> - Use Object.create(null) for dictionary-style objects without prototypes.
> - Use const when declaring object variables to prevent reassignment

## Math and Numbers

### Math Functions

| Function      | Description                                                               |
|:---           |:---                                                                       |
| `Math.random()`| Returns a random number between 0 and 1                                  |
| `Math.floor()` | Returns the largest integer less than or equal to a given number         |
| `Math.ceil()`  | Returns the smallest integer greater than or equal to a given number     |
| `Math.round()` | Returns the value of a number rounded to the nearest integer             |

### Other Math Functions

| Function         | Description                                                                                   |
|:---              |:---                                                                                           |
| `parseInt()`     | Parses a string argument and returns an integer of the specified radix                        |
| `parseFloat()`   | Parses a string argument and returns a floating point number                                  |
| `isNaN()`        | Determines whether a value is NaN or not                                                      |

## Arrow Functions

Arrow functions provide a concise syntax for writing function expressions.

### Syntax

| Syntax | Description | Example |
|:-------|:------------|:--------|
| `() => {}` | Basic arrow function | `const greet = () => { console.log("Hello!"); }` |
| `param => {}` | Single parameter (parentheses optional) | `const square = x => { return x * x; }` |
| `(param1, param2) => {}` | Multiple parameters | `const add = (a, b) => { return a + b; }` |
| `() => expression` | Implicit return for single expressions | `const double = x => x * 2;` |

### Key Characteristics

| Feature | Description |
|:--------|:------------|
| Lexical `this` | Arrow functions do not bind their own `this`, instead inheriting it from the enclosing scope |
| No `arguments` object | Arrow functions do not have their own `arguments` object |
| Cannot be used as constructors | Arrow functions cannot be used with the `new` keyword |
| No `prototype` property | Arrow functions do not have a `prototype` property |

### Use Cases

| Scenario | Description |
|:---------|:------------|
| Callbacks | Concise syntax for short callback functions |
| Array methods | Clean syntax for methods like `map`, `filter`, and `reduce` |
| Short, single-expression functions | Implicit return for brief functions |

>[!TIP]
>
> - Use arrow functions for short, simple functions, especially callbacks.
> - Avoid arrow functions for object methods that need to access `this`.
> - Use traditional function syntax for complex functions or those that use `this` dynamically.
> - Be aware that arrow functions are always anonymous, but can be assigned to variables if needed.

## Array Methods

### The .map() Method

The `.map()` method creates a new array with the results of calling a provided function on every element in the calling array.

| Aspect | Description |
|:-------|:------------|
| Syntax | `array.map(callback(currentValue[, index[, array]])[, thisArg])` |
| Return value | A new array with each element being the result of the callback function |
| Mutates original array? | No |

### Parameters

| Parameter | Description |
|:----------|:------------|
| `callback` | Function that produces an element of the new array |
| `currentValue` | The current element being processed in the array |
| `index` (optional) | The index of the current element being processed in the array |
| `array` (optional) | The array `map` was called upon |
| `thisArg` (optional) | Value to use as `this` when executing callback |

Example

Basic Usage

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// doubled is [2, 4, 6, 8]
```

**With* *Index**

```javascript
const indexed = numbers.map((num, index) => ({ value: num, index: index }));
// indexed is [{ value: 1, index: 0 }, { value: 2, index: 1 }, ...]
```

**Transforming** **Objects**

```javascript
const persons = [{ name: 'John' }, { name: 'Jane' }];
const names = persons.map(person => person.name);
// names is ['John', 'Jane']
```

> [!TIP]
>
> - Use `.map()` when you want to transform each element in an array.
> - Always return a value from the callback function.
> - Avoid modifying the original array or performing side effects in the callback.
> - Consider using `.map()` with arrow functions for more concise syntax.

## Constructors

Constructors are special functions used to create and initialize objects in JavaScript.

***Basic*** ***Syntax***

| Syntax | Description |
|:-------|:------------|
| `function Constructor() {}` | Traditional function syntax |

Example

```javascript
function Person(name) { this.name = name; }
```

| Syntax | Description |
|:-------|:------------|
| `class Constructor {}` | ES6 class syntax |

Example

```javascript
class Person { constructor(name) { this.name = name; } }
```

***Key*** ***Characteristics***

| Feature | Description |
|:--------|:------------|
| `new` keyword | Used to create instances of the constructor |
| `this` binding | Inside the constructor, `this` refers to the newly created instance |
| Capitalization | Constructor names are typically capitalized (convention) |
| Return value | Constructors implicitly return the new object instance |

Example

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.drive = function() {
    console.log(`Driving a ${this.make} ${this.model}`);
  };
}

const myCar = new Car('Toyota', 'Corolla');
myCar.drive(); // Outputs: Driving a Toyota Corolla

// ES6 Class Syntax
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  drive() {
    console.log(`Driving a ${this.make} ${this.model}`);
  }
}

const myCar = new Car('Honda', 'Civic');
myCar.drive(); // Outputs: Driving a Honda Civic
```

> [!TIP]
>
> - Use ES6 class syntax for cleaner, more intuitive object creation.
> - Always use the `new` keyword when invoking a constructor.
> - Capitalize constructor names to distinguish them from regular functions.
> - Use constructors to set up initial state and shared methods.
> - Avoid returning a value from the constructor (it will override the instance).
> - Consider using factory functions for more flexible object creation patterns.

## Classes

> [!NOTE]
> The `class` syntax in JavaScript is syntactic sugar over the prototype-based inheritance model. It doesn't introduce a new object-oriented inheritance model.

Classes in JavaScript provide a more structured and intuitive way to create objects and implement inheritance.

### Class Declaration

| Syntax | Description | Example |
|:-------|:------------|:--------|
| `class ClassName {}` | Basic class declaration | `class Person {}` |
| `class ClassName extends ParentClass {}` | Class with inheritance | `class Student extends Person {}` |

### Class Methods and Properties

| Feature | Description | Example |
|:--------|:------------|:--------|
| Constructor | Special method for creating and initializing objects | `constructor(name) { this.name = name; }` |
| Methods | Functions defined inside the class | `greet() { console.log('Hello!'); }` |
| Static Methods | Methods called on the class itself, not instances | `static create() { return new this(); }` |
| Getters/Setters | Special methods for getting/setting values | `get fullName() { return this._fullName; }` |

Example

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }

  static create(name) {
    return new this(name);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Outputs: Rex barks.

const animal = Animal.create('Generic Animal');
animal.speak(); // Outputs: Generic Animal makes a sound.
```

***Key*** ***Characteristics***

> [!NOTE]
> Classes in JavaScript are primarily syntactic sugar over the existing prototype-based inheritance. They do not introduce a new object-oriented inheritance model to the language.

| Feature | Description |
|:--------|:------------|
| Inheritance | Classes can inherit properties and methods from other classes |
| Encapsulation | Classes group related data and functionality together |
| Polymorphism | Subclasses can override methods from parent classes |
| Hoisting | Unlike function declarations, class declarations are not hoisted |

> [!TIP]
>
> - Use PascalCase for class names.
> - Keep classes focused on a single responsibility.
> - Use getters and setters for computed properties.
> - Prefer composition over inheritance for more flexible code.
> - Use `super()` in subclass constructors before accessing `this`.
> - Avoid creating too many levels of inheritance.

### Static Properties

Static properties are properties that belong to the class itself, not to instances of the class.

| Feature | Description | Example |
|:--------|:------------|:--------|
| Declaration | Use the `static` keyword before the property name | `static count = 0;` |
| Access | Accessed using the class name, not on instances | `MyClass.count` |
| Shared | All instances of the class share the same static property | N/A |
| Use cases | Class-level constants, counters, or utility properties | `static PI = 3.14159;` |

Example

```javascript
class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count;
  }
}

console.log(Counter.count); // 0
new Counter();
new Counter();
console.log(Counter.getCount()); // 2
```

> [!TIP]
>
> - Use static properties for data that is shared across all instances of a class.
> - Static properties are useful for caching, fixed-configuration, or any other data that doesn't need to be replicated across instances.
> - Remember that static properties are not accessible on instances (`this.property` will not work).

## Getters and Setters

Getters and setters are special methods that allow you to define how to get and set the values of object properties.

> [!NOTE]
> Getters and setters are supported in modern JavaScript environments, including all major browsers and Node.js versions.

***Syntax***

| Syntax | Description |
|:-------|:------------|
| `get propName() {}` | Defines a getter for the property `propName` |
| `set propName(value) {}` | Defines a setter for the property `propName` |

### Key Features

| Feature | Description |
|:--------|:------------|
| Computed Properties | Allow for dynamic property names |
| Access Control | Provide a way to control how properties are accessed or modified |
| Data Validation | Can be used to validate data before setting a property |
| Lazy Loading | Can be used to delay the initialization of a property until it's first accessed |

Examples

***Basic Getter and Setter***

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

console.log(person.fullName); // "John Doe"
person.fullName = 'Jane Smith';
console.log(person.firstName); // "Jane"
```

***With Data Validation***

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  
  get fahrenheit() {
    return this.celsius * 9/5 + 32;
  }
  
  set fahrenheit(value) {
    if (typeof value !== 'number') {
      throw new Error('Temperature must be a number');
    }
    this.celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
temp.fahrenheit = 86;
console.log(temp.celsius); // 30
```

> [!TIP]
> Use getters and setters to create more intuitive and self-documenting code, especially when working with complex objects or when you need to add logic to property access.
>
> - Use getters for computed properties that don't require parameters.
> - Use setters for validation or to trigger side effects when a property is set.
> - Keep getters and setters simple; avoid complex logic.
> - Use consistent naming conventions (e.g., `get value()` and `set value()`).
> - Be cautious with setters that modify other properties to avoid unexpected behavior.

## Destructuring

***Use Cases***

Destructuring is a JavaScript expression that allows you to extract data from arrays or properties from objects into distinct variables.

| Use Case | Description |
|:---------|:------------|
| Variable assignment | Quickly extract values from arrays or objects |
| Function parameters | Directly access object properties in function arguments |
| Swapping variables | Easily swap values without a temporary variable |
| Returning multiple values | Return multiple values from a function as an array or object |

> [!NOTE]
> Destructuring is supported in modern JavaScript environments (ES6+) and works with both arrays and objects.

### Array Destructuring

| Syntax | Description |
|:-------|:------------|
| `const [a, b] = array;` | Basic array destructuring |
| `const [a, , b] = array;` | Skipping elements |
| `const [a, ...rest] = array;` | Rest pattern |
| `const [a = defaultValue] = array;` | Default values |

Examples

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

const [a, , b] = numbers;
console.log(a);  // 1
console.log(b);  // 3
```

### Object Destructuring

| Syntax | Description |
|:-------|:------------|
| `const { prop1, prop2 } = object;` | Basic object destructuring |
| `const { prop: newName } = object;` | Assigning to new variable names |
| `const { prop = defaultValue } = object;` | Default values |
| `const { ...rest } = object;` | Rest pattern |

Examples

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

const { name, age, country = 'USA' } = person;
console.log(name);    // 'John Doe'
console.log(age);     // 30
console.log(country); // 'USA'

const { name: fullName, ...rest } = person;
console.log(fullName); // 'John Doe'
console.log(rest);     // { age: 30, city: 'New York' }
```

### Nested Destructuring

| Syntax | Description |
|:-------|:------------|
| `const { prop: { subProp } } = object;` | Nested object destructuring |
| `const [{ prop }] = arrayOfObjects;` | Mixed array and object destructuring |

#### Function Parameter Destructuring

Examples

```javascript
function printPerson({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

const person = { name: 'Alice', age: 25, city: 'London' };
printPerson(person); // 'Alice is 25 years old.'
```

> [!TIP]
>
> - Use destructuring to make your code more readable and concise.
> - Combine destructuring with default values to handle missing properties gracefully.
> - Use the rest pattern to collect remaining elements or properties.
> - Be cautious with deeply nested destructuring as it can make code harder to read.

## Timing and Asynchronous Operations

### Timing Functions

| Function        | Description                                                                                     |
|:---             |:---                                                                                             |
| `setTimeout()`  | Calls a function or evaluates an expression after a specified number of milliseconds            |
| `setInterval()` | Calls a function or evaluates an expression at specified intervals (in milliseconds)            |
| `clearTimeout()`| Cancels a timeout previously established by setTimeout()                                        |
| `clearInterval()`| Cancels a timed, repeating action which was previously established by setInterval()            |

### Promises and Async

| Function/Syntax | Description                                                                                     |
|:---             |:---                                                                                             |
| `Promise.all()` | Takes an iterable of promises as an input, and returns a single Promise                         |
| `Promise.race()`| Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects |
| `async/await`   | Syntactic sugar for working with promises                                                       |

## DOM Manipulation

| Function                    | Description                                                                         |
|:---                         |:---                                                                                 |
| `document.getElementById()` | Returns the element that has the ID attribute with the specified value              |
| `document.querySelector()`  | Returns the first element that matches a specified CSS selector(s) in the document  |
| `document.querySelectorAll()`| Returns a static NodeList containing all elements that match the specified CSS selector(s) |
| `element.addEventListener()`| Attaches an event handler to the specified element                                  |

## JSON Handling

| Function         | Description                                                                                   |
|:---              |:---                                                                                           |
| `JSON.parse()`   | Parses a JSON string, constructing the JavaScript value or object described by the string     |
| `JSON.stringify()`| Converts a JavaScript object or value to a JSON string |

[EOF]
