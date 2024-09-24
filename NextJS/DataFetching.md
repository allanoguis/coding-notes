# Data Fetching in Next.js

## Table of Contents

[Introduction](#introduction)
[Static Generation (SSG)](#static-generation-ssg)
    - [getStaticProps](#getstaticprops)
    - [Dynamic SSG with `getStaticPaths`](#dynamic-ssg-with-getstaticpaths)
[Server-Side Rendering (SSR)](#server-side-rendering-ssr)
    - [getServerSideProps](#getserversideprops)
[Client-Side Fetching](#client-side-fetching)
    - [Using `useEffect` and `fetch`](#using-useeffect-and-fetch)
    - [Using libraries like Axios](#using-libraries-like-axios)
[Combining Data Fetching Strategies](#combining-data-fetching-strategies)
[Incremental Static Regeneration (ISR)](#incremental-static-regeneration-isr)
[Best Practices](#best-practices)

---

## Introduction

Data fetching is a crucial part of building applications with Next.js. Next.js provides various methods for data fetching that help improve performance and user experience by optimizing how data is retrieved and rendered.

## Static Generation (SSG)

Static Generation allows you to generate HTML at build time. This approach leads to faster page loads and better SEO.

### getStaticProps

`getStaticProps` is a function used to fetch data during the build time. It runs only during the build, not on every request.

```javascript
// pages/index.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Static Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

In the above example, `getStaticProps` fetches data from an API and returns it as props to the `Home` component. The `Home` component then displays the data using the `data` prop.

### Dynamic SSG with `getStaticPaths`

`getStaticPaths` is used to generate dynamic pages during the build time. It allows you to pre-render pages with dynamic routes.

```javascript
// pages/posts/[id].js
export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
```

In the above example, `getStaticPaths` fetches all the posts from the API and returns them as paths with the `params` object. The `params` object is used to fetch the data for each post during the `getStaticProps` function.

The `fallback` option is set to `false` to disable the fallback behavior. If a page is not found, the user will get a 404 page instead of a fallback page.

## Server-Side Rendering (SSR)

Server-Side Rendering allows you to generate HTML on the server-side and send it to the client. This approach is slower than Static Generation but provides better performance and SEO.

### getServerSideProps

`getServerSideProps` is a function used to fetch data on the server-side. It runs on every request.

```javascript
// pages/index.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Server-Side Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

In the above example, `getServerSideProps` fetches data from an API and returns it as props to the `Home` component. The `Home` component then displays the data using the `data` prop.

## Client-Side Fetching

Client-Side Fetching allows you to fetch data on the client-side using JavaScript. This approach is useful for fetching data that is not available during the build time.

### Using `useEffect` and `fetch`

```javascript
// pages/index.js
import { useEffect, useState } from'react';


export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.example.com/data');
      const data = await res.json();
      setData(data);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Client-Side Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

In the above example, `useEffect` is used to fetch data from an API and set it to the `data` state. The `if` statement checks if the `data` state is `null` and returns a loading message if it is.

### Using libraries like Axios

```javascript
// pages/index.js
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')
     .then(res => setData(res.data))
     .catch(err => console.error(err));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Client-Side Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}   // Home
```

In the above example, `axios` is used to fetch data from an API and set it to the `data` state. The `if` statement checks if the `data` state is `null` and returns a loading message if it is.

## Combining Data Fetching Strategies

You can use both Static Generation and Server-Side Rendering in the same application.

```javascript
// pages/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';


export async function getStaticProps() {
  const res = await fetch('https://api.example.com/static-data');
  const staticData = await res.json();

  return {
    props: {
      staticData,
    },
  };
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/server-data');
  const serverData = await res.json();

  return {
    props: {
      serverData,
    },
  };
}

export default function Home({ staticData, serverData }) {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://api.example.com/client-data');
      setClientData(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Static Data</h1>
      <pre>{JSON.stringify(staticData, null, 2)}</pre>
      <h1>Server-Side Data</h1>
      <pre>{JSON.stringify(serverData, null, 2)}</pre>
      <h1>Client-Side Data</h1>
      <pre>{JSON.stringify(clientData, null, 2)}</pre>
    </div>
  );
}
```

In the above example, `getStaticProps` fetches static data from an API and returns it as props to the `Home` component. `getServerSideProps` fetches server-side data from an API and returns it as props to the `Home` component. The `Home` component then displays all the data using the `staticData`, `serverData`, and `clientData` props.

## Incremental Static Regeneration (ISR)

ISR allows you to generate HTML on the server-side and send it to the client. It only regenerates the HTML for the changed pages, which improves the performance of the application.

To enable ISR, you need to set the `revalidate` option in the `getStaticProps` or `getServerSideProps` function.

```javascript
// pages/index.js
import { useEffect, useState } from'react';
import axios from 'axios';


export async function getStaticProps() {
  const res = await fetch('https://api.example.com/static-data');
  const staticData = await res.json();

  return {
    props: {
      staticData,
    },
    revalidate: 10, // regenerate the page every 10 seconds
  };
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/server-data');
  const serverData = await res.json();

  return {
    props: {
      serverData,
    },
    revalidate: 10, // regenerate the page every 10 seconds
  };
}


export default function Home({ staticData, serverData }) {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://api.example.com/client-data');
      setClientData(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Static Data</h1>
      <pre>{JSON.stringify(staticData, null, 2)}</pre>
      <h1>Server-Side Data</h1>
      <pre>{JSON.stringify(serverData, null, 2)}</pre>
      <h1>Client-Side Data</h1>
      <pre>{JSON.stringify(clientData, null, 2)}</pre>
    </div>
  );
}   // Home page
```

In the above example, `revalidate` is set to 10 seconds to regenerate the page every 10 seconds.

## Best Practices

- Use `getStaticProps` for data that is available during the build time.
- Use `getServerSideProps` for data that is available on the server-side.
- Use `useEffect` and `fetch` for client-side data that is not available during the build time.
- Use `axios` for client-side data that is not available during the build time.
- Use `getStaticPaths` for dynamic pages that require pre-rendering.
- Use `revalidate` for ISR.
- Use `fallback` for dynamic pages to disable the fallback behavior.

[EOF]
