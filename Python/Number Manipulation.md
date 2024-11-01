# Number Manipulation with Python

## Table of Contents

- **[Number Types](#number-types)**
- **[Arithmetic Operations](#arithmetic-operations)**
  - **[Basic Operators](#basic-operators)**
  - **[Division and Modulus](#division-and-modulus)**
  - **[Exponentiation](#exponentiation)**
- **[Number Manipulation with Functions](#number-manipulation-with-functions)**
  - **[Math Functions](#math-functions)**
  - **[Statistical Functions](#statistical-functions)**
- **[Random Numbers](#random-numbers)**
- **[Rounding and Precision](#rounding-and-precision)**

---

## Number Types

Python offers three main number types:

- **Integers (int):** Whole numbers without a decimal part.
  - **Example:**
    ```python
    my_integer = 42
    ```

- **Floating Point Numbers (float):** Numbers with a decimal part, useful for precision operations.
  - **Example:**
    ```python
    my_float = 3.14
    ```

- **Complex Numbers (complex):** Numbers with a real and an imaginary part, denoted with a `j` suffix.
  - **Example:**
    ```python
    my_complex = 2 + 3j
    ```

---

## Arithmetic Operations

- ### Basic Operators

  Python provides basic arithmetic operators: addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).

  - **Example:**
    ```python
    a, b = 10, 3
    addition = a + b  # 13
    subtraction = a - b  # 7
    multiplication = a * b  # 30
    division = a / b  # 3.333
    ```

- ### Division and Modulus

  Integer division (`//`) discards the decimal part, while the modulus operator (`%`) returns the remainder.

  - **Example:**
    ```python
    integer_division = a // b  # 3
    modulus = a % b  # 1
    ```

- ### Exponentiation

  The exponentiation operator `**` raises a number to a specific power.

  - **Example:**
    ```python
    power = a ** 2  # 100
    ```

---

## Number Manipulation with Functions

- ### Math Functions

  The `math` module includes many functions for mathematical operations.

  - **Example:**
    ```python
    import math
    square_root = math.sqrt(25)  # 5.0
    logarithm = math.log(10)  # 2.302...
    sine = math.sin(math.pi / 2)  # 1.0
    ```

- ### Statistical Functions

  The `statistics` library provides functions like `mean` and `median`.

  - **Example:**
    ```python
    import statistics
    data = [1, 2, 3, 4, 5]
    mean = statistics.mean(data)  # 3
    median = statistics.median(data)  # 3
    ```

---

## Random Numbers

The `random` module is used to generate random numbers in Python.

- **Example:**
  ```python
  import random
  random_number = random.randint(1, 10)  # Random integer between 1 and 10
  ```

---

## Rounding and Precision

To round numbers, use `round`, and for more precise control, use the `decimal` module.

- **Example:**
  ```python
  value = 3.14159
  rounded = round(value, 2)  # 3.14
  ```
