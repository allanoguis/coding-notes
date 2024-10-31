# Control Flow

## Table of Contents

- **[Basic if-else Conditions](#basic-if-else-conditions)**
- **[Nested and Multiple Conditions (elif)](#nested-and-multiple-conditions)**
- **[Logical Expressions in Control Flow](#logical-expressions-in-control-flow)**
  - **[Operators](#operators)**
  - **[Use Case Examples](#use-case-examples)**
- **[Ternary Expressions](#ternary-expressions)**

---

## Basic if-else Conditions

The `if` statement allows you to execute a block of code only if a specified condition is true. The `else` statement provides an alternative block of code if the condition is false.

**Syntax:**

```python
if condition:
    # Code to execute if condition is true
else:
    # Code to execute if condition is false
```

**Example:**

```python
age = 18
if age >= 18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")
```

Here, the code checks if `age` is greater than or equal to 18. If true, it prints a message about eligibility. If false, it provides an alternate message.

---

## Nested and Multiple Conditions

Python allows you to nest `if` statements within each other for more complex conditions or use `elif` (short for “else if”) for multiple conditions.

**Syntax:**

```python
if condition1:
    # Code for condition1
elif condition2:
    # Code for condition2
else:
    # Code if neither condition1 nor condition2 is true
```

**Example of `elif`:**

```python
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: D")
```

This code assigns a grade based on `score`. It checks each condition in order, and once a true condition is found, the corresponding block is executed, skipping any remaining conditions.

**Example of nested conditions:**

```python
age = 20
has_permission = True
if age >= 18:
    if has_permission:
        print("Access granted.")
    else:
        print("Permission denied.")
else:
    print("Access denied due to age.")
```

Here, `has_permission` is checked only if the first condition (`age >= 18`) is true. This allows for handling complex scenarios with dependencies.

--- 

## Logical Expressions in Control Flow

Logical expressions use operators (`and`, `or`, `not`) to combine multiple conditions in a single `if` statement, enhancing flexibility.

### Operators

- `and`: Evaluates to true if both conditions are true.
- `or`: Evaluates to true if at least one condition is true.
- `not`: Inverts the boolean value of a condition.

### Use Cases Examples 

- **Example 1:**
  
  ```python
  age = 20
  has_ID = True
  if age >= 18 and has_ID:
      print("Allowed entry.")
  else:
      print("Entry not allowed.")
  ```

  Here, both `age >= 18` and `has_ID` must be true for entry to be allowed.

- **Example 2:**

  ```python
  has_ticket = False
  vip_pass = True
  if has_ticket or vip_pass:
      print("Entry granted.")
  else:
      print("Entry denied.")
  ```

  This example allows entry if the user has either a ticket or a VIP pass.

- **Example 3:**

  ```python
  is_member = False
  if not is_member:
      print("Please sign up to become a member.")
  ```

  The `not` operator inverts `is_member`. If `is_member` is `False`, the message is shown.

  ---

## Ternary Expressions

A ternary expression is a shorthand way to write an `if-else` statement in a single line. It’s useful for simple conditions and assignments.

**Syntax:**

```python
value_if_true if condition else value_if_false
```

**Example:**

```python
age = 17
status = "Adult" if age >= 18 else "Minor"
print(status)  # Output: Minor
```

Here, `status` is assigned "Adult" if `age >= 18` is true; otherwise, it’s assigned "Minor". Ternary expressions are concise and useful when assigning values based on conditions.

**Another Example:**

```python
is_even = "Even" if num % 2 == 0 else "Odd"
```

This checks if a number is even or odd, assigning the appropriate string based on the condition `num % 2 == 0`.
