# Variables in Python

## Table of Contents

- **[Variables](#variables)**  
  - **[Variable Declaration](#variable-declaration)**
  - **[Rules for Naming Variables:](#rules-for-naming-variables)**
- **[Data Types](#data-types)**
- **[Type Casting and Type Checking](#type-casting-and-type-checking)**
- **[Constants and Naming Conventions](#constants-and-naming-conventions)**
  - **[Constants](#constants)**
  - **[Naming Conventions](#naming-conventions)**

---

## Variables

A variable is a name that refers to a memory location storing data. Unlike other languages, variables do not need to be declared with a specific type in python. 

### Variable Declaration

Variables are created by simply assigning a value to a name:

```python
age = 25
name = "Alice"
```

### Rules for Naming Variables:

- Variable names must start with a letter or an underscore (_).
- Variable names can contain letters, numbers, and underscores but they cannot start with a number.
- Python is case-sensitive, so `age` and `python Age` are going to be treated as two different variables.
- Avoid using reserved keywords (e.g., `if`, `else`, `for`) as variable names.

## Data Types

Python’s basic data types include:

1. **Integer** (int): Whole numbers, positive or negative, without a decimal. Integers are unbounded in Python, meaning they can be as large as memory allows.

```python
count = 10
```

2. **Float** (float): Numbers with decimal points. Floats can represent fractions and real numbers.

```python
price = 19.99
```

3. **String** (str): A sequence of characters (letters, symbols, digits, etc.). Strings are enclosed within single, double, or triple quotes.

```python
name = "Alice"
```

4. **Boolean** (bool): Represents True or False values, often used for conditional expressions.

```python
is_valid = True
```

5. **NoneType** (None): Represents the absence of a value or a null value. Commonly used as a placeholder or default value in functions.

```python
result = None
```

## Type Casting and Type Checking

- **Type Casting:** Converting one data type to another. Python provides several functions to convert between types:

```python
int("10")      # Converts string to integer -> 10
float("3.14")  # Converts string to float -> 3.14
str(25)        # Converts integer to string -> "25"
bool(0)        # Converts integer to boolean -> False
```

- **Implicit Type Conversion:** Python automatically converts data types in certain operations (e.g., adding an integer and float results in a float).

- **Type Checking:** Using `type()` to check the data type of a variable. `isinstance()` checks if a variable is of a particular type:

```python
age = 25
print(type(age))               # <class 'int'>
print(isinstance(age, int))    # True
```

## Constants and Naming Conventions

### Constants 

Python doesn’t have built-in constant support, but by convention, variable names in all uppercase are used to indicate constants. Typically, constants are defined at the beginning of a script or within a module:

```python
PI = 3.14159
MAX_USERS = 100
```

### Naming Conventions:
- snake_case is used for variables and functions (e.g., user_name, calculate_total).
- ALL_CAPS is used for constants (e.g., PI, MAX_USERS).
- CamelCase is used for class names (e.g., CustomerProfile).
