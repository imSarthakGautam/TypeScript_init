
# Answers :

## **Section 1: Introduction to TypeScript**


#### **Q1. What is TypeScript, and how is it different from JavaScript?**

**Definition:**  
TypeScript is a **typed superset of JavaScript** developed by Microsoft. It builds on JavaScript by adding **optional static typing** and other modern features, enabling developers to catch type-related errors during development.  

**Differences from JavaScript:**  
| Aspect               | TypeScript                           | JavaScript                  |
|----------------------|--------------------------------------|-----------------------------|
| **Typing**          | Statically typed (type annotations). | Dynamically typed.          |
| **Compilation**     | Needs to be compiled to JavaScript.  | Runs directly in browsers.  |
| **Tooling Support** | Advanced IDE support with intellisense. | Basic tooling.             |
| **Features**        | Includes interfaces, enums, generics. | Limited to ECMAScript.      |

**Example:**  
JavaScript code:  
```javascript
function add(a, b) {
    return a + b;
}
```
TypeScript code:  
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

---

#### **Q2. Explain the concept of "duck typing" in TypeScript.**

**Definition:**  
Duck typing, also called **structural typing**, means the type compatibility in TypeScript is determined by the structure of the object rather than its explicit declaration.

**Explanation:**  
If an object or variable has all the necessary properties required by a type or interface, it is considered compatible with that type, regardless of whether it was explicitly declared as such.

**Example:**  
```typescript
interface User {
    name: string;
    age: number;
}

const person = { name: "Alice", age: 25 };

// Even though 'person' is not explicitly typed as 'User',
// it is compatible due to its structure.
let user: User = person;

console.log(user.name); // Output: Alice
```

This structural compatibility allows flexibility while still enforcing type safety.


#### **Q3. How do you declare a variable with a specific type in TypeScript?**  

**Definition:**  
TypeScript allows you to explicitly declare the type of a variable using the `: type` syntax.

**Example:**  
```typescript
let age: number = 25;   // age must be a number
let name: string = "John"; // name must be a string
let isActive: boolean = true; // isActive must be a boolean
```

**Explanation:**  
- The `: type` after the variable name specifies the type.  
- If you try to assign a value of a different type, TypeScript will throw a compile-time error.  

Example of error:  
```typescript
let age: number = "25"; // Error: Type 'string' is not assignable to type 'number'.
```

---

#### **Q4. What does the `: number` annotation indicate in a variable declaration?**  

**Definition:**  
The `: number` annotation indicates that the variable can only hold numeric values (integers or floating-point numbers).  

**Example:**  
```typescript
let height: number = 175;
let weight: number = 70.5;

// Valid operations
height = height + 5; // Allowed
weight = weight - 2.3; // Allowed
```

**Explanation:**  
- TypeScript enforces that the variable declared with `: number` can only be assigned values of type `number`.  
- Assigning a non-numeric value will result in a compilation error.

Invalid example:  
```typescript
let temperature: number = "hot"; // Error: Type 'string' is not assignable to type 'number'.
```
#### **Q5. How do you define a function with type annotations for its parameters and return value?**

**Definition:**  
Type annotations in functions allow you to specify the types of parameters and the return value using the syntax `(paramName: type): returnType`.

**Example:**  
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

**Explanation:**  
- `a: number` and `b: number` specify that both parameters must be of type `number`.  
- `: number` after the parentheses indicates that the function returns a value of type `number`.  

Invalid example:  
```typescript
function add(a: number, b: number): number {
    return "Hello"; // Error: Type 'string' is not assignable to type 'number'.
}
```

---

#### **Q5.1. How can you specify a function with an optional parameter in TypeScript?**

**Definition:**  
Optional parameters are defined using the `?` after the parameter name, indicating that the parameter is not mandatory.  

**Example:**  
```typescript
function greet(name: string, message?: string): string {
    return message ? `${message}, ${name}` : `Hello, ${name}`;
}

console.log(greet("Alice"));           // Output: Hello, Alice
console.log(greet("Alice", "Welcome")); // Output: Welcome, Alice
```

**Explanation:**  
- `message?: string` means the `message` parameter is optional.  
- When the optional parameter is not passed, its value will be `undefined`.  

---

#### **Q6. How do you define an array with a specific type of elements in TypeScript?**

**Definition:**  
You can define the type of an array's elements using either `type[]` or `Array<type>` syntax.

**Example:**  
```typescript
let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["apple", "banana", "cherry"];
```

**Explanation:**  
- `number[]` specifies an array of numbers.  
- `Array<string>` specifies an array of strings.  

Invalid example:  
```typescript
let numbers: number[] = [1, 2, "3"]; // Error: Type 'string' is not assignable to type 'number'.
```

---

#### **Q8. How do you define a tuple in TypeScript, and how is it different from an array?**

**Definition:**  
A tuple is an array with a fixed number of elements, where each element can have a different type. It is declared using `[type1, type2, ...]`.

**Example:**  
```typescript
let person: [string, number] = ["Alice", 25];

// Accessing tuple elements
console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 25
```

**Difference from Arrays:**  

