# Next.js API Routes

## Table of Contents

[Introduction](#introduction)
[Creating an API Route](#creating-an-api-route)
    - [File Structure](#file-structure)
    - [Example of an API Route](#example-of-an-api-route)
[API Route Handlers](#api-route-handlers)
    - [GET Requests](#get-requests)
    - [POST Requests](#post-requests)
    - [PUT Requests](#put-requests)
    - [DELETE Requests](#delete-requests)
[Dynamic API Routes](#dynamic-api-routes)
[Middleware in API Routes](#middleware-in-api-routes)
[Setting Up HTTP Response Codes](#setting-up-http-response-codes)
[Accessing Query Parameters](#accessing-query-parameters)
[Using Middleware](#using-middleware)
[CORS Support](#cors-support)
[Best Practices](#best-practices)

---

## Introduction

Next.js provides built-in API routes, allowing developers to create API endpoints as part of their application. This flexibility simplifies the process of building full-stack applications with a single framework.

## Creating an API Route

### File Structure

API routes are located in the `pages/api` directory of a Next.js project. Each file corresponds to an API endpoint.

`/pages /api /hello.js`

### Example of an API Route

Here’s a simple API route example:

```javascript
`// pages/api/hello.js`
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, World!' });
}
```

## API Route Handlers

### GET Requests

To handle GET requests, check the method in your handler:

```javascript
export default function handler(req, res) {
  if (req.method === 'GET') {
    `// Handle GET request`
    res.status(200).json({ message: 'This is a GET request' });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

### POST Requests

To handle POST requests, you can do the following:

```javascript
export default function handler(req, res) {
  if (req.method === 'POST') {
    `// Handle POST request`
    const data = req.body;
    res.status(201).json({ data });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

### PUT Requests

Example of handling a PUT request:

```javascript
export default function handler(req, res) {
  if (req.method === 'PUT') {
    `// Handle PUT request`
    res.status(200).json({ message: 'Updated successfully' });
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

### DELETE Requests

Example of handling a DELETE request:

```javascript
export default function handler(req, res) {
  if (req.method === 'DELETE') {
    `// Handle DELETE request`
    res.status(200).json({ message: 'Deleted successfully' });
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

## Dynamic API Routes

Dynamic API routes can be created by using brackets in file names. For instance, /pages/api/posts/[id].js corresponds to an endpoint /api/posts/:id.

```javascript
`// pages/api/posts/[id].js`
export default function handler(req, res) {
  const {
    query: { id },
  } = req;
  res.status(200).json({ message: `Post ID: ${id}` });
}
```

## Middleware in API Routes

You can create middleware functions to run before your API route handler. For example:

```javascript
const middleware = (req, res, next) => {
  console.log('Middleware executed');
  next();
}

`// Using middleware`
export default function handler(req, res) {
  middleware(req, res, () => {
    res.status(200).json({ message: 'Hello with Middleware' });
  });
}
```

## Setting Up HTTP Response Codes

To set HTTP response codes, use the res.status() method before sending a response.

```javascript
res.status(404).json({ message: 'Not Found' });
```

## Accessing Query Parameters

You can access query parameters via req.query.

```javascript
export default function handler(req, res) {
  const { name } = req.query;
  res.status(200).json({ message: `Hello, ${name}` });
}
```

## Using Middleware

You can also use libraries like cors or custom middleware in your API routes. To use cors, first install it:

`npm install cors`

Then, in your route:

```javascript
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
});

`// Add middleware to the API route`
export default function handler(req, res) {
  cors(req, res, () => {
    res.status(200).json({ message: 'CORS enabled' });
  });
}
```

## CORS Support

If you want to enable CORS, you can use the cors package or manage headers manually:

`res.setHeader('Access-Control-Allow-Origin', '*');`

## Best Practices

> [!TIP]
>
> File Naming: Use descriptive names for your API route files.
> HTTP Methods: Clearly define which HTTP methods your API routes support.
> Response Codes: Use appropriate HTTP response status codes.
> Validation: Always validate incoming data to prevent errors and potential security issues.

[EOF]
