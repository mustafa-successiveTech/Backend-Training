# Mongoose & MongoDB Documentation

## 1. Introduction to MongoDB

**MongoDB** is a NoSQL, document-oriented database designed for scalability and high performance.

### Key Features:

- **Document-Based**: Stores data as JSON-like documents (BSON).
- **Schema-Less**: No fixed schema—flexible to store varied data structures.
- **Scalable**: Supports horizontal scaling using sharding.
- **Indexing**: Supports single field, compound, text, and geospatial indexes.

### Document Example:

{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Mustafa",
  "age": 25,
  "skills": ["JavaScript", "Node.js"]
}

## 2. What is ORM?

ORM (Object Relational Mapping) is a programming technique that allows you to interact with the database using object-oriented syntax.

### Purpose:

Abstracts raw database queries.

Maps tables to classes (in SQL) or collections to classes (in NoSQL).

Allows developers to write database logic using familiar language constructs (JS, TS, Python, etc.).

## 3. What is Mongoose?
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

### Key Features:

Schema definitions with validations.

Middleware (pre, post hooks).

Custom instance and static methods.

Built-in query helpers.

### Installation:

npm install mongoose

### Folder Structure Example:

project/
├── models/
│   └── user.model.ts
├── controllers/
│   └── user.controller.ts
├── routes/
│   └── user.route.ts
└── app.ts

## 4. Mongoose Core Concepts

### Schema

Defines the structure of documents in a collection.

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: { type: Number, min: 0 },
});

### Model

Model is a wrapper for the schema and provides an interface for database operations.

const User = mongoose.model('User', userSchema);
export default User;

### CRUD Operations

// Create
await User.create({ name: "Ali", email: "ali@example.com", age: 25 });

// Read
const user = await User.findOne({ name: "Ali" });

// Update
await User.updateOne({ name: "Ali" }, { age: 30 });

// Delete
await User.deleteOne({ name: "Ali" });

### Mongoose Middleware (Hooks)

userSchema.pre('save', function (next) {
  console.log('Before saving user');
  next();
});

## 5. RDBMS vs NoSQL (MongoDB)

Feature	RDBMS (MySQL, PostgreSQL)	NoSQL (MongoDB)

### Data Model	Tables, Rows	Documents, Collections

Schema	Fixed	Dynamic/Flexible
Relationships	Foreign Keys	Embedded or Referenced
Joins	Supported	Manual (via populate or logic)
Scalability	Vertical	Horizontal
ACID Compliance	Strong	Eventual (but tunable)
Best For	Structured data, complex queries	Unstructured, fast iteration

## 6. Connecting to MongoDB using Mongoose

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

## 7. Good Practices

Always define validations in schema.

Use indexes for fast search.

Use lean() for performance in read-only queries.

Use populate() to handle references.

Avoid over-embedding large documents.

## 8. Sample Reference & Embedding

### Referencing:

const orderSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  total: Number
});

### Embedding:

const blogSchema = new Schema({
  title: String,
  comments: [{ body: String, date: Date }]
});

## 9. Tools

MongoDB Compass – GUI for interacting with MongoDB.

Mongoose Debug Mode – Logs all queries:

mongoose.set('debug', true);