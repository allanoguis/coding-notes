# Math Functions in JavaScript with ES6+

## Table of Contents

1. [Introduction to Math Functions](#introduction-to-math-functions)
2. [Common Math Functions](#common-math-functions)
3. [ES6+ Math Functions](#es6-math-functions)
4. [Examples](#examples)

## Introduction to Math Functions

The `Math` object in JavaScript provides a collection of built-in functions and constants for performing mathematical operations. With the introduction of ES6, JavaScript added several new features and methods to the `Math` object, making it more powerful and flexible.

## Common Math Functions

### Basic Functions

| Function | Description | Example |
|:---------|:------------|:--------|
| `Math.abs(x)` | Returns the absolute value of `x` | `Math.abs(-5); // 5` |
| `Math.ceil(x)` | Returns the smallest integer greater than or equal to `x` | `Math.ceil(4.2); // 5` |
| `Math.floor(x)` | Returns the largest integer less than or equal to `x` | `Math.floor(4.7); // 4` |
| `Math.round(x)` | Returns the value of `x` rounded to the nearest integer | `Math.round(4.5); // 5` |
| `Math.max(x1, x2, ..., xn)` | Returns the largest of zero or more numbers | `Math.max(1, 3, 2); // 3` |
| `Math.min(x1, x2, ..., xn)` | Returns the smallest of zero or more numbers | `Math.min(1, 3, 2); // 1` |
| `Math.pow(x, y)` | Returns `x` raised to the power of `y` | `Math.pow(2, 3); // 8` |
| `Math.sqrt(x)` | Returns the square root of `x` | `Math.sqrt(9); // 3` |

### Trigonometric Functions

| Function | Description | Example |
|:---------|:------------|:--------|
| `Math.sin(x)` | Returns the sine of `x` (in radians) | `Math.sin(Math.PI / 2); // 1` |
| `Math.cos(x)` | Returns the cosine of `x` (in radians) | `Math.cos(Math.PI); // -1` |
| `Math.tan(x)` | Returns the tangent of `x` (in radians) | `Math.tan(Math.PI / 4); // 1` |
| `Math.asin(x)` | Returns the arcsine of `x` (in radians) | `Math.asin(1); // Math.PI / 2` |
| `Math.acos(x)` | Returns the arccosine of `x` (in radians) | `Math.acos(1); // 0` |
| `Math.atan(x)` | Returns the arctangent of `x` (in radians) | `Math.atan(1); // Math.PI / 4` |

### Logarithmic Functions

| Function | Description | Example |
|:---------|:------------|:--------|
| `Math.log(x)` | Returns the natural logarithm (base `e`) of `x` | `Math.log(Math.E); // 1` |
| `Math.log10(x)` | Returns the base 10 logarithm of `x` | `Math.log10(100); // 2` |
| `Math.log2(x)` | Returns the base 2 logarithm of `x` | `Math.log2(8); // 3` |

### Random Number Functions

| Function | Description | Example |
|:---------|:------------|:--------|
| `Math.random()` | Returns a floating-point, pseudo-random number in the range [0, 1) | `Math.random(); // e.g., 0.54321` |

## ES6+ Math Functions

### Additional Functions

| Function | Description | Example |
|:---------|:------------|:--------|
| `Math.sign(x)` | Returns the sign of `x`, indicating whether `x` is positive, negative, or zero | `Math.sign(-5); // -1` |
| `Math.trunc(x)` | Returns the integer part of `x` by removing any fractional digits | `Math.trunc(4.9); // 4` |
| `Math.cbrt(x)` | Returns the cube root of `x` | `Math.cbrt(27); // 3` |
| `Math.hypot(x1, x2, ..., xn)` | Returns the square root of the sum of squares of its arguments | `Math.hypot(3, 4); // 5` |

### Constants

| Constant | Description | Example |
|:---------|:------------|:--------|
| `Math.PI` | Returns the ratio of the circumference of a circle to its diameter (approximately 3.14159) | `Math.PI; // 3.141592653589793` |
| `Math.E` | Returns Euler's number (approximately 2.718) | `Math.E; // 2.718281828459045` |
| `Math.SQRT2` | Returns the square root of 2 (approximately 1.414) | `Math.SQRT2; // 1.4142135623730951` |
| `Math.SQRT1_2` | Returns the square root of 1/2 (approximately 0.707) | `Math.SQRT1_2; // 0.7071067811865476` |

## Examples

### Generating Random Numbers

```javascript
javascript const randomNum = Math.random(); console.log(randomNum); // e.g., 0.54321

const randomInt = Math.floor(Math.random() * 10); // Random integer between 0 and 9 console.log(randomInt); // e.g., 7

const randomInt = Math.floor(Math.random() * 10); // Random integer between 0 and 9
console.log(randomInt); // e.g., 7
```

### Calculating Squares and Cubes

```javascript
const square = Math.pow(2, 2); // 4
const cube = Math.pow(3, 3); // 27
```

### Calculating Angles

```javascript
const angle = Math.PI / 4; // 45 degrees
const sin = Math.sin(angle); // 0.7071067811865476
const cos = Math.cos(angle); // 0.7071067811865476
const tan = Math.tan(angle); // 1
```

### Finding the Hypotenuse

```javascript
const a = 3;
const b = 4;
const c = Math.hypot(a, b); // 5
```

> [!TIP]
>
> Use `Math.random()` for generating random numbers.
> Leverage trigonometric functions for angle calculations.
> Use logarithmic functions for scaling and normalization.
> Always consider the precision and performance implications of mathematical operations.

[EOF]
