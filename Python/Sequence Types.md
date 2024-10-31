# Sequence Types

## Table of Contents

- **[Lists and Tuples](#lists-and-tuples)**
- **[Indexing, Slicing and Iterating](#indexing-slicing-and-iterating)**
  - **[Indexing](#indexing)**
  - **[Slicing](#slicing)**
  - **[Iterating](#iterating)**
- **[List Methods](#list-methods)**
- **[Tuple Immutability and Use Cases](#tuple-immutability-and-use-cases)**
  - **[Tuple Immutability](#tuple-immutability)**
  - **[Use Cases](#use-cases)**
- **[Nested Lists and Tuples](#nested-lists-and-tuples)**

---

## Lists and Tuples 

- **Lists:** A list is a mutable, ordered collection of items in Python. It can hold elements of different data types (e.g., integers, strings, other lists).
  - **Syntax:** Lists are defined using square brackets `[]`, with items separated by commas.
  - **Example:**
    ```python
    my_list = [1, "apple", 3.5, [2, 3]]
    ```

- **Tuples:** A tuple is an immutable, ordered collection of items. Once defined, its elements cannot be modified, making it useful for data that shouldn’t change.
  - **Syntax:** Tuples are defined using parentheses `()`, with items separated by commas.
  - **Example:** 
    ```python
    my_tuple = (1, "banana", 4.2)
    ```

---

## Indexing, Slicing and Iterating

- ### Indexing

  Both lists and tuples are indexed starting from 0. You can access elements by specifying their index in square brackets.

  - **Example:**
    
    ```python
    my_list = [10, 20, 30]
    print(my_list[1])  # Outputs: 20
    ```

- ### Slicing

  You can retrieve a range of elements by specifying a start and end index with a colon `:`.

  - **Syntax:** `sequence[start:end:step]`
 
  - **Example:**
 
    ```python
    my_list = [10, 20, 30, 40, 50]
    print(my_list[1:4])  # Outputs: [20, 30, 40]
    ```

- ### Iterating

  You can loop through both lists and tuples using a `for` loop.

  - **Example:**
 
    ```python
    for item in my_list:
    print(item)
    ```

---

## List Methods 

Lists come with several built-in methods to modify or retrieve information:

- **append(item):** Adds an item to the end of the list.

```python
my_list = [1, 2, 3]
my_list.append(4)  # my_list is now [1, 2, 3, 4]
```

- **remove(item):** Removes the first occurrence of the specified item.

```python
my_list.remove(2)  # Removes the first occurrence of 2
```

- **pop(index):** Removes and returns the item at the specified index (default is the last item).

```python
last_item = my_list.pop()  # Removes and returns the last item
```

- **sort():** Sorts the list in place (ascending by default).

```python
my_list.sort()  # Sorts the list in ascending order
```

- **reverse():** Reverses the list in place.

```python
my_list.reverse()  # Reverses the list order
```

- **index(item):** Returns the index of the first occurrence of the specified item.

```python
index_of_3 = my_list.index(3)  # Finds the index of 3
```

- **count(item):** Returns the number of occurrences of the specified item in the list.

```python
count_of_3 = my_list.count(3)  # Counts occurrences of 3
```

--- 

## Tuple Immutability and Use Cases

- ### Tuple Immutability

Once a tuple is created, its elements cannot be modified, added to, or removed. This immutability makes tuples safer for certain types of data that shouldn’t change throughout a program, like coordinates, constant values, or configuration settings.

**Example:**

```python
my_tuple = (1, 2, 3)
# my_tuple[1] = 4  # Raises an error, as tuples are immutable
```

- ### Use Cases

1. Tuples are faster and more memory-efficient than lists, making them a good choice when dealing with large data sets or fixed collections of data.
2. Often used in functions that return multiple values, where each value has a specific, unchangeable role.
3. Can be used as dictionary keys, while lists cannot, due to their immutability.

---

## Nested Lists and Tuples

- ### Nested Lists

  A nested list is a list that contains other lists as its elements. This structure is useful for representing hierarchical data, grids, or matrices.

  **Example:**
  
  ```python
  nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  ```
  
  - **Accessing Elements in Nested Lists:** Access elements within a nested list by using multiple indices. The first index accesses the sub-list, and the second index accesses the specific element within that sub-list. Nested lists are frequently used for multi-dimensional arrays, such as grids or matrices.
 
    **Example:**

    ```python
    # Accessing the element 5 in nested_list
    print(nested_list[1][1])  # Outputs: 5
    ```

- ### Nested Tuples

  A nested tuple is a tuple that contains other tuples as its elements. Like nested lists, nested tuples are useful for structured data but are immutable. Nested tuples can represent fixed, structured data hierarchies that don’t require modification.

  **Example:**
  
  ```python
  nested_tuple = ((1, 2), (3, 4), (5, 6))
  ```
  
  - **Accessing Elements in Nested Tuples:** Use multiple indices to retrieve elements within nested tuples, similar to nested lists.
 
    **Example:**

    ```python
    # Accessing the element 4 in nested_tuple
    print(nested_tuple[1][1])  # Outputs: 4
    ```
