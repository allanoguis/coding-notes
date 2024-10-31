# Loops

## Table of Contents

- **[For and While Loops](#for-and-while-loops)**
  - **[For Loops](#for-loops)**
  - **[While Loops](#while-loops)**
- **[Loop Control](#loop-control)**
  - **[Break](#break)**
  - **[Continue](#continue)**
  - **[Pass](#pass)**
- **[Looping Through Different Data Types](#looping-through-different-data-types)**
- **[Nested Loops and Their Applications](#nested-loops-and-their-applications)**

---

## For and While Loops

### For Loops

- **Structure:** A `for` loop is typically used to iterate over a sequence (like a list, tuple, string, or range) or any iterable object.

- **Syntax:**

  ```python
  for variable in sequence:
      # Code block to execute for each item in sequence
  ```

- **Example:**

  ```python
  for num in range(5):
      print(num)
  ```
  
  - Output: `0 1 2 3 4`
  - Here, `range(5)` generates a sequence from 0 to 4, and each value is assigned to `num` in each iteration.

- **Usage:** Used when the number of iterations is known, or you need to loop over a collection of items (like lists or strings).

### While Loops

- **Structure:** A `while` loop continues to execute as long as its condition remains true.

- **Syntax:**

  ```python
  while condition:
      # Code block to execute while condition is true
  ```

- **Example:**

  ```python
  count = 0
  while count < 5:
      print(count)
      count += 1
  ```

  - Output: `0 1 2 3 4`
  - Here, the loop runs as long as `count` is less than 5. The counter variable `count` increments in each iteration to avoid an infinite loop.
 
- **Usage:** Used when the number of iterations is unknown and depends on a specific condition being met during runtime.

--- 

## Loop Control

### Break

`break` terminates the loop immediately, skipping any remaining code in the loop body for that iteration.

**Example:**

```python
for num in range(10):
    if num == 5:
        break
    print(num)
```

- Output: `0 1 2 3 4`
- The loop stops executing when `num` equals 5.

### Continue

`continue` skips the current iteration and proceeds to the next one, without breaking the loop.

**Example:**

```python
for num in range(5):
    if num == 2:
        continue
    print(num)
```

- Output: `0 1 3 4`
- Here, the iteration with `num == 2` is skipped.

### Pass

`pass` is a placeholder that does nothing. It’s useful in loops or conditionals where code will be added later.

**Example:**

```python
for num in range(5):
    if num == 2:
        pass  # No operation here
    print(num)
```

- Output: `0 1 2 3 4`
- `pass` here serves as a placeholder with no effect on the loop behavior.

--- 

## Looping Through Different Data Types

1. **Lists**

```python
my_list = [1, 2, 3, 4]
for item in my_list:
    print(item)
```

- Output: `1 2 3 4`
` Iterates over each element in a list.

2. **Tuples**

```python
my_tuple = (5, 6, 7)
for item in my_tuple:
    print(item)
```

- Output: `5 6 7`
- Similar to lists, tuples can be iterated with a `for` loop.

3. **Dictionaries**

```python
my_dict = {'a': 1, 'b': 2, 'c': 3}
for key, value in my_dict.items():
    print(f"{key}: {value}")
```

- Output:

  ```python
  a: 1
  b: 2
  c: 3
  ```

- The `items()` method allows looping through both keys and values.

4. **Strings**

```python
my_string = "hello"
for char in my_string:
    print(char)
```

- Output:

  ```python
  h
  e
  l
  l
  o
  ```

- Each character of the string is processed in each loop iteration.

5. **Range**

```python
for num in range(3):
    print(num)
```

- Output: ```0 1 2```
- The `range()` function creates a sequence of numbers, often used in loops.

---

## Nested Loops and Their Applications

A nested loop is a loop inside another loop. The inner loop runs fully for each iteration of the outer loop.

- **Syntax:**

  ```python
  for i in range(3):        # Outer loop
      for j in range(2):    # Inner loop
          print(i, j)
  ```

- **Output:**

  ```python
  0 0
  0 1
  1 0
  1 1
  2 0
  2 1
  ```
  
  - Here, the inner loop runs twice for every single iteration of the outer loop.

- **Usage:**

  Nested loops are commonly used when working with multi-dimensional data, such as a matrix or table:
  
  ```python
  matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  for row in matrix:
      for value in row:
          print(value)
  ```

  - Output: `1 2 3 4 5 6 7 8 9`
  - This iterates over each element in a 2D list (matrix).

- **Applications:**

  1. **Multi-dimensional data** (e.g., image data in machine learning, matrix manipulation)
  2. **Grid-based games** (e.g., navigating a chessboard)
  3. **Cartesian products** in combinatorics, where each element of one set pairs with each element of another set
