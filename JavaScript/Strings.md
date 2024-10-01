# Strings in JavaScript with ES6+

## Table of Contents

[Introduction to Strings](#introduction-to-strings)
[String Declaration](#string-declaration)
      - [Template Literals](#template-literals)
[String Methods](#string-methods)
    - [Common String Methods](#common-string-methods)
    - [ES6+ String Methods](#es6-string-methods)
[String Properties](#string-properties)
[String Concatenation](#string-concatenation)
[String Comparison](#string-comparison)

---

## Introduction to Strings

Strings are a fundamental data type in JavaScript used to represent textual data. With the introduction of ES6, JavaScript added several new features and methods to make string manipulation more powerful and flexible.

## String Declaration

### Template Literals

Template literals, introduced in ES6, allow embedding expressions inside strings using backticks (`` ` ``). They support multi-line strings and embedded expressions.

```javascript
const name = 'John';
const greeting = `Hello, ${name}!
Welcome to our website.`;
console.log(greeting);
```

Output:

 Hello, John!
    Welcome to our website.

## String Methods

### Common String Methods

| Method | Description | Example |
|:-------|:------------|:--------|
| `str.length` | Returns the length of the string | `const len = 'hello'.length; // 5` |
| `str.charAt(index)` | Returns the character at the specified index | `const char = 'hello'.charAt(1); // 'e'` |
| `str.indexOf(substring)` | Returns the index of the first occurrence of a substring | `const index = 'hello'.indexOf('l'); // 2` |
| `str.lastIndexOf(substring)` | Returns the index of the last occurrence of a substring | `const lastIndex = 'hello'.lastIndexOf('l'); // 3` |
| str.slice(start, end) | Extracts a section of a string and returns it as a new string | `const sliced = 'hello'.slice(1, 4); // 'ell'` |
| `str.substring(start, end)` | Returns the part of the string between the start and end indexes | `const sub = 'hello'.substring(1, 4); // 'ell'` |
| `str.toLowerCase()` | Converts a string to lowercase letters | `const lower = 'HELLO'.toLowerCase(); // 'hello'` |
| `str.toUpperCase()` | Converts a string to uppercase letters | `const upper = 'hello'.toUpperCase(); // 'HELLO'` |
| `str.trim()` | Removes whitespace from both ends of a string | `const trimmed = '  hello  '.trim(); // 'hello'` |
| `str.replace(searchValue, replaceValue)` | Replaces a specified value with another value in a string | `const replaced = 'hello'.replace('l', 'x'); // 'hexlo'` |

### ES6+ String Methods

| Method | Description | Example |
|:-------|:------------|:--------|
| `str.includes(substring)` | Determines whether a string contains the specified substring | `const includes = 'hello'.includes('ell'); // true` |
| `str.startsWith(substring)` | Determines whether a string starts with the specified substring | `const startsWith = 'hello'.startsWith('he'); // true` |
| `str.endsWith(substring)` | Determines whether a string ends with the specified substring | `const endsWith = 'hello'.endsWith('lo'); // true` |
| `str.repeat(count)` | Returns a new string with a specified number of copies of the original string | `const repeated = 'ha'.repeat(3); // 'hahaha'` |

## String Properties

| Property | Description | Example |
|:---------|:------------|:--------|
| `str.length` | Returns the length of the string | `const len = 'hello'.length; // 5` |

## String Concatenation

Strings can be concatenated using the + operator or the concat() method.

```javascript
const str1 = 'Hello';
const str2 = 'World';
const combined = str1 + ' ' + str2; // 'Hello World'
const combined2 = str1.concat(' ', str2); // 'Hello World'
```

## String Comparison

Strings can be compared using comparison operators `(<, >, <=, >=, ==, ===)`.

```javascript
const str1 = 'apple';
const str2 = 'banana';
console.log(str1 < str2); // true
console.log(str1 === 'apple'); // true
```

> [!TIP]
>
> Use template literals for multi-line strings and embedded expressions.
> Leverage ES6+ string methods like includes, startsWith, and endsWith for more expressive string operations.
> Always consider the performance implications of string operations, especially when dealing with large strings.

[EOF]
