# React Nodes

## Table of Contents

[React Nodes Overview](#react-nodes-overview)
[Types of React Nodes](#types-of-react-nodes)
    - [Primitive Nodes](#primitive-nodes)
    - [Element Nodes](#element-nodes)
    - [Component Nodes](#component-nodes)
    - [Fragments](#fragments)

[Rendering Nodes](#rendering-nodes)
    - [React Elements](#react-elements)

[Composition of Nodes](#composition-of-nodes)
[Important Concepts Related to React Nodes](#important-concepts-related-to-react-nodes)
    - [Keys](#keys)
    - [Children](#children)
    - [Conditional Rendering](#conditional-rendering)
    - [Portals](#portals)

---

## React Nodes Overview

In React, a **node** is a fundamental concept used to represent elements in a user interface. Nodes can be thought of as the building blocks of a React application. They can be simple elements, like a button or div, or complex components made up of multiple elements.

## Types of React Nodes

### Primitive Nodes

- **Strings**: A string representing a text node in the DOM.
- **Numbers**: Rendered as a text node in the browser.

### Element Nodes

- Created using React's `createElement` method or JSX syntax.
- They can represent HTML elements, such as `<div>`, `<span>`, etc.
  
Example:

```jsx
  const element = <div>Hello, World!</div>;
```

### Component Nodes

These are instances of React components, which can be either class components or functional components.
A component can receive props and can maintain its own state.

### Fragments

A group of elements without adding an extra node to the DOM.

Useful for returning multiple elements from a component.

Example:

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

## Rendering Nodes

React utilizes a virtual DOM to enhance performance. When you render a React node:

React creates a virtual representation of the node.
It compares the virtual DOM with the previous version to identify changes.
React updates only those parts of the real DOM that need to change, leading to efficient UI updates.

### React Elements

React Element: A plain object describing a component instance or DOM node. React elements are immutable, and you cannot change their children or attributes after they are created.

Example of a React element:

```jsx
const element = React.createElement('div', { className: 'greeting' }, 'Hello, World!');
```

## Composition of Nodes

React allows for composing nodes to construct complex UIs:

- Components can be nested inside one another, creating a hierarchy of nodes.
- Props are used to pass data from parent components to child components.

## Important Concepts Related to React Nodes

### Keys

Keys: When rendering lists of nodes, using keys helps React identify which items have changed, are added, or are removed.

```jsx
const items = list.map(item => <li key={item.id}>{item.name}</li>);
```

### Children

Children: The children prop allows you to pass components or elements as a child to other components, facilitating dynamic content rendering.

### Conditional Rendering

Conditional Rendering: Nodes can be rendered conditionally based on state or props.

```jsx
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
```

### Portals

Portals: React allows rendering nodes outside of the parent component's DOM hierarchy through portals. This can be useful for modals, tooltips, etc.

```jsx
ReactDOM.createPortal(child, container);
```

[EOF]