| **Feature**          | **Tuple**                               | **Array**                          |
|-----------------------|-----------------------------------------|-------------------------------------|
| **Size**             | Fixed size.                             | Dynamic size.                      |
| **Element Types**    | Each element can have a different type. | All elements have the same type.   |

Invalid example:  
```typescript
let person: [string, number] = ["Alice", "25"]; // Error: Type 'string' is not assignable to type 'number'.
```

#### **Q6. What is the `any` type in TypeScript, and when should it be used?**

**Definition:**  
The `any` type allows a variable to hold any value, bypassing TypeScript's type-checking.

**Example:**  
```typescript
let data: any = "Hello";
data = 42; // No error
data = true; // No error
```

**When to Use:**  
- When migrating from JavaScript and unsure about a variable's type.  
- When working with third-party libraries that lack type definitions.  

**Caution:**  
Overusing `any` reduces the benefits of TypeScript's type safety.

---

#### **Q7. What is the `unknown` type in TypeScript, and how is it different from `any`?**

**Definition:**  
The `unknown` type is a safer version of `any` that requires explicit type checking before performing operations.

**Example:**  
```typescript
let data: unknown = "Hello";
if (typeof data === "string") {
    console.log(data.toUpperCase()); // Safe
}
```

**Difference from `any`:**  

| **Aspect**      | **`any`**                            | **`unknown`**                       |
|------------------|--------------------------------------|--------------------------------------|
| **Type Safety** | No restrictions; can perform any operation. | Requires type checks before use.     |
| **Use Case**    | Temporary flexibility.               | Safer handling of unknown values.    |

---

#### **Q8.1 What is the `never` type in TypeScript, and where is it used?**

**Definition:**  
The `never` type represents values that never occur, such as functions that throw errors or infinite loops.

**Example:**  
```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

**Use Cases:**  
- Functions that do not return a value.  
- Exhaustive checks in switch cases.  

---

#### **Q8.2 What is the `void` type in TypeScript?**

**Definition:**  
The `void` type represents functions that do not return a value.

**Example:**  
```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

**Explanation:**  
- Typically used for functions that perform actions like logging or updating UI.  

---

#### **Q9. How can you use union types in TypeScript?**

**Definition:**  
Union types allow variables to hold values of multiple types using the `|` operator.

**Example:**  
```typescript
let value: string | number;
value = "Hello"; // Allowed
value = 42;      // Allowed
```

**Explanation:**  
- Useful when a variable can accept more than one type of value.

---

#### **Q14. What are intersection types in TypeScript, and how are they used?**

**Definition:**  
Intersection types combine multiple types into one using the `&` operator, ensuring that the resulting type includes all properties from the intersected types.

**Example:**  
```typescript
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee;

let worker: EmployeePerson = {
    name: "Alice",
    employeeId: 1234,
};
```

---

#### **Q17. How do you define a type alias in TypeScript?**

**Definition:**  
A type alias assigns a custom name to a type for reuse and readability.

**Example:**  
```typescript
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "Hello"; // Allowed
value = 42;      // Allowed
```

---

#### **Q16. How do you declare an object type using an interface in TypeScript?**

**Definition:**  
An interface defines the structure of an object, including its properties and their types.

**Example:**  
```typescript
interface User {
    name: string;
    age: number;
}

let user: User = {
    name: "Alice",
    age: 25,
};
```

---

#### **Q17. How do optional properties work in interfaces?**

**Definition:**  
Optional properties are defined using the `?` symbol and are not required when creating an object of the interface type.

**Example:**  
```typescript
interface User {
    name: string;
    age?: number;
}

let user: User = { name: "Alice" }; // Valid
```

---

#### **Q18. How can you define read-only properties in TypeScript?**

**Definition:**  
The `readonly` modifier ensures that a property cannot be reassigned after initialization.

**Example:**  
```typescript
interface User {
    readonly id: number;
    name: string;
}

let user: User = { id: 1, name: "Alice" };
user.name = "Bob"; // Allowed
user.id = 2;       // Error: Cannot assign to 'id' because it is a read-only property.
```

---

#### **Q19. What is the difference between `type` aliases and `interface` in TypeScript?**

**Comparison:**  

| **Aspect**             | **Type Alias**                              | **Interface**                     |
|-------------------------|---------------------------------------------|------------------------------------|
| **Definition**         | Defines types, including primitives, unions, tuples. | Defines object shapes and contracts. |
| **Extension**          | Cannot extend multiple aliases.             | Can extend multiple interfaces.   |
| **Flexibility**        | More flexible (can define primitives, unions). | Strictly for object shapes.       |

**Example:**  
Using `type`:  
```typescript
type StringOrNumber = string | number;
```

Using `interface`:  
```typescript
interface User {
    name: string;
    age: number;
}
```

---

#### **Q20. How do you use `extends` with interfaces in TypeScript?**

**Definition:**  
The `extends` keyword allows an interface to inherit properties from another interface.

**Example:**  
```typescript
interface Person {
    name: string;
}

interface Employee extends Person {
    employeeId: number;
}

let worker: Employee = {
    name: "Alice",
    employeeId: 1234,
};
```

**Explanation:**  
- The `Employee` interface inherits the `name` property from `Person` and adds its own `employeeId` property.  