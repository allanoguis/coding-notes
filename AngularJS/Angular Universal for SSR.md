# Angular Universal for Server-Side Rendering (SSR)

Angular Universal extends Angular applications to run on the server, generating static application pages that later become dynamic once the client-side application takes over. This document explains the benefits and setup process of Angular Universal for server-side rendering.

## Table of Contents

- [Introduction to Server-Side Rendering](#introduction-to-server-side-rendering)
- [Setting Up Angular Universal](#setting-up-angular-universal)

---

## Introduction to Server-Side Rendering

Server-side rendering (SSR) refers to the process of rendering web pages on the server instead of rendering them in the browser. SSR sends a fully rendered page to the client, improving the performance and search engine optimization (SEO) by helping web crawlers index the content efficiently.

### Benefits of SSR

- **Performance**: Reduces the time to first render of your pages, providing a faster user experience.
- **SEO**: Improves SEO by optimizing the content for search engine crawlers, which may not fully process JavaScript.
- **Social Sharing**: Enhances the metadata for social sharing, as the metadata is rendered on the server.

## Setting Up Angular Universal

Setting up Angular Universal involves adding server-side rendering capabilities to your existing Angular application.

### Step 1: Install Angular Universal

Start by adding Angular Universal to your project. You can easily do this with Angular CLI:

```bash
ng add @nguniversal/express-engine
```

This command modifies your application by adding the necessary dependencies and configuration files to support server-side rendering.

### Step 2: Server-Side Rendering Configuration

The `ng add` command creates several new files:
- **`server.ts`**: The Node.js Express server.
- **`src/main.server.ts`**: The entry point for the server-side application.
- **`tsconfig.server.json`**: TypeScript configuration for the server-side application.

### Step 3: Build and Serve SSR

To build your application for server-side rendering, use the following Angular CLI commands:

```bash
npm run build:ssr
npm run serve:ssr
```

These commands build both the client and the server portions of your application and then start up a Node.js Express server to serve your Universal application.

### Step 4: Pre-rendering Static Routes

If your application has static routes, you can pre-render them:

```bash
npm run prerender
```

This generates static application pages for your routes at build time, enhancing the performance and reliability of serving these pages.

---

Integrating Angular Universal into your Angular application allows you to leverage the best of both server and client-side rendering, ensuring fast rendering times and improved SEO. The setup is straightforward with the Angular CLI, making it an essential consideration for production applications.
```