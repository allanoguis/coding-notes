# Components and Templates in Angular

Angular components are the fundamental building blocks of Angular applications. Each component consists of an HTML template that declares how that component renders, accompanied by a TypeScript class that defines behavior, and a CSS selector that defines how the component is used in a template. This document explores the core aspects of Angular components and templates.

## Table of Contents

- [Component Basics](#component-basics)
- [Template Syntax](#template-syntax)
- [Lifecycle Hooks](#lifecycle-hooks)

---

## Component Basics

A component in Angular controls a patch of screen called a view. For example, individual components define and control each of the following views from the sample application:

- The app root with navigation links.
- The list of heroes.
- The hero editor.

### Creating a Component

To create a new component, use the Angular CLI:

```bash
ng generate component my-component
```

This command generates the necessary files for a new component, registers it in a module, and adds the template and CSS files.

### Component Structure

An Angular component consists of the following:

- **Class**: The code that handles data and functionality. It is defined in a TypeScript file.
- **Template**: The HTML view that users interact with in the browser. It is defined in an HTML file.
- **Metadata**: Additional information for Angular defined with decorators.
- **Styles**: The private CSS styles for the component's view.

### Example of a Simple Component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  title = 'Hello, Angular!';
}
```

## Template Syntax

Templates in Angular are written with HTML that contains Angular-specific elements and attributes. With template syntax, you can bind controller data into the HTML.

### Data Binding

The most common template syntax revolves around data binding:

- **Interpolation**: `{{ value }}`: Binds value from the component to the HTML.
- **Property Binding**: `[property]="value"`: Binds a property to a DOM property.
- **Event Binding**: `(event)="handler()"`: Listens for a specific event and calls a method.

### Structural Directives

Angular has powerful directives that can modify HTML layout dynamically:

- `*ngIf`: Conditionally includes a template block if a condition is true.
- `*ngFor`: Repeats a node for each item in a list.

### Example Using Template Syntax

```html
<div *ngIf="isVisible">Visible content</div>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

## Lifecycle Hooks

Lifecycle hooks are a core feature in Angular that allows you to tap into the lifecycle of directives and components as they are created, updated, and destroyed.

### Common Lifecycle Hooks

- **ngOnInit**: Initialize the directive/component after Angular first displays the data-bound properties.
- **ngOnDestroy**: Cleanup just before Angular destroys the directive/component.

### Example Using Lifecycle Hooks

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Component initialized');
  }

  ngOnDestroy() {
    console.log('Component about to be destroyed');
  }
}
```

---

Understanding components and templates is crucial for developing interactive applications using Angular. These concepts allow you to create dynamic and responsive user experiences with modular and reusable code structures.
```
