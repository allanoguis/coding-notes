# Regular Expressions in JavaScript with ES6+

## Table of Contents

[Introduction to Regular Expressions](#introduction-to-regular-expressions)
[Creating Regular Expressions](#creating-regular-expressions)
[Regular Expression Methods](#regular-expression-methods)
[Regular Expression Syntax](#regular-expression-syntax)
    - [Basic Characters](#basic-characters)
    - [Quantifiers](#quantifiers)
    - [Special Characters](#special-characters)
    - [Groups and Capturing](#groups-and-capturing)
    - [Flags](#flags)
[Examples](#examples)
    - [Email Validation](#email-validation)
    - [URL Validation](#url-validation)
    - [Date Validation (YYYY-MM-DD)](#date-validation-yyyy-mm-dd)

---

## Introduction to Regular Expressions

Regular expressions (RegEx) are powerful patterns used to match character combinations in strings. They are a fundamental tool for text processing and validation in JavaScript. With ES6+, JavaScript introduced several enhancements to make working with regular expressions more efficient and expressive.

## Creating Regular Expressions

### Literal Syntax

Regular expressions can be created using literal syntax by enclosing the pattern in forward slashes (`/`).

```javascript
const regex = /pattern/;
```

### Constructor Syntax

Regular expressions can also be created using the RegExp constructor.

```javascript
const regex = new RegExp('pattern');
```

### ES6+ Enhancements

ES6 introduced template literals, which can be used to create dynamic regular expressions.

```javascript
const dynamicPattern = 'hello';
const regex = new RegExp(`${dynamicPattern}`);
```

## Regular Expression Methods

`test()` : The `test()` method tests for a match in a string. It returns true or false.

```javascript
const regex = /hello/;
const result = regex.test('hello world'); // true
```

`exec()` : The `exec()` method executes a search for a match in a string. It returns an array of information or null if no match is found.

```javascript
const regex = /hello/;
const result = regex.exec('hello world'); // ['hello']
```

`match()` : The `match()` method returns an array containing the matches in a string.

```javascript
const regex = /hello/;
const result = 'hello world'.match(regex); // ['hello']
```

`replace()` : The `replace()` method replaces matches in a string with a specified value.

```javascript
const regex = /hello/;
const result = 'hello world'.replace(regex, 'hi'); // 'hi world'
```

`search()` : The `search()` method searches for a match in a string. It returns the index of the first match or -1 if no match is found.

```javascript
const regex = /hello/;
const result = 'hello world'.search(regex); // 0
```

`split()` : The `split()` method splits a string into an array of substrings using a regular expression.

```javascript
const regex = /,/;
const result = 'apple,banana,cherry'.split(regex); // ['apple', 'banana', 'cherry']
```

## Regular Expression Syntax

### Basic Characters

| Symbol | Meaning |
|:-------|:--------|
| `.` | Any character except newline |
| `\d` | Digit `(0-9)` |
| `\D` | Not a digit |
| `\w` | Word character `(alphanumeric + underscore)` |
| `\W` | Not a word character |
| `\s` | Whitespace character |
| `\S` | Not a whitespace character |

### Quantifiers

| Symbol | Meaning |
|:-------|:--------|
| `*` | 0 or more occurrences |
| `+` | 1 or more occurrences |
| `?` | 0 or 1 occurrence |
| `{n}` | Exactly n occurrences |
| `{n,}` | n or more occurrences |
| `{n,m}` | Between n and m occurrences |

### Special Characters

| Symbol | Meaning |
|:-------|:--------|
| `^` | Start of string |
| `$` | End of string |
| `\` | Escape character |
| `[]` | Character set |
| `[^]` | Negated character set |
| `\|` | Alternation `(OR)` |
| `()` | Capturing group |

### Groups and Capturing

| Symbol | Meaning |
|:-------|:--------|
| `()` | Capturing group |
| `(?:)` | Non-capturing group |
| `\1, \2` | Backreferences to captured groups |

### Flags

| Flag | Meaning |
|:-----|:--------|
| `g` | Global search (find all matches) |
| `i` | Case-insensitive search |
| `m` | Multi-line search |

#### Examples

##### Email Validation

```javascript
const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
const isValidEmail = emailRegex.test('example@example.com'); // true
```

##### URL Validation

```javascript
const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const isValidUrl = urlRegex.test('https://www.example.com'); // true
```

##### Date Validation (YYYY-MM-DD)

```javascript
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const isValidDate = dateRegex.test('2023-10-05'); // true
```

> [!TIP]
>
> Use online tools like regex101.com to test and debug your regular expressions.
> Leverage ES6+ features like template literals for dynamic regular expressions.
> Always consider the performance implications of regular expressions, especially when dealing with large texts.
> Use online tools like regex101.com to test and debug your regular expressions.

[EOF]
