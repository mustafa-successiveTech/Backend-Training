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
Optional & default parameters:

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

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Ali", 30);
p1.greet();

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