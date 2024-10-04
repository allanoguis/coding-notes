# Design Patterns in JavaScript

Design patterns are standard solutions to common problems in software design. In JavaScript, they help developers write clean, maintainable, and scalable code. This note provides an overview of some of the most commonly used design patterns in JavaScript.

## Table of Contents

1. [Introduction](#introduction)
2. [Creational Patterns](#creational-patterns)
        - [Singleton](#singleton)
        - [Factory Method](#factory-method)
3. [Constructor Pattern](#constructor-pattern)
4. [Structural Patterns](#structural-patterns)
        - [Module](#module)
        - [Facade](#facade)
        - [Decorator](#decorator)
5. [Behavioral Patterns](#behavioral-patterns)
        - [Observer](#observer)
        - [Strategy](#strategy)
        - [Command](#command)

---

## Introduction

Design patterns provide a proven way to solve issues that arise during the software development process. They can significantly improve code readability and reduce duplication, making it easier to manage and extend applications.

## Creational Patterns

Creational patterns focus on how objects are created and help in controlling this process.

### Singleton

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

```js
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
```

#### Practical Usage: Logging Service Example

In many applications, you need to log information, errors, or events. Using a Singleton for the logging service ensures that there is only one instance of the logger throughout the application, which helps maintain consistent logging behavior and allows for easier management of the logging process.

```js
class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        Logger.instance = this;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    }
}

// Usage
const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("This is a log message."); // Valid log
logger2.log("This is another log message."); // Valid log

console.log(logger1 === logger2); // true, both refer to the same instance
```

#### Benefits of Using Singleton for Logger

- Single Instance: Only one logger instance is created, preventing multiple instances that could lead to inconsistent logging methods.

- Global Access: The logger can be accessed globally from anywhere in the application, simplifying the process of logging messages.

- Resource Management: It manages resources effectively since only one instance exists, reducing memory usage and possible performance issues.

- Centralized Configuration: Any configuration for the logger (like log level, output format, etc.) can be changed in one place without having to change it in multiple instances.

### Factory Method

The Factory Method pattern defines an interface for creating an object but allows subclasses to alter the type of objects that will be created.

```js
class Car {
    constructor(model) {
        this.model = model;
    }
}

class CarFactory {
    createCar(model) {
        return new Car(model);
    }
}

const factory = new CarFactory();
const car = factory.createCar('Tesla Model S');
```

### Constructor Pattern

The Constructor pattern involves creating objects with a constructor function.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
```

#### Practical Usage: UI Component Creation Example

Imagine you are developing a cross-platform application that needs to generate UI components based on different devices (e.g., mobile, desktop). Using the Factory Method pattern, you can create a UI component without specifying the exact class of object that will be instantiated, allowing for more flexibility and scalability.

```js
// Base Button interface
class Button {
    render() {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Button classes
class MobileButton extends Button {
    render() {
        console.log("Rendering a button for mobile.");
    }
}

class DesktopButton extends Button {
    render() {
        console.log("Rendering a button for desktop.");
    }
}

// Button Factory
class ButtonFactory {
    static createButton(deviceType) {
        switch (deviceType) {
            case "mobile":
                return new MobileButton();
            case "desktop":
                return new DesktopButton();
            default:
                throw new Error("Unknown device type.");
        }
    }
}

// Usage
const mobileButton = ButtonFactory.createButton("mobile");
mobileButton.render(); // Rendering a button for mobile.

const desktopButton = ButtonFactory.createButton("desktop");
desktopButton.render(); // Rendering a button for desktop.
```

#### Benefits of Using the Factory Method for UI Components

- Decoupling: The code that uses the buttons is decoupled from the concrete classes. You can change the implementation of the button without altering the client code.

- Scalability: If a new device type needs to be supported, you can simply add another button class and modify the factory method without changing the existing codebase.

- Single Responsibility: The factory method encapsulates the object creation logic, adhering to the Single Responsibility Principle. Each class has one reason to change.

- Code Maintenance: It becomes easier to maintain and read the code since the logic for creating UI components is centralized in the factory.

## Structural Patterns

Structural patterns deal with how objects are composed to form larger structures.

### Module

The Module pattern encapsulates private variables and functions, exposing only the parts that are necessary.

```js
const Module = (function() {
    let privateVariable = 'I am private';

    return {
        publicMethod: function() {
            console.log(privateVariable);
        }
    };
})();

Module.publicMethod(); // I am private
```

#### Practical Usage: Configuration Management Example

In many applications, especially larger ones, you often need to manage configuration settings that control the behavior of the application. Using the Module pattern allows you to encapsulate these settings, exposing only the interface for getting and updating configurations without exposing the internal state directly.

```js
const ConfigManager = (function() {
    let config = {
        apiUrl: "https://api.example.com",
        timeout: 5000,
        retries: 3,
    };

    return {
        getConfig: function(key) {
            return config[key];
        },
        setConfig: function(key, value) {
            config[key] = value;
        }
    };
})();

// Usage
console.log(ConfigManager.getConfig('apiUrl')); // Output: https://api.example.com

ConfigManager.setConfig('timeout', 10000);
console.log(ConfigManager.getConfig('timeout')); // Output: 10000
```

#### Benefits of Using the Module Pattern for Configuration Management

- Encapsulation: The configuration is hidden from the rest of the code, making it easier to manage and modify. The configuration object is encapsulated within the module, preventing direct access to the config variable from outside. This promotes better data integrity.

- Simplicity: The module provides a simple interface for interacting with configuration settings, making it easy for other parts of the application to get and set configuration values.

- Single Responsibility: The module is responsible solely for managing configuration settings, adhering to the Single Responsibility Principle.

- Preventing Global Namespace Pollution: By using the Module pattern, you avoid polluting the global namespace with configuration-related variables and functions. This helps mitigate potential name collisions.

- Easy to Manage: If you want to change the underlying implementation of configuration management (such as loading from a file or remote server), you can do so without affecting the rest of the application that relies on the module.

### Facade

The Facade pattern provides a simplified interface to a complex system of classes.

```js
class Engine {
    start() {
        console.log('Engine starting');
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
    }

    start() {
        this.engine.start();
        console.log('Car is ready to go');
    }
}

const car = new Car();
car.start(); // Engine starting, Car is ready to go
```

#### Practical Usage: Payment Processing Example

In e-commerce applications, integrating with different payment gateways (like PayPal, Stripe, and Authorize.Net) can be quite complex due to varying APIs and data requirements. The Facade pattern can provide a simplified interface for client code to interact with these payment processing systems without needing to understand the intricate details of each gateway.

```js
// Subsystem classes representing different payment gateways
class PayPal {
    makePayment(amount) {
        console.log(`Payment of $${amount} made using PayPal.`);
    }
}

class Stripe {
    makePayment(amount) {
        console.log(`Payment of $${amount} made using Stripe.`);
    }
}

class AuthorizeNet {
    makePayment(amount) {
        console.log(`Payment of $${amount} made using Authorize.Net.`);
    }
}

// Facade class
class PaymentFacade {
    constructor() {
        this.paypal = new PayPal();
        this.stripe = new Stripe();
        this.authorizeNet = new AuthorizeNet();
    }

    makePayPalPayment(amount) {
        this.paypal.makePayment(amount);
    }

    makeStripePayment(amount) {
        this.stripe.makePayment(amount);
    }

    makeAuthorizeNetPayment(amount) {
        this.authorizeNet.makePayment(amount);
    }
}

// Usage
const paymentFacade = new PaymentFacade();
paymentFacade.makePayPalPayment(50);       // Payment of $50 made using PayPal.
paymentFacade.makeStripePayment(100);       // Payment of $100 made using Stripe.
paymentFacade.makeAuthorizeNetPayment(150); // Payment of $150 made using Authorize.Net.
```

#### Benefits of Using the Facade Pattern for Payment Processing

- Simplified Interface: The Facade provides a single, unified interface for interacting with various payment gateways, masking the complexity of the individual systems.

- Loose Coupling: The client code does not need to know about the specific details of each payment gateway, promoting loose coupling and making it easier to change or add gateways in the future.

- Improved Readability: By using the Facade, the code becomes easier to read and understand, as it abstracts away the details of the subsystem interactions.

- Easier Maintenance: If changes are required in the payment gateways' implementation (such as API changes), you only need to modify the Facade class rather than the client code that uses it.

- Flexibility: The Facade can be extended to include additional functionalities or new payment gateways without impacting existing client code.

### Decorator

The Decorator pattern allows behavior to be added to individual objects, either statically or dynamically.

```js
function basicCar() {
    return {
        drive: function() {
            console.log('Driving a basic car');
        }
    };
}

function sportsCar(car) {
    const originalDrive = car.drive;
    car.drive = function() {
        originalDrive();
        console.log('Driving a sports car');
    };
    return car;
}

const myCar = sportsCar(basicCar());
myCar.drive(); // Driving a basic car, Driving a sports car
```

#### Practical Usage: Notification System Example

In a web application, you may have a basic notification system that sends alerts to users. You might want to extend this functionality to include features like logging notifications, sending them via email, or displaying them in a specific format. The Decorator pattern allows you to add these features dynamically without modifying the original notification class.

```js
// Base Notification class
class Notification {
    send(message) {
        console.log(`Sending notification: ${message}`);
    }
}

// Decorator for logging notifications
class LoggingDecorator {
    constructor(notification) {
        this.notification = notification;
    }

    send(message) {
        console.log(`Logging notification: ${message}`);
        this.notification.send(message);
    }
}

// Decorator for email notifications
class EmailDecorator {
    constructor(notification) {
        this.notification = notification;
    }

    send(message) {
        this.notification.send(message);
        this.sendEmail(message);
    }

    sendEmail(message) {
        console.log(`Sending email with message: ${message}`);
    }
}

// Usage
let notification = new Notification();
notification.send("Hello!"); // Sending notification: Hello!

// Decorating the notification with logging
let loggedNotification = new LoggingDecorator(notification);
loggedNotification.send("Hello with logging!"); 
// Logging notification: Hello with logging!
// Sending notification: Hello with logging!

// Further decorating with email functionality
let emailNotification = new EmailDecorator(loggedNotification);
emailNotification.send("Hello with email!");
// Logging notification: Hello with email!
// Sending notification: Hello with email!
// Sending email with message: Hello with email!

```

#### Benefits of Using the Decorator Pattern for Notifications

- Flexibility: The pattern allows you to add or remove features from notification objects dynamically, providing flexibility in how notifications are processed.

- Single Responsibility Principle: Each decorator class has a single responsibility, making the code easier to understand and maintain.

- Open/Closed Principle: You can extend the functionality of notification objects without modifying the existing code, adhering to the Open/Closed Principle.

- Combining Features: You can combine multiple decorators to enhance an object with various functionalities, such as logging and emailing in this example.

- Cleaner Code: Rather than cluttering the base notification class with multiple features, the functionality is modularized through decorators, resulting in cleaner and more readable code.

## Behavioral Patterns

Behavioral patterns focus on communication between objects.

### Observer

The Observer pattern allows a subject to maintain a list of observers that are notified of state changes.

```js
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log('Data received:', data);
    }
}

const subject = new Subject();
const observer1 = new Observer();
subject.subscribe(observer1);
subject.notify('Hello Observers!'); // Data received: Hello Observers!
```

#### Practical Usage: Stock Price Update Example

In financial applications, users often want to receive live updates on stock prices. The Observer pattern can be used to notify multiple components (like UI components, logging services, or alerts) whenever stock prices change, ensuring that all interested parties receive timely updates without the components being tightly coupled.

```js
// Subject (Observable) class
class Stock {
    constructor(symbol) {
        this.symbol = symbol;
        this.price = 0;
        this.observers = [];
    }
  
    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this));
    }

    setPrice(price) {
        this.price = price;
        this.notify(); // Notify all observers of the price change
    }
}

// Observer class
class Investor {
    constructor(name) {
        this.name = name;
    }

    update(stock) {
        console.log(`Investor ${this.name} notified: ${stock.symbol} price is now $${stock.price}`);
    }
}

// Usage
const googleStock = new Stock("GOOGL");

const investor1 = new Investor("Alice");
const investor2 = new Investor("Bob");

googleStock.subscribe(investor1);
googleStock.subscribe(investor2);

// Simulate a price change
googleStock.setPrice(2700);
// Output:
// Investor Alice notified: GOOGL price is now $2700
// Investor Bob notified: GOOGL price is now $2700

// Unsubscribe Bob and change the price again
googleStock.unsubscribe(investor2);
googleStock.setPrice(2750);
// Output:
// Investor Alice notified: GOOGL price is now $2750

```

#### Benefits of Using the Observer Pattern for Stock Price Updates

- Loose Coupling: The stock and investors are loosely coupled, allowing for changes in the stock class without affecting the investor classes and vice versa.

- Dynamic Subscribers: Investors can subscribe or unsubscribe to stock price updates at any time, making the system flexible.

- Real-Time Updates: The Observer pattern enables real-time updates, ensuring that all interested parties receive notifications promptly when stock prices change.

- Easier Maintenance: Adding or removing new observers or subjects can be done with minimal changes to existing code, promoting easier maintenance and scaling.

- Scalability: You can add more observers (such as different types of notifications, graphical displays, or alert systems) without modifying the subject class.

### Strategy

The Strategy pattern enables selecting an algorithm's behavior at runtime.

```js
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data) {
        return this.strategy(data);
    }
}

const strategyA = data => `Strategy A: ${data}`;
const strategyB = data => `Strategy B: ${data}`;

const context = new Context(strategyA);
console.log(context.executeStrategy('Test')); // Strategy A: Test
context.strategy = strategyB;
console.log(context.executeStrategy('Test')); // Strategy B: Test
```

### Command

The Command pattern encapsulates a request as an object, thereby allowing parameterization of clients with different requests.

```js
class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }
  
    execute() {
        this.receiver.action();
    }
}

class Receiver {
    action() {
        console.log('Action executed!');
    }
}

const receiver = new Receiver();
const command = new Command(receiver);
command.execute(); // Action executed!
```

#### Practical Usage: Text Editor Example

In text editors, users frequently perform operations like typing, deleting, or formatting text. The Command pattern allows encapsulating these operations as command objects, enabling functionalities like undo and redo while keeping the operational logic separate from the user interface.

```js
// Command interface
class Command {
    execute() {}
    undo() {}
}

// Concrete Command for adding text
class AddTextCommand extends Command {
    constructor(textEditor, text) {
        super();
        this.textEditor = textEditor;
        this.text = text;
    }

    execute() {
        this.textEditor.addText(this.text);
    }

    undo() {
        this.textEditor.removeText(this.text.length);
    }
}

// Text Editor class
class TextEditor {
    constructor() {
        this.content = '';
    }

    addText(text) {
        this.content += text;
        console.log(`Current content: ${this.content}`);
    }

    removeText(length) {
        this.content = this.content.slice(0, -length);
        console.log(`Current content after removal: ${this.content}`);
    }
}

// Invoker class to handle command execution
class CommandManager {
    constructor() {
        this.commandStack = [];
        this.redoStack = [];
    }

    execute(command) {
        command.execute();
        this.commandStack.push(command);
        this.redoStack = []; // Clear redo stack on new command
    }

    undo() {
        const command = this.commandStack.pop();
        if (command) {
            command.undo();
            this.redoStack.push(command);
        } else {
            console.log('No command to undo.');
        }
    }

    redo() {
        const command = this.redoStack.pop();
        if (command) {
            command.execute();
            this.commandStack.push(command);
        } else {
            console.log('No command to redo.');
        }
    }
}

// Usage
const textEditor = new TextEditor();
const commandManager = new CommandManager();

const addHelloCommand = new AddTextCommand(textEditor, 'Hello ');
const addWorldCommand = new AddTextCommand(textEditor, 'World!');

commandManager.execute(addHelloCommand); // Current content: Hello 
commandManager.execute(addWorldCommand);  // Current content: Hello World!

commandManager.undo(); // Current content after removal: Hello 
commandManager.undo(); // Current content after removal: 

commandManager.redo(); // Current content: Hello 

```

#### Benefits of Using the Command Pattern for Text Editor

- Encapsulation of Command Logic: Each command (like adding text, removing text) is encapsulated in its own class, promoting separation of concerns.

- Undo and Redo Functionality: The Command pattern allows for easily implementing undo and redo operations without complex management of the text editor's state.

- Flexibility and Scalability: New commands (like Bold, Italics, Cut, Copy, Paste) can be added simply by creating new command classes without affecting existing code.

- Maintainability: Since the commands are separate from the UI logic, it improves maintainability, making it easier to update or modify command implementations.

- Consistency: Command objects can ensure that operations are executed in a consistent manner without interfering with the text editor's internal state directly.

[EOF]
