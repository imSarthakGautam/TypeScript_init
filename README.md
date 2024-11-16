# TypeScript_init

### Type Errors in Javascript
- JS is dynamically typed i.e. type of variables can be changed during runtime.
- Can lead to unexpected behaviour if operations are performed on values of incompatible types
- **Examples:**
1. Adding String and Number
```js
let num = 5;
let str = "Hello";
let result = num + str; // 5 + "Hello" results in "5Hello"
console.log(result); // "5Hello"
```

2. Accessing property of non-object
```js
let person =null
console.log(person.name); 
// TypeError: Cannot read property 'name' of null
```

3. Calling a non-function value:

```javascript
let greet = "Hello";
greet(); // TypeError: greet is not a function
```
    Here, greet is a string, 
    but trying to call it like a function results in a type error.

### Type Safety
- Goal of TypeScript: be a static typechecker for JavaScript programs - In other words, a tool that runs before your code runs (static) and ensure that the types of the program are correct (typechecked).

- It allows you to explicitly define the types of variables, function parameters, and return values, reducing the chances of runtime errors due to unexpected types. TypeScript checks the types at compile-time and throws errors if there's a mismatch before the code runs.

- **Examples of TypeSafety:**
1. Strict variable types:
```ts
let num: number = 5;
num = "Hello"; 
// Error: Type 'string' is not assignable to type 'number'.
```
 TypeScript catches the error at compile time because you're trying to assign a string to a variable that is defined as a number.

 2. Function with **type-safe parameters**
 ```ts
 function add(a: number, b: number): number {
    return a + b;
}

add(5, "Hello"); 
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

 ```

3. Using interfaces for type safety
```ts
interface Person {
    name: string;
    age: number;
}

let person: Person = { name: "John", age: 25 };
person.age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'.
```
Here, TypeScript ensures that the age property is always a number, and trying to assign a string to it results in a compile-time error.

### Installation
```bash
npm i typescript -g
```
-Filename ends with .ts extension
- to run a typeScript file.

```bash
tsc filename.ts
```