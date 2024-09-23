Using Effect in React
The useEffect hook is a powerful feature in React that allows functional components to perform side effects, such as data fetching, subscriptions, or manually changing the DOM. It serves as a replacement for lifecycle methods in class components, such as componentDidMount, componentDidUpdate, and componentWillUnmount.

Table of Contents
Introduction to useEffect
Basic Usage
Dependencies Array
Cleanup Function
Common Use Cases
Best Practices
Conclusion
Introduction to useEffect
The useEffect hook allows you to synchronize your component with an external system. By default, it runs after every render, but you can control when it runs based on the dependencies you provide.

Syntax

```jsx
useEffect(() => {
  // Your side effect code here
}, [dependencies]);
```

Basic Usage

To use useEffect, import it from React and call it within your functional component. Here's a straightforward example:

```jsx
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    console.log('Component mounted or updated');

    // Optional cleanup function
    return () => {
      console.log('Cleanup before the next effect or when unmounting');
    };
  });

  return <div>Hello, World!</div>;
};
```

Dependencies Array

By passing a second argument, known as the dependencies array, you can control when the effect runs:

If you provide an empty array [], the effect runs only once after the initial render (similar to componentDidMount).
If you include variables in the array, the effect runs whenever those variables change.

Example:

```jsx
useEffect(() => {
  console.log('Effect runs only on mount or when count changes');
}, [count]);
```

Cleanup Function
If your effect returns a function, React will run it before running the effect again or when the component is unmounted. This cleanup is crucial for preventing memory leaks, especially in cases like subscriptions or timers.

Example:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('Timer executed');
  }, 1000);

  // Cleanup
  return () => {
    clearTimeout(timer);
  };
}, []);
```

Common Use Cases

- Fetching Data: Perform data fetching when a component mounts or when certain variables change.

```jsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  };
  fetchData();
}, []);
```

- Subscribing/Listening to Events: Set up and clean up event listeners.

```jsx
useEffect(() => {
  const handleResize = () => {
    console.log('Window resized');
  };
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

Animation on State Change: Trigger animations when state changes.

Best Practices
Keep Effects Focused: Each useEffect should ideally handle a single side effect.
Avoid Complex Logic in Effects: If you have non-trivial logic, consider extracting it into a separate function.
Dependencies Management: Always make sure to include all variables and props in the dependencies array that your effect uses.
Avoid Async Function Directly: If you need to use async functions inside useEffect, define an async function inside the effect and call it.
