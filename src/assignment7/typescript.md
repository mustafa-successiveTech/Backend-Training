## What is TypeScript?
TypeScript is a typed superset of JavaScript that provides static typing, interfaces, classes, and advanced tooling. It compiles down to plain JavaScript for cross-platform compatibility.

## Why Use TypeScript?
Static Type Checking

Better Code Readability

Powerful Tooling (IntelliSense, Auto-completion)

Enhanced OOP Support with Classes & Interfaces

Early Detection of Errors

## Basic Types
#### Type	Example
number	let age: number = 30;
string	let name: string = 'Ali';
boolean	let isActive: boolean = true;
any	let value: any = "anything";
void	function log(): void {}
array	let numbers: number[] = [1,2,3];
tuple	let person: [string, number] = ['Ali', 25];
enum	enum Color { Red, Green, Blue }
unknown	let data: unknown;

## Variable Declarations
let: block-scoped

const: block-scoped and immutable

var: function-scoped (deprecated in favor of let and const)

## Functions

function greet(name: string): string {
  return `Hello, ${name}`;
}

## Optional & default parameters:

function greet(name: string, age: number = 25): string {
  return `${name} is ${age} years old`;
}

## Interfaces
Interfaces define the shape of objects.

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Mustafa",
  email: "mustafa@example.com"
};

## Interfaces for Functions

interface Adder {
  (a: number, b: number): number;
}

const add: Adder = (x, y) => x + y;

## Classes
Classes bring OOP features to TypeScript like inheritance, encapsulation, and polymorphism.

class Person {
  constructor(public name: string, public age: number) {} 

    <!-- This line will automatically declare and initialize    variables -->

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Ali", 30); 
p1.greet();

<!-- For creating singleton classes, we can use the static keyword -->

class Singleton {
    private static instance: Singleton;
    private constructor() {}
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            }
            return Singleton.instance;
    }
}
const singleton = Singleton.getInstance();

## Enums
Enums are a way to define a set of named values.

## Inheritance

class Employee extends Person {
  constructor(name: string, age: number, public role: string) {
    super(name, age);
  }

  displayRole() {
    console.log(`Role: ${this.role}`);
  }
}

## Access Modifiers
public: Accessible everywhere

private: Only within the class

protected: Within the class and subclasses

## Type Inference
TypeScript infers types:

let city = "Delhi"; // Inferred as string

## Advanced Types
Union: number | string

Intersection: TypeA & TypeB

Type Alias: type Status = 'active' | 'inactive';

## 1. Type Assertions
Force a variable to be treated as a specific type.

let someValue: any = "Hello";
let strLength: number = (someValue as string).length;
## 2. Generics
For reusable and type-safe components/functions.

function identity<T>(value: T): T {
  return value;
}

let output = identity<string>("Mustafa");

## 3. Type Guards
Narrow down types using conditions.

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
## 4. Readonly, Partial, Required
Utility types to modify interfaces/types.

interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = { id: 1, name: "Ali" }; // Can't modify properties

## 5. Never Type
Used when a function never returns (throws or infinite loop).

function error(message: string): never {
  throw new Error(message);
}

## 6. Modules & Import/Export
Using modular TypeScript files.

// file: math.ts
export function add(x: number, y: number): number {
  return x + y;
}

// file: app.ts
import { add } from "./math";

## 7. Namespaces (Less common in modern TS but useful)
Group related code logically.

namespace Utils {
  export function log(msg: string) {
    console.log(msg);
  }
}
Utils.log("Hello");

## 8. Decorators (Experimental)
Add behavior to classes/methods.

function Log(target: any, key: string) {
  console.log(`Called: ${key}`);
}

class Test {
  @Log
  sayHi() {
    console.log("Hi");
  }
}

## 9. Type Compatibility & Structural Typing
TypeScript uses structural typing (duck typing), not nominal.

interface A { x: number }
interface B { x: number }

let a: A = { x: 1 };

let b: B = a; // allowed