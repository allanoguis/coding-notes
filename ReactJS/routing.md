# React JS Routing

Routing in React applications allows you to manage and handle multiple views with distinct URLs. React Router is the standard library for achieving this. This guide will explain how to use React Router to implement dynamic routing in your React applications.

## Table of Contents

- [Introduction to Routing in React](#introduction-to-routing-in-react)
- [Installing React Router](#installing-react-router)
- [Basic Routing](#basic-routing)
- [Nested Routes](#nested-routes)
- [Programmatic Navigation](#programmatic-navigation)
- [Protected Routes](#protected-routes)
- [Best Practices](#best-practices)

---

## Introduction to Routing in React

Routing is a process in which a user is directed to different parts of an application based on the request URL. React Router allows you to handle routes declaratively.

## Installing React Router

To use React Router, you need to install it first. It's available as `react-router-dom` for web applications.

```bash
npm install react-router-dom
```

## Basic Routing

To start using React Router, wrap your application in a `BrowserRouter` component, define `Route` components for various paths, and use `Link` components to navigate between them.

**Example:**

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
```

## Nested Routes

Nested routing allows you to define routes within other routes, which is useful for creating layouts with multiple inner views or components.

**Example:**

```jsx
import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';

const Topic = ({ match }) => <div>{match.params.topicId}</div>;

const Topics = ({ match }) => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${path}/:topicId`} component={Topic} />
    </div>
  );
};
```

## Programmatic Navigation

Sometimes you need to navigate programmatically outside the context of a component, such as after an action like a form submission.

**Example:**

```jsx
import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  let history = useHistory();

  const goToAbout = () => {
    history.push('/about');
  };

  return (
    <div>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};
```

## Protected Routes

Protected routes are routes that require authentication or other conditions before access is granted. You can create a protected route by conditionally rendering routes based on your authentication status.

**Example:**

```jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
```

## Best Practices

- **Code Splitting**: Use `React.lazy` for component-based code splitting to improve load times.
- **404 Handling**: Define a catch-all route to display a 404 page if no other route matches.
- **Link Accessibility**: Use appropriate elements for navigation to ensure accessibility.

[EOF]
```