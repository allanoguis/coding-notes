# Routing and Navigation in Angular

Angular's Router enables navigation from one view to the next as users perform application tasks. This powerful functionality supports complex routing, nested views, and fine-grained control over application navigation. This document explores the configuration and usage of the Angular Router.

## Table of Contents

- [Configuring Routes](#configuring-routes)
- [Router Outlet](#router-outlet)
- [Router Links](#router-links)
- [Route Guards](#route-guards)

---

## Configuring Routes

Configuring routes in an Angular application involves setting up a `Routes` array in your module where you define your application's navigation paths.

### Example of Configuring Routes

Here's how you can define routes in an Angular application:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

This configuration sets up routes for the home and about pages and includes a redirect from the root URL to `/home`.

## Router Outlet

The `RouterOutlet` is a directive from the Angular Router library that is used as a placeholder that Angular dynamically fills based on the current router state.

### Using Router Outlet

To use the `RouterOutlet`, include it in your application's template as shown below:

```html
<router-outlet></router-outlet>
```

When the application's route changes, the Angular Router displays the component for the active route in place of the `router-outlet`.

## Router Links

`RouterLink` is a directive that you use to link to routes in your application.

### Example of Using Router Links

```html
<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
</nav>
```

The `routerLinkActive` directive allows you to apply a CSS class to the element when the link's route becomes active, making it easy to style active links.

## Route Guards

Route guards are interfaces that can tell the router whether or not to allow navigation to a requested route. They are used to control access to parts of your application.

### Types of Route Guards

- **CanActivate**: Determines if a route can be activated.
- **CanActivateChild**: Determines if children of a route can be activated.
- **CanDeactivate**: Determines if you can navigate away from the current route.

### Example of Using a Route Guard

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return checkIfUserIsLoggedIn();
  }
}
```

In this example, the `AuthGuard` checks if the user is logged in before activating a route.

---

Routing and navigation are integral to developing single-page applications with Angular. The Angular Router supports sophisticated navigation paths, lazy loading, and nested routes, allowing you to build highly interactive and user-friendly web applications.
```
