## What is TypeScript?
TypeScript is a superset of JavaScript that adds static typing and type-checking at compile time. It helps catch errors early, improves code readability, and enables better tooling (e.g., IntelliSense).

TypeScript files have the .ts extension.

## Key Benefits
Static type checking

Enhanced IDE support (auto-completion, hints)

Early error detection

Supports modern JavaScript features with backward compatibility

Better code scalability in large projects

## Basic Types in TypeScript
##### Type	Description	Example
number	Numeric values	let age: number = 25;
string	Textual data	let name: string = 'Ali';
boolean	True/False	let isActive: boolean = true;
any	Any type (disables type-checking)	let data: any = 10;
void	No return value (mostly for functions)	function log(): void {}
undefined	Value is not defined	let u: undefined = undefined;
null	Null value	let n: null = null;
array	Collection of elements	let nums: number[] = [1,2];
tuple	Fixed-size array of types	let tuple: [number, string] = [1, "A"];
enum	Named constants	enum Color {Red, Green}
unknown	Safer alternative to any	let val: unknown;
object	Non-primitive type	let obj: object = {};

## Variable Declarations
let
Block-scoped variable.

let count: number = 5;
const
Constant value, cannot be reassigned.

const PI: number = 3.14;
var
Function-scoped (legacy, not recommended).

## Example

let username: string = "Mustafa";
let age: number = 24;
let isLoggedIn: boolean = true;
let scores: number[] = [90, 80, 70];

function greet(name: string): string {
    return `Hello, ${name}`;
}

console.log(greet(username));