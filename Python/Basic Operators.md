# Basic Operators

## Table of Contents

- **[Arithmetic Operators](#arithmetic-operators)**  
- **[Comparison Operators](#comparison-operators)**
- **[Logical Operators](#logical-operators)**
- **[Operator Precedence](#operator-precedence)**
  - **[Highest to Lowest Precendence:](#highest-to-lowest-precendence))**

---

## Arithmetic Operators

Arithmetic operators perform mathematical operations on numbers (integers, floats).

| Operator | Symbol | Description | Example |
|:----------|:-------|:------------|:--------|
| **Addition** | `+` | Adds two operands | `3 + 2 = 5` |
| **Subtraction** | `-` | Subtracts second operand from first | `5 - 2 = 3` |
| **Multiplication** | `*` | Multiplies two operands | `3 * 2 = 6` |
| **Division** | `/` | Divides first operand by second, returns float | `5 / 2 = 2.5` |
| **Modulus** | `%` | Returns remainder of division | `5 % 2 = 1` |
| **Floor Division** | `//` | Divides first operand by second, returns integer (floor) | `5 // 2 = 2` |
| **Exponentiation** | `**` | Raises first operand to the power of second	 | `3 ** 2 = 9` |

**Example:**

```python
a = 10
b = 3
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.3333333333333335
print(a % b)   # 1
print(a // b)  # 3
print(a ** b)  # 1000
```

---

## Comparison Operators

Comparison operators are used to compare two values. They return either `True` or `False`.

| Operator | Symbol | Description | Example |
|:----------|:-------|:------------|:--------|
| **Equal to** | `==` | Checks if two values are equal | `3 == 3` → True |
| **Not equal to** | `!=` | Checks if two values are not equal | `3 != 2` → True |
| **Greater than** | `>` | Checks if left operand is greater | `5 > 3` → True |
| **Less than** | `<` | Checks if left operand is smaller | `2 < 5` → True |
| **Greater than or equal to** | `>=` | Checks if left operand is greater or equal | `5 >= 5` → True |
| **Less than or equal to** | `<=` | Checks if left operand is smaller or equal | `3 <= 5` → True |

**Example:**

```python
x = 5
y = 3
print(x == y)   # False
print(x != y)   # True
print(x > y)    # True
print(x < y)    # False
print(x >= y)   # True
print(x <= y)   # False
```

---

## Logical Operators

Logical operators combine multiple conditions to return a single boolean result. They’re often used with comparison operators.

| Operator | Symbol | Description | Example |
|:----------|:-------|:------------|:--------|
| **AND** | `and` | True if both conditions are true | `True and False` → False |
| **OR** | `or` | True if at least one condition is true | `True or False` → True |
| **NOT** | `not` | Negates the condition (True to False, vice versa) | `not True` → False |

**Example:**

```python
a = 5
b = 3
c = 8
print(a > b and c > a)   # True, both conditions are True
print(a > b or b > c)    # True, one condition is True
print(not (a > b))       # False, as a > b is True, but `not` negates it
```

---

## Operator Precedence

Operator precedence determines the order in which operations are performed. 
Operators with higher precedence are evaluated first. If operators have the same precedence, they are evaluated from left to right.

### Highest to Lowest Precendence:

1. **Exponentiation:** **
2. **Unary Operators:** +, - (positive, negative)
3. **Multiplication, Division, Modulus, Floor Division:** *, /, %, //
4. **Addition, Subtraction:** +, -
5. **Comparison Operators:** <, <=, >, >=
6. **Equality Operators:** ==, !=
7. **Logical NOT:** not
8. **Logical AND:** and
9. **Logical OR:** or

**Example of operator precendence:**

```python
result = 5 + 3 * 2 ** 2 - 4 / 2
# Step-by-step evaluation:
# 1. 2 ** 2 = 4
# 2. 3 * 4 = 12
# 3. 4 / 2 = 2
# 4. 5 + 12 = 17
# 5. 17 - 2 = 15
print(result)  # Output: 15
```

  - **Using parentheses to override precedence:** Parentheses `()` can be used to explicitly control the order of evaluation.

  ```python
  result = (5 + 3) * (2 ** 2) - (4 / 2) 
  print(result)  # Output: 30.0
  ```
