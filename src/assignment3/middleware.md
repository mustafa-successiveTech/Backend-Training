## What is Middleware?
Middleware in web development refers to functions that execute between the request and response cycle in a server, especially in frameworks like Express.js. They have access to the req, res, and next() objects.

### Common Use Cases
Logging requests

Authentication and Authorization

Parsing JSON or form data

Error handling

Adding headers (e.g., CORS, security)

### Middleware Structure (Basic Template)

function customMiddleware(req, res, next) {
  // Do something before moving to the next middleware
  console.log('Middleware executed');
  
  // Pass control to the next middleware
  next();
}

### Applying Middleware in Express.js
#### 1. Application-Level Middleware
Used for all incoming requests.

const express = require('express');
const app = express();

app.use(customMiddleware); // Applies to all routes

#### 2. Route-Level Middleware
Used for specific routes.

app.get('/user', customMiddleware, (req, res) => {
  res.send('User Route');
});

#### 3. Built-in Middleware

app.use(express.json());         // Parses incoming JSON
app.use(express.urlencoded());   // Parses URL-encoded data

#### 4. Third-Party Middleware Example

const morgan = require('morgan');
app.use(morgan('dev')); // HTTP request logger

### Custom Middleware Chain Example

function first(req, res, next) {
  console.log('First');
  next();
}

function second(req, res, next) {
  console.log('Second');
  next();
}

app.use(first);
app.use(second);

app.get('/', (req, res) => {
  res.send('Middleware demo complete');
});

### Error-Handling Middleware
Has 4 parameters: (err, req, res, next)

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}

app.use(errorHandler);