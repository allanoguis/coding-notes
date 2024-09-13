# JavaScript Fundamentals

## Table of Contents

1. [Variables](#variables)
2. [Strings](#strings)
3. [Arrays](#arrays)
4. [Objects](#objects)
5. [Math and Numbers](#math-and-numbers)
6. [Arrow Functions](#arrow-functions)
7. [Array Methods](#array-methods)
   - [The .map() Method](#the-map-method)
8. [Constructors](#constructors)
9. [Classes](#classes)
10. [Getters and Setters](#getters-and-setters)
11. [Destructuring](#destructuring)
12. [Timing and Asynchronous Operations](#timing-and-asynchronous-operations)
13. [DOM Manipulation](#dom-manipulation)
14. [JSON Handling](#json-handling)
15. [Regular Expressions (RegEx)](#regular-expressions-regex)
16. [Closures](#closures)
17. [Callbacks](#callbacks)

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

#### Example

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

### Example

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

#### Example

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

#### Examples

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

#### Examples

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

#### Examples

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

##### Examples

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

## Closures

A closure is a function that has access to its own scope, the scope in which it was created, and the scope of the outer function (if any). This allows the function to "remember" the environment in which it was created, even after the outer function has finished executing.

### Key Points

- **Lexical Scoping**: Closures are a result of JavaScript's lexical scoping rules, where functions are executed using the scope chain that was in effect when they were defined.
- **Private Variables**: Closures can be used to create private variables, which are not accessible from outside the function.
- **Function Factories**: Closures can be used to create function factories, where a function returns another function with specific behavior.

#### Example

In this example, we demonstrate how closures can be used to maintain access to variables from an outer function's scope:

```javascript
function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs: "I am outside!"
```

> [!TIP]
>
> - Use closures to maintain access to variables from an outer function's scope.
> - Use closures to create private variables that are not accessible from outside the function.
> - Use closures to create function factories that return functions with specific behavior.

##### Conclusion

`Outer Function`: outerFunction defines a variable outerVariable and a function innerFunction.
`Inner Function`: innerFunction is a closure because it captures the environment in which it was created, including outerVariable.

`Return Inner Function`: When outerFunction is called, it returns innerFunction.
`Closure in Action`: Even after outerFunction has finished executing, innerFunction (now assigned to closureExample) still has access to outerVariable due to the closure.

`Data Encapsulation`: Closures can be used to encapsulate data, making it private and accessible only through specific methods.

`Callbacks and Event Handlers`: Closures are often used in callbacks and event handlers to maintain state across asynchronous operations.

`Function Factories`: Closures can be used to create functions with specific configurations or behaviors.
Important Considerations

`Memory Management`: Closures can lead to memory leaks if not managed properly, as they keep references to variables that might otherwise be garbage collected.

`Performance`: Overuse of closures can impact performance due to the additional scope chain lookups.
By understanding and effectively using closures, you can write more modular, maintainable, and efficient JavaScript code.

## Timing and Asynchronous Operations

### Synchronous vs Asynchronous

JavaScript is single-threaded, meaning it can execute one piece of code at a time. However, it supports asynchronous operations to handle tasks that may take time to complete, such as network requests or file I/O, without blocking the main thread.

#### Synchronous Operations

Synchronous operations execute in sequence, blocking the execution of subsequent code until they complete.

| Feature | Description |
|:--------|:------------|
| Blocking | Subsequent code waits for the current operation to finish |
| Sequential Execution | Code executes line by line |
| Simple | Easier to understand and debug |

##### Example

```javascript
console.log('Start');
console.log('Processing...');
console.log('End');
```

#### Asynchronous Operations

Asynchronous operations allow other code to run while waiting for a task to complete, using mechanisms like callbacks, promises, and async/await.

| Feature | Description |
|:--------|:------------|
| Non-blocking | Subsequent code does not wait for the current operation to finish |
| Concurrent Execution | Allows multiple tasks to run concurrently |
| Complex | Requires understanding of callbacks, promises, and async/await |

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Processing...');
}, 1000);

console.log('End');
```

#### Timing Functions

| Function | Description |
|:--- |:--- |
| `setTimeout()` | Calls a function or evaluates an expression after a specified number of milliseconds |
| `setInterval()` | Calls a function or evaluates an expression at specified intervals (in milliseconds) |
| `clearTimeout()`| Cancels a timeout previously established by setTimeout() |
| `clearInterval()`| Cancels a timed, repeating action which was previously established by setInterval() |

### Promises and Async

| Function/Syntax | Description |
|:--- |:--- |
| `Promise.all()` | Takes an iterable of promises as an input, and returns a single Promise |
| `Promise.race()` | Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects |
| `async/await` | Syntactic sugar for working with promises |

##### Examples

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

async function getData() {
  console.log('Fetching data...');
  const data = await fetchData();
  console.log(data);
}

getData();
```

> [!TIP]
>
> Use asynchronous operations for tasks that may take time to complete, such as network requests or file I/O.
> Use async/await for more readable and manageable asynchronous code.
> Handle errors properly using try/catch blocks with async/await.
> Use Promise.all() to run multiple asynchronous operations concurrently.
> Use Promise.race() to handle scenarios where you need the result of the fastest promise.

## Callbacks

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are a fundamental concept in JavaScript, especially when dealing with asynchronous operations, event handling, and functional programming.

Callbacks are a powerful tool in JavaScript for handling asynchronous operations and modularizing code. However, they can lead to complex and hard-to-read code when used excessively. Promises and async/await provide more structured and readable alternatives for handling asynchronous operations, especially in complex scenarios.

### How Callbacks Work

1. **Function Definition**: Define a function that takes another function as an argument.
2. **Function Invocation**: Invoke the passed function (callback) inside the outer function.

### Example

Let's look at a simple example of a synchronous callback:

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Alice', sayGoodbye);
```

***Explanation***

greet Function: This function takes two parameters: name and callback.
console.log: Prints a greeting message.
callback(): Invokes the callback function passed as an argument.
sayGoodbye Function: This is the callback function that prints a goodbye message.
greet('Alice', sayGoodbye): Calls the greet function with 'Alice' as the name and sayGoodbye as the callback.
Asynchronous Callbacks
Callbacks are often used in asynchronous operations to handle the result once the operation completes. For example, in JavaScript, callbacks are commonly used with timers, event listeners, and AJAX requests.

### Example with setTimeout

```javascript
function delayedGreeting(name, callback) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    callback();
  }, 1000);
}

function sayGoodbye() {
  console.log('Goodbye!');
}

delayedGreeting('Alice', sayGoodbye);
```

***Explanation***

delayedGreeting Function: This function takes two parameters: name and callback.
setTimeout: Delays the execution of the greeting message by 1000 milliseconds (1 second).
console.log: Prints the greeting message after the delay.
callback(): Invokes the callback function after the greeting message is printed.
sayGoodbye Function: This is the callback function that prints a goodbye message.
delayedGreeting('Alice', sayGoodbye): Calls the delayedGreeting function with 'Alice' as the name and sayGoodbye as the callback.

### Callback Hell (Pyramid of Doom)

When dealing with multiple asynchronous operations that depend on each other, callbacks can lead to deeply nested and hard-to-read code, often referred to as "callback hell" or the "pyramid of doom."

### Example

```javascript
asyncOperation1(function(result1) {
  asyncOperation2(result1, function(result2) {
    asyncOperation3(result2, function(result3) {
      console.log(result3);
    });
  });
});
```

In this example, we have three asynchronous operations that depend on each other. Each operation takes a callback function as an argument, which is invoked inside the previous operation to complete the task. The code becomes more complex and harder to read as the number of operations increases.

### Solutions to Callback Hell

Promises: Promises provide a more structured way to handle asynchronous operations.
Async/Await: Async/await is syntactic sugar built on top of promises, making asynchronous code look more like synchronous code.

### Example with Promises

```javascript
function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Result 1'), 1000);
  });
}

function asyncOperation2(result1) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${result1} -> Result 2`), 1000);
  });
}

function asyncOperation3(result2) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${result2} -> Result 3`), 1000);
  });
}

asyncOperation1()
  .then(asyncOperation2)
  .then(asyncOperation3)
  .then(console.log)
  .catch(console.error);
```

### Example with Async/Await

```javascript
async function runOperations() {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2(result1);
    const result3 = await asyncOperation3(result2);
    console.log(result3);
  } catch (error) {
    console.error(error);
  }
}

runOperations();
```




[EOF]
