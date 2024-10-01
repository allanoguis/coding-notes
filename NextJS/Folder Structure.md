# Folder Structure in Next.js

## Table of Contents

[Introduction](#introduction)
[Main Folders and Their Purposes](#main-folders-and-their-purposes)
    - [Pages](#pages)
    - [Public](#public)
    - [Components](#components)
    - [Styles](#styles)
    - [API](#api)
    - [Libraries](#lib-optional)
    - [Hooks](#hooks-optional)
    - [`.next/` (hidden directory)](#next-hidden-directory)
    - [`node_modules/` (hidden directory)](#node_modules-hidden-directory)
    - [`package.json` (file)](#packagejson-file)
    - [`next.config.js` (file)](#nextconfigjs-file)
    - [`.gitignore` (file)](#gitignore-file)
    - [`README.md` (file)](#readmemd-file)

## Introduction

Next.js has a specific folder structure that helps developers organize their applications efficiently. Understanding this structure is crucial for building scalable and maintainable applications. Below is an overview of the main folders and their purposes in a typical Next.js project.

## Main Folders and Their Purposes

### `pages/`

The `pages` directory is at the core of a Next.js application. Each file inside this directory automatically becomes a route.

- **File-based Routing**: Each `.js`, `.jsx`, `.ts`, or `.tsx` file represents a unique route based on its file name.

#### Example of file-based routing

pages/
├── index.js // Represents the homepage ("/")
├── about.js // Represents the "/about" page
├── blog/ 
│   ├── index.js // Represents the "/blog" page
│   └── [slug].js // Dynamic route for individual blog posts ("/blog/:slug")

### `public/`

This folder is used to serve static assets such as images, fonts, and other files. Files in this directory are accessible through the root URL.

#### Example of public folder

public/
├── images/
│   └── logo.png // Accessible at "/images/logo.png"
└── favicon.ico // Accessible at "/favicon.ico"

### `components/`

A common convention is to create a `components` folder to store reusable UI components. These components can be used across different pages and can help improve code organization.

#### Example of components folder

components/
├── Header.js
├── Footer.js
├── Button.js // A reusable button component
├── Card.js // A reusable card component
└── Modal.js // A reusable modal component

### `styles/`

The `styles` directory is typically where CSS and styling files are stored. This can include global styles, modular CSS, or CSS-in-JS solutions.

#### Example of styles folder

styles/
├── globals.css // Global styles applied across the application
└── Home.module.css // CSS module for specific components

### `api/`

Inside the `pages/api` directory, you can create serverless API routes. Each file in this directory exports a function that handles requests, allowing you to create a back-end API alongside your front-end.

#### Example of api folder

pages/
└── api/
    └── users.js // API route accessible at "/api/users"

### `lib/` (optional)

Some projects include a `lib` folder for utility functions, API clients, or any shared logic that doesn’t fit into components or pages.

#### Example of libraries folder

lib/
├── api.js // API client for making requests to a back-end API
├── logger.js // Utility function for logging events
└── utils.js // Utility functions for common tasks

### `hooks/` (optional)

A `hooks` directory is a convention for organizing custom React hooks that can be reused across components.

#### Example of hooks folder

hooks/
├── useAuth.js // Custom hook for handling user authentication
├── useTheme.js // Custom hook for handling theme changes
└── useWindowSize.js // Custom hook for handling window size changes

### `.next/` (hidden directory)

The `.next` directory is a hidden directory that Next.js uses to store build artifacts. This includes the compiled JavaScript and CSS files, as well as the server-side rendered HTML.

### `node_modules/` (hidden directory)

The `node_modules` directory is a hidden directory that contains all the dependencies for your project. This directory is managed by npm or yarn, and shouldn’t be modified directly.

### `package.json` (file)

The `package.json` file is a manifest file that contains information about your project, such as its name, version, and dependencies. This file is used by npm or yarn to manage your project’s dependencies.

### `next.config.js` (file)

The `next.config.js` file is a configuration file for customizing the behavior of your Next.js application. This file can be used to add custom webpack configurations, define environment variables, or modify the server-side rendering behavior.

### `.gitignore` (file)

The `.gitignore` file is a file that tells git which files or directories to ignore when committing changes to your project. This can be useful for ignoring build artifacts, environment variables, or other temporary files.

### `README.md` (file)

The `README.md` file is a file that contains information about your project, such as a description, installation instructions, and usage examples. This file is typically displayed on the GitHub repository page.

[EOF]
