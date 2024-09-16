# TypeScript

## Table of Contents

- [Introduction to TypeScript](#introduction-to-typescript)
  - What is TypeScript?
  - Benefits of Using TypeScript
  - TypeScript vs JavaScript

- [Getting Started](#getting-started)
  - Installing TypeScript
  - Setting Up a TypeScript Project
  - TypeScript Compiler Options

- [Basic Types](#basic-types)
  - Primitive Types
  - Arrays and Tuples
  - Enums
  - Any and Unknown Types

- [Functions](#functions)
  - Function Types
  - Optional and Default Parameters
  - Rest Parameters

- [Interfaces](#interfaces)
  - Defining Interfaces
  - Optional Properties
  - Readonly Properties
  - Extending Interfaces

- [Classes](#classes)
  - Introduction to Classes
  - Constructors
  - Inheritance
  - Access Modifiers
  - Static Properties and Methods

- [Generics](#generics)
  - Introduction to Generics
  - Generic Functions
  - Generic Interfaces
  - Constraints in Generics

- [Modules](#modules)
  - Introduction to Modules
  - Exporting and Importing Modules
  - Namespaces vs Modules

- [Type Assertions](#type-assertions)
  - What are Type Assertions?
  - Different Ways to Assert Types

- [Advanced Types](#advanced-types)
  -- Union and Intersection Types
  -- Type Guards
  -- Mapped Types
  -- Conditional Types

- [Decorators](#decorators)
  -- Introduction to Decorators
  -- Class Decorators
  -- Method and Property Decorators

- [Working with Third-Party Libraries](#working-with-third-party-libraries)
  -- Using Type Definitions
  -- Install and Configure DefinitelyTyped

- [Tooling and Best Practices](#tooling-and-best-practices)
  -- TypeScript in Build Tools (Webpack, Gulp, etc.)
  -- Linting with TSLint/ESLint
  -- Best Practices for TypeScript Development

- [Testing TypeScript](#testing-typescript)
  -- Unit Testing Frameworks
  -- Writing Tests in TypeScript

## Introduction to TypeScript

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It was developed and is maintained by Microsoft. The main purpose of TypeScript is to provide optional static typing to catch errors early during development and improve code maintainability.

### Benefits of Using TypeScript

- **Type Safety**: TypeScript enables developers to use types, which helps catch errors at compile time rather than at runtime.
- **Enhanced IDE Support**: TypeScript provides better autocompletion and error-checking capabilities in modern IDEs.
- **Modularity**: TypeScript supports modular programming, making it easier to manage large codebases.
- **Improved Code Documentation**: Types act as documentation for functions and classes, making the code more understandable.

---

## Getting Started

### Installing TypeScript

To install TypeScript globally, use npm:

```bash
npm install -g typescript
```

### Setting Up a TypeScript Project

Create a new directory for your project, navigate into it, and initialize a new project:

```bash
mkdir my-typescript-project
cd my-typescript-project
npm init -y
```

Then, install TypeScript locally:

```bash
npm install --save-dev typescript
```

To create a `tsconfig.json` file for configuration:

```bash
npx tsc --init
```

### TypeScript Compiler Options

You can customize the compiler options in `tsconfig.json`. Common options include:

- `"target"`: Specify ECMAScript target version (e.g., "ES5", "ES6").
- `"module"`: Specify module system (e.g., "commonjs", "es6").
- `"strict"`: Enable all strict type-checking options.

---

## Basic Types

TypeScript provides several primitive types:

- **Number**: Represents both integers and floating-point numbers.

```typescript
let num: number = 42;
```

- **String**: Represents a sequence of characters.

```typescript
let str: string = "Hello, TypeScript!";
```

- **Boolean**: Represents a truthy or falsy value.

```typescript
let isActive: boolean = true;
```

- **Array**: Represents a collection of elements of a specific type.

```typescript
let arr: number[] = [1, 2, 3];
```

- **Tuple**: A fixed-size array with specific types.

```typescript
let tuple: [string, number] = ["Alice", 30];
```

- **Enum**: A way to define named constants.

```typescript
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
```

- **Any**: A type that can represent any value.

```typescript
let anything: any = "Hello";
anything = 5; // valid
```

- **Unknown**: Similar to `any`, but safer as it requires type checking before use.

```typescript
let value: unknown = 10;
if (typeof value === "number") {
  -console.log(value + 5);
}
```

---

## Functions

### Function Types

You can define types for function parameters and return values:

```typescript
function add(x: number, y: number): number {
  -return x + y;
}
```

### Optional and Default Parameters

Parameters can be made optional or have default values:

```typescript
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
```

### Rest Parameters

You can use rest parameters to accept a variable number of arguments:

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
```

---

## Interfaces

Interfaces in TypeScript define the structure of an object:

### Defining Interfaces

```typescript
interface Person {
    name: string;
    age: number;
}
```

### Optional Properties

Properties can be made optional using the `?` operator:

```typescript
interface Person {
    name: string;
    age?: number;
}
```

### Readonly Properties

You can declare properties that cannot be modified:

```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}
```

### Extending Interfaces

Interfaces can inherit from other interfaces:

```typescript
interface Employee extends Person {
    empId: number;
}
```

---

## Classes

TypeScript supports classes, including features like inheritance and access modifiers:

### Introduction to Classes

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}
```

### Constructors

Constructors are special methods for creating and initializing objects.

### Inheritance

Classes can extend other classes:

```typescript
class Dog extends Animal {
    speak(): void {
        console.log(`${this.name} barks.`);
    }
}
```

### Access Modifiers

You can use `public`, `private`, and `protected` to control access:

```typescript
class Person {
    private age: number; // Cannot be accessed outside this class
}
```

### Static Properties and Methods

You can define properties and methods that belong to the class itself and not to instances:

```typescript
class MathUtil {
    static PI: number = 3.14;

    static areaOfCircle(radius: number): number {
        return this.PI * radius * radius;
    }
}
```

---

## Generics

Generics allow you to create reusable components:

### Introduction to Generics

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

### Generic Interfaces

You can define an interface with a generic type:

```typescript
interface Container<T> {
    value: T;
}
```

### Constraints in Generics

You can constrain types using `extends`:

```typescript
function loggingIdentity<T extends { length: number }>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

---

## Modules

Modules in TypeScript help in organizing code:

### Introduction to Modules

Each file in TypeScript is considered a module.

### Exporting and Importing Modules

You can export classes, functions, or variables and import them in other files:

```typescript
// In module.ts
export class MyClass {}

// In main.ts
import { MyClass } from './module';
```

### Namespaces vs Modules

Namespaces were used in older versions of TypeScript but have been largely replaced by modules.

---

## Type Assertions

Type assertions allow you to override TypeScript's inferred types:

### What are Type Assertions?

Type assertions specify a type manually:

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### Different Ways to Assert Types

You can use either `as` or angle-bracket syntax:

```typescript
let strLength: number = (<string>someValue).length;
```

---

## Advanced Types

TypeScript provides several advanced types for more complex scenarios:

### Union and Intersection Types

- **Union Types** let you define a variable that can hold different types.

```typescript
let value: string | number;
```

- **Intersection Types** combine multiple types into one.

```typescript
type Admin = { admin: true };
type User = { name: string };
type AdminUser = Admin & User;
```

### Type Guards

Type guards are constructs used to narrow down types:

```typescript
function isString(x: any): x is string {
    return typeof x === 'string';
}
```

### Mapped Types

Mapped types allow you to create new types based on existing ones:

```typescript
type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};
```

### Conditional Types

Conditional types enable type inference based on conditions:

```typescript
type IsString<T> = T extends string ? "Yes" : "No";
```

---

## Decorators

Decorators are special annotations that can modify classes, methods, or properties.

### Introduction to Decorators

To use decorators, enable the experimental features in `tsconfig.json`:

```json
{
    "experimentalDecorators": true
}
```

### Class Decorators

Class decorators are functions that take a class constructor as an argument.

```typescript
function logged(target: Function) {
    console.log(target);
}
@logged
class MyClass {}
```

### Method and Property Decorators

Decorators can also be applied to methods and properties:

```typescript
function writable(value: boolean) {
    return function (target: any, key: string) {
        // Modify the property descriptor
    };
}
```

---

## Working with Third-Party Libraries

### Using Type Definitions

Install type definitions for libraries that do not include them.

```bash
npm install --save-dev @types/library-name
```

### Install and Configure DefinitelyTyped

DefinitelyTyped is a repository of high-quality type definitions.

---

## Tooling and Best Practices

### TypeScript in Build Tools (Webpack, Gulp, etc.)

Integrating TypeScript with build tools can streamline your workflow.

### Linting with TSLint/ESLint

Use linters to enforce coding standards and catch potential errors.

### Best Practices for TypeScript Development

- Use type annotations consistently.
- Prefer `unknown` over `any`.
- Keep your types well-organized.

---

## Testing TypeScript

### Unit Testing Frameworks

Use testing frameworks like Jest or Mocha for testing TypeScript code.

### Writing Tests in TypeScript

You can write tests directly in TypeScript files with the right configuration.

---

[EOF]
