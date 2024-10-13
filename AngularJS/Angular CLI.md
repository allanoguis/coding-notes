# Angular CLI

The Angular CLI (Command Line Interface) is a powerful tool designed to help developers initialize, develop, scaffold, and maintain Angular applications. It provides a set of commands that automate common development tasks and setups, making the development process faster and more reliable.

## Table of Contents

- [Installation and Setup](#installation-and-setup)
- [Generating Components](#generating-components)
- [Building and Serving](#building-and-serving)

---

## Installation and Setup

Angular CLI can be installed easily using npm, which is part of the Node.js distribution. Before installing the Angular CLI, make sure you have the latest version of Node.js and npm installed.

### Step 1: Install Node.js and npm

Download and install Node.js from [nodejs.org](https://nodejs.org/). This installation will also install npm, which is the package manager for Node.js.

### Step 2: Install Angular CLI

To install Angular CLI globally on your machine, open a terminal and run the following command:

```bash
npm install -g @angular/cli
```

This command will install the Angular CLI globally, allowing you to access it from anywhere on your system via the command line.

### Step 3: Verify Installation

After installation, you can verify that Angular CLI is installed correctly by checking its version:

```bash
ng --version
```

This command will display the version of Angular CLI installed on your machine, along with other environment details.

## Generating Components

Angular CLI simplifies the creation of various Angular entities such as components, services, directives, etc. Here’s how to generate a new component using Angular CLI.

### Generate a New Component

To generate a new component, navigate to your Angular application directory in the terminal and run the following command:

```bash
ng generate component my-new-component
```

Alternatively, you can use the shorthand command:

```bash
ng g c my-new-component
```

This command creates a new directory with the component files in your application’s `src/app` folder and registers the new component with the nearest module.

## Building and Serving

Angular CLI provides commands to build your application and serve it locally for testing.

### Build Your Application

To build your Angular application, use the following command:

```bash
ng build
```

This command compiles the application into an output directory named `dist/` at the given output path. By default, the build is configured for a development environment. You can also build the app for production by adding the `--prod` flag:

```bash
ng build --prod
```

### Serve Your Application Locally

To serve your Angular application locally and open it in a browser, use:

```bash
ng serve
```

By default, this command starts a web server on `http://localhost:4200/`. Your app will automatically reload if you change any of the source files.

---

Using Angular CLI effectively can significantly enhance your productivity by automating repetitive tasks, allowing you to focus more on building your application. For more detailed information on Angular CLI commands and features, refer to the official Angular CLI documentation at [Angular CLI Overview and Command Reference](https://angular.io/cli).

[EOF]
```
