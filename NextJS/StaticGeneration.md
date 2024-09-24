# Static Generation in Next.js

## Table of Contents

[Introduction](#introduction)
[What is Static Generation?](#what-is-static-generation)
[Benefits of Static Generation](#benefits-of-static-generation)
[How Static Generation Works](#how-static-generation-works)
[Using `getStaticProps`](#using-getstaticprops)
    - [Fetching Data with Static Generation](#fetching-data-with-static-generation)
    - [Passing Props to Components](#passing-props-to-components)
[Dynamic Static Generation with `getStaticPaths`](#dynamic-static-generation-with-getstaticpaths)
    - [Creating Dynamic Routes](#creating-dynamic-routes)
[Incremental Static Regeneration (ISR)](#incremental-static-regeneration-isr)
[Best Practices for Static Generation](#best-practices-for-static-generation)

---

## Introduction

Static Generation is one of the core features of Next.js, allowing developers to pre-render pages at build time. This results in fast page loads and improved SEO, as the HTML content is ready to be served by the server.

## What is Static Generation?

Static Generation is the process of generating HTML pages at build time and serving them as pre-rendered pages. This approach is suitable for content that does not change frequently and can be cached.

## Benefits of Static Generation

- **Performance**: Pages are served as static files, resulting in faster load times.
- **SEO**: Pre-rendered HTML can be indexed by search engines, improving SEO.
- **Scalability**: Static files can be served from a CDN, reducing server load.

## How Static Generation Works

When you build your Next.js application, the framework pre-renders the specified pages and generates HTML files based on the data fetched at build time.

## Using `getStaticProps`

`getStaticProps` is the method used to fetch data for static generation. It runs at build time and provides data to your page component as props.

### Fetching Data with Static Generation

Here is a simple example that demonstrates how to use `getStaticProps`:

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

In this example, `getStaticProps` fetches data from an API and returns it as props to the `Home` component. The `Home` component then displays the data using the `data` prop.

### Passing Props to Components

You can also pass additional props to `getStaticProps` using the `fallback` option. This allows you to pre-render the page with a placeholder while the data is being fetched.

```javascript
// pages/index.js
export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/data/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1,
  };
}

export default function Post({ data }) {
  return (
    <div>
      <h1>Post: {params.id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

In this example, `getStaticProps` takes a `params` object as an argument, which contains the dynamic route parameter. The `Post` component then fetches data for the specific post using the `params.id` value.

The `revalidate` option tells Next.js to re-generate the page every second. This ensures that the data is always up-to-date.

## Dynamic Static Generation with `getStaticPaths`

`getStaticPaths` is used to generate dynamic routes for static generation. It allows you to pre-render pages with dynamic routes at build time.

### Creating Dynamic Routes

Here is an example of how to use `getStaticPaths`:

```javascript
// pages/posts/[id].js
export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: true,
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
      <h1>Post: {post.id}</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}
```

In this example, `getStaticPaths` fetches a list of posts from an API and returns an array of objects containing the `params` object for each post. The `params` object contains the dynamic route parameter `id`.

The `fallback` option is set to `true`, which tells Next.js to pre-render the page for each dynamic route. If the data for a post is not available, the page will be rendered with a fallback.

The `Post` component then fetches data for the specific post using the `params.id` value.

## Incremental Static Regeneration (ISR)

ISR is a feature of Next.js that allows you to pre-render pages incrementally. This means that Next.js will only re-render the pages that have changed, resulting in faster builds and better performance.

ISR is enabled by default, but you can disable it by setting the `revalidate` option to `false` in `getStaticProps`.

```javascript
// pages/index.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1,
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

In this example, `getStaticProps` fetches data from an API and returns it as props to the `Home` component. The `Home` component then displays the data using the `data` prop.

The `revalidate` option is set to `1`, which tells Next.js to re-generate the page every second. This ensures that the data is always up-to-date.

## Best Practices for Static Generation

- Use `getStaticProps` for data that does not change frequently.
- Use `getStaticPaths` for data that changes frequently.
- Use `fallback: true` in `getStaticPaths` to pre-render the page for each dynamic route.
- Use `revalidate` to re-generate the page every second.
- Use `getStaticProps` and `getStaticPaths` together for data that changes frequently and has dynamic routes.
- Use ISR to pre-render only the pages that have changed.

[EOF]
