# Mapping and Set Types

## Table of Contents 

- **[Dictionaries and Sets](#dictionaries-and-sets)**
  - **[Dictionaries](#dictionaries)**
  - **[Sets](#sets)**
- **[Dictionary Methods](#dictionary-methods)**
- **[Set Operations](#set-operations)**
- **[Dictionaries VS Sets](#dictionaries-vs-sets)**

---

## Dictionaries and Sets

### Dictionaries

A dictionary is a collection of key-value pairs, where each unique key maps to a specific value. Dictionaries are defined using curly braces `{}` with each item as a `key: value` pair. Keys are immutable (like strings, numbers, or tuples) and must be unique, while values can be of any data type and can be duplicated. 

**Syntax Example:**

```python
# Creating a dictionary
my_dict = {"name": "Alice", "age": 25, "city": "New York"}
```

### Sets

A set is an unordered collection of unique items. Sets are also defined using curly braces `{}` with individual elements separated by commas. Sets automatically remove any duplicate items and are commonly used for mathematical operations. 

**Syntax Example:**

```python
# Creating a set
my_set = {1, 2, 3, 4, 5}
```

--- 

## Dictionary Methods 

Dictionaries offer several methods for accessing, updating, and managing key-value pairs: 

- **`get()`:** Retrieves the value associated with a specified key. If the key does not exist, it returns `None` (or a specified default value).

  ```python
  my_dict.get("name")  # Output: "Alice"
  my_dict.get("salary", "Not found")  # Output: "Not found"
  ```
  
- **`update()`:** Adds key-value pairs from another dictionary or an iterable of key-value pairs. It updates values of existing keys or adds new pairs.

  ```python
  my_dict.update({"age": 26, "job": "Engineer"})
  ```
  
- **`keys()`:** Returns a view object containing all keys in the dictionary.

  ```python
  my_dict.keys()  # Output: dict_keys(['name', 'age', 'city', 'job'])
  ```
  
- **`values()`:** Returns a view object containing all values in the dictionary.

  ```python
  my_dict.values()  # Output: dict_values(['Alice', 26, 'New York', 'Engineer'])
  ```
  
- **`items()`:** Returns a view object containing all key-value pairs as tuples.

  ```python
  my_dict.items()  # Output: dict_items([('name', 'Alice'), ('age', 26), ('city', 'New York'), ('job', 'Engineer')])
  ```
  
- **`pop()`:** Removes the specified key and returns its value. Raises an error if the key is not found (unless a default value is specified).

  ```python
  my_dict.pop("city")  # Removes 'city' key and returns its value "New York"
  ```
  
- **`clear()`:** Removes all items from the dictionary.

  ```python
  my_dict.pop("city")  # Removes 'city' key and returns its value "New York"
  ```

---

## Set Operations

Sets provide various mathematical operations to compare and manipulate sets:

- **`union()` (`|`):** Combines all unique elements from two or more sets.

  ```python
  set_a = {1, 2, 3}
  set_b = {3, 4, 5}
  set_a.union(set_b)  # Output: {1, 2, 3, 4, 5}
  ```

- **`intersection()` (`&`):** Returns only the elements that are common to both sets.

  ```python
  set_a.intersection(set_b)  # Output: {3}
  ```
  
- **`difference()` (`-`):** Returns the elements in the first set that are not in the second set.

  ```python
  set_a.difference(set_b)  # Output: {1, 2}
  ```
  
- **`symmetric_difference()` (`^`):** Returns the elements that are in either of the sets but not in both.

  ```python
  set_a.symmetric_difference(set_b)  # Output: {1, 2, 4, 5}
  ```
  
- **`add()`:** Adds an element to the set.

  ```python
  my_set.add(6)  # Adds 6 to the set
  ```
  
- **`remove()` and `discard()`:** Removes an element from the set. `remove()` raises an error if the element doesn’t exist, while `discard()` does not.

  ```python
  my_set.remove(6)  # Removes 6 from the set
  ```
  
- **`issubset()` and `issuperset()`:** Checks if a set is a subset or superset of another set.

  ```python
  set_a.issubset({1, 2, 3, 4})  # Output: True
  ```

---

## Dictionaries VS Sets

Here’s a table comparing dictionaries and sets with their unique features and use cases: 

| Feature | Dictionaries | Sets |
|:----------|:------------|:--------|
| **Definition** | Collection of key-value pairs	 | Unordered collection of unique elements |
| **Syntax** | `{key: value, ...}` | `{element1, element2, ...}` |
| **Data Access** | Accessed by keys (`my_dict["key"]`) | Accessed by elements; supports membership testing (`in`) |
| **Mutability** | Mutable (can add/remove key-value pairs) | Mutable (can add/remove elements) |
| **Use Case** | Quick lookups, storing data with unique keys | Set operations (union, intersection), membership tests, story a collection of unique items |
| **Examples** | Storing configuration settings, counting items | Eliminating duplicates, mathematical set operations |
