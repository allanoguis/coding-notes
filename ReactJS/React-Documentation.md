ReactJS Overview

ReactJS is a popular JavaScript library for building user interfaces, particularly for single-page applications where a seamless user experience is crucial. It allows developers to create large web applications that can change data without reloading the page.

Table of Contents
Introduction
Key Features
Components
JSX
Props and State
Lifecycle Methods
Hooks
React Router
Conclusion
Introduction
React was developed by Facebook in 2011 and is maintained by Facebook and a community of individual developers and companies. It is designed for building complex user interfaces in a declarative way, making it easier to manage and update UI components.

Key Features
Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs.

Learn Once, Write Anywhere: You can develop new features in React without rewriting existing code, and you can use React on the server side as well as in mobile apps.

Components
A component in React is a reusable piece of UI. Components can be either class-based or functional.

Class Components

```jsx
class MyComponent extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

Functional Components

```jsx
const MyComponent = () => {
  return <h1>Hello, World!</h1>;
};
```

JSX

JSX is a syntax extension to JavaScript that allows you to write HTML-like code within JavaScript. It is used to describe the structure of the UI. JSX is compiled into JavaScript objects that React can understand.

```jsx
const element = <h1>Hello, World!</h1>;
```

Props and State

Props

Props (short for properties) are a way to pass data from parent to child components.

```jsx
const Greeting = (props) => {
  return <h1>{props.message}</h1>;
};

// Usage
<Greeting message="Hello, World!" />
```

State

State is a built-in object that is used to contain data or information about the component.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

Lifecycle Methods
React components have a lifecycle that you can monitor and manipulate during their three main phases: Mounting, Updating, and Unmounting.

Some of the commonly used lifecycle methods are:

- componentDidMount
- componentDidUpdate
- componentWillUnmount

Hooks

React Hooks are functions that let you use state and lifecycle features in functional components.

Example: useState Hook

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

React Router
React Router is a standard routing library for React that enables dynamic routing. It allows for the building of single-page applications with navigation.

Basic Example

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);
```

[EOF]
