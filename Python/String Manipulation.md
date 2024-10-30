# String Manipulation

## Table of Contents

- **[Basic String Operations](#basic-string-operations)**
- **[Common String Methods](#common-string-methods)**
- **[String Formatting](#string-formatting)**
- **[Slicing and Indexing Strings](#slicing-and-indexing-strings)**
  - **[Indexing](#indexing)**
  - **[Slicing](#slicing)**
  - **[Step](#step)**

---

## Basic String Operations

- **Concatenation:** Joining multiple strings into a single string. In Python, the `+` operator is used for concatenation.
  
  ```python
  first_name = "John"
  last_name = "Doe"
  full_name = first_name + " " + last_name  # "John Doe"
  ```
- **Repetition:** Creating a repeated sequence of a string by using the `*` operator.

  ```python
  laugh = "ha"
  repeated_laugh = laugh * 3  # "hahaha"
  ```

---

## Common String Methods

1. **`find()`:** Returns the index of the first occurrence of a substring. If the substring is not found, it returns `-1`.
  
  ```python
  text = "Hello, world!"
  index = text.find("world")  # 7
  ```

2. **`replace()`:** Replaces occurrences of a substring within a string with another substring.

  ```python
  text = "I like apples"
  new_text = text.replace("apples", "oranges")  # "I like oranges"
  ```

3. **`split()`:** Splits a string into a list of substrings based on a specified delimiter (default is whitespace).

  ```python
  sentence = "Hello world"
  words = sentence.split()  # ["Hello", "world"]
  ```

4. **`join()`:** Combines elements of a list or iterable into a single string, with a specified separator.

  ```python
  words = ["Hello", "world"]
  sentence = " ".join(words)  # "Hello world"
  ```

5. **`upper()` upper() `lower()`:** Converts a string to uppercase or lowercase.

  ```python
  text = "Hello"
  text_upper = text.upper()  # "HELLO"
  text_lower = text.lower()  # "hello"
  ```

6. **`strip()`:** Removes leading and trailing whitespace or specified characters.

  ```python
  text = "   Hello   "
  stripped_text = text.strip()  # "Hello"
  ```

---

## String Formatting

- **f-strings (formatted string literals):** A concise way to embed expressions inside string literals, available in Python 3.6 and later. Place variables or expressions within `{}` brackets prefixed by `f`.

  ```python
  name = "Alice"
  age = 25
  info = f"{name} is {age} years old."  # "Alice is 25 years old."
  ```

- **`format()` method:** Allows placeholders in a string to be replaced by variables, using `{}` brackets.

  ```python
  name = "Alice"
  age = 25
  info = "{} is {} years old.".format(name, age)  # "Alice is 25 years old."
  ```

- **`%` operator:** Another way to format strings, especially common in older Python code.

  ```python
  name = "Alice"
  age = 25
  info = "%s is %d years old." % (name, age)  # "Alice is 25 years old."
  ```

---

## Slicing and Indexing Strings

- ### Indexing

Accessing individual characters in a string by their index, starting from `0`.

```python
text = "Hello"
first_char = text[0]  # "H"
last_char = text[-1]  # "o"
```

- ### Slicing

Extracting a substring by specifying a range of indices. The syntax `text[start:end]` returns characters from the `start` index up to, but not including, the `end` index.

```python
text = "Hello, world!"
slice1 = text[0:5]  # "Hello"
slice2 = text[7:]  # "world!"
slice3 = text[:5]  # "Hello"
```

- ### Step

An optional third parameter for slices to specify the step value. This is useful for reversing a string.

```python
text = "Hello, world!"
reversed_text = text[::-1]  # "!dlrow ,olleH"
```
