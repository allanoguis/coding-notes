# Getting Started with Angular

Welcome to Angular! This guide will help you set up your development environment and build your first Angular web application. Angular provides a robust platform that allows you to develop scalable web applications efficiently.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installing Angular CLI](#installing-angular-cli)
- [Creating Your First Angular Application](#creating-your-first-angular-application)
- [Understanding Your Angular Application](#understanding-your-angular-application)
- [Running Your Application](#running-your-application)
- [Next Steps](#next-steps)

---

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js**: Angular requires a current, active LTS, or maintenance LTS version of Node.js. Download it from [nodejs.org](https://nodejs.org/).
- **npm Package Manager**: Angular, Angular CLI, and Angular applications depend on npm packages. npm is installed with Node.js.

## Installing Angular CLI

Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications. To install Angular CLI, open a terminal window and run the following command:

```bash
npm install -g @angular/cli
```

This command installs Angular CLI globally on your system, allowing you to access it from anywhere in your terminal.

## Creating Your First Angular Application

To create a new Angular application, use the following Angular CLI command:

```bash
ng new my-first-app
```

This command will prompt you for information about features to include in the initial app project. You can accept the defaults or specify additional features like routing or stylesheets formats.

## Understanding Your Angular Application

Your new application will have the following structure:

- **src/**: This folder contains the source files for your application. It includes the application's logic and data.
- **src/app/**: Contains the components of your application. A new app has a root module, `app.module.ts`, and a root component, `app.component.ts`.
- **src/environments/**: Includes configuration files for different environments like development and production.
- **angular.json**: Configuration for Angular CLI.
- **package.json**: Lists dependencies and project metadata.

## Running Your Application

Navigate into your project directory and launch the application by running the following commands:

```bash
cd my-first-app
ng serve
```

The `ng serve` command builds the application, starts the development server, watches the source files, and rebuilds the app as you make changes to those files.

The default server runs on `http://localhost:4200/`. Open your browser to `http://localhost:4200/` to see your new app.

## Next Steps

- **Explore Angular's Component Architecture**: Learn about components, templates, and data binding.
- **Add Navigation with Routing**: Implement routing to navigate between multiple components.
- **Fetch Data Using HTTP**: Learn how to fetch data from a remote server.
- **Deployment**: Follow the steps to build and deploy your Angular application.

Congratulations! You've set up your first Angular application. Continue building and learning about Angular's powerful features to develop interactive and dynamic web applications.

[EOF]
```
