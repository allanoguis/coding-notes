# Pipes in Angular

Angular pipes are a way to write display-value transformations that you can declare in your HTML. The pipe operator (`|`) allows you to put data through a pipe, transforming the output into a user-friendly format. This document explores how to use built-in pipes in Angular and how to create custom pipes for specialized use cases.

## Table of Contents

- [Using Built-in Pipes](#using-built-in-pipes)
- [Creating Custom Pipes](#creating-custom-pipes)

---

## Using Built-in Pipes

Angular comes with a range of built-in pipes that you can use directly in your templates. These include pipes for formatting dates, numbers, percentages, and currencies, among others.

### Common Built-in Pipes

- **DatePipe**: Formats a date value according to locale rules.
- **UpperCasePipe**: Transforms text to uppercase.
- **LowerCasePipe**: Transforms text to lowercase.
- **CurrencyPipe**: Transforms a number to a currency string, formatted according to locale rules.

### Example Usage of Built-in Pipes

```html
<p>The current date is {{ today | date:'fullDate' }}</p>
<p>{{ 'hello world' | uppercase }}</p>
<p>Your balance: {{ balance | currency:'USD':'symbol':'1.2-2' }}</p>
```

In these examples, the `date` pipe formats a JavaScript Date object, `uppercase` transforms a string to all uppercase letters, and `currency` converts a numeric value to a formatted currency string.

## Creating Custom Pipes

When built-in pipes do not meet your requirements, you can create custom pipes. Custom pipes are particularly useful for complex transformations or when you need to implement custom logic to transform data.

### Creating a Custom Pipe

1. **Generate a Pipe via Angular CLI**

   Use the Angular CLI to generate a new pipe:

   ```bash
   ng generate pipe my-custom-pipe
   ```

2. **Implement the Pipe Transform Method**

   Modify the generated pipe class to include your custom transformation logic:

   ```typescript
   import { Pipe, PipeTransform } from '@angular/core';

   @Pipe({
     name: 'myCustomPipe'
   })
   export class MyCustomPipe implements PipeTransform {
     transform(value: any, ...args: any[]): any {
       // Implement your custom transformation logic here
       return 'Transformed Value';
     }
   }
   ```

### Example Usage of a Custom Pipe

Assuming you created a pipe that transforms email addresses to only show the domain part:

```typescript
transform(value: string): string {
  return value.substring(value.indexOf('@') + 1);
}
```

Use this pipe in your template like so:

```html
<p>Your email domain is {{ email | myCustomPipe }}</p>
```

---

Angular pipes provide a powerful mechanism for transforming displayed values within templates. By mastering both built-in and custom pipes, you can significantly enhance the usability and readability of data in your Angular applications.
```
