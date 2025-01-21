# TypeScript:

Basic TypeScript Notes for recall/practice.


### **Introduction to TypeScript**

#### 1. **What TypeScript Is**
- TypeScript is a **superset of JavaScript** that adds **static typing** to the language.
- It allows for **early error detection** during development, improving code reliability and maintainability.


#### 2.  **How TypeScript Differs from JavaScript**

1. **TypeScript Adds Static Typing**: Unlike JavaScript, where variables can change types dynamically, TypeScript requires you to define types explicitly.

2. **Backward Compatibility**: TypeScript compiles to **standard JavaScript**, making it compatible with existing JavaScript code. You can use the latest JavaScript features and still ensure compatibility by compiling to older JavaScript versions if needed.


#### 3. **How TypeScript Works**
- TypeScript code (`.ts` files) is **transpiled** into plain JavaScript (`.js files`) using the **TypeScript Compiler** (`tsc`).
- The TypeScript compiler checks for type mismatches at **compile-time**, throwing errors before the code is executed.



---

### **Installation and Setup**

1. **Installing TypeScript**:
   - To get started, install TypeScript globally using npm:
     ```bash
     npm install -g typescript
     ```

2. **Compiling TypeScript Files**:
   - TypeScript files should have the `.ts` extension. Compile them into JavaScript using the TypeScript compiler (`tsc`):
     ```bash
     tsc filename.ts
     ```
   - Use the `--watch` flag to automatically recompile the files when changes are made:
     ```bash
     tsc --watch
     ```

3. **Setting Up a TypeScript Project**:
   - Configure your TypeScript project with a `tsconfig.json` file to manage project settings and compilation options.

---


### **Key Features of TypeScript**


#### 1. **Static Typing vs JavaScript's Dynamic Typing**
- **Static Typing**: TypeScript allows you to **explicitly define variable and function types**, helping prevent errors caused by unexpected types at runtime.
- **Dynamic Typing in JavaScript**: JavaScript allows variables to change types at runtime, which can lead to **unexpected behaviors** if operations are performed on incompatible types.

**Examples of Type Errors in JavaScript**:
- **Adding String and Number**:
   ```js
   let num = 5;
   let str = "Hello";
   let result = num + str; // 5 + "Hello" results in "5Hello"
   console.log(result); // "5Hello"
   ```
- **Accessing Property of Non-Object**:
   ```js
   let person = null;
   console.log(person.name); 
   // TypeError: Cannot read property 'name' of null
   ```
- **Calling a Non-Function Value**:
   ```js
   let greet = "Hello";
   greet(); // TypeError: greet is not a function
   ```

---

### **Benefits of TypeScript**

1. **Improved Code Quality**
   - By detecting errors at **compile-time**, TypeScript reduces the chances of **runtime errors** due to type mismatches.

2. **Collaboration and Readability**
   - TypeScript's static typing makes the codebase more **self-documenting**, improving collaboration in larger teams.

3. **Enhanced IDE Support**
   - TypeScript integrates with IDEs, providing features like **auto-completion**, **type checking**, and **refactoring support**.

---

### **Type Safety in TypeScript**

- **TypeScript's Type Safety** ensures that the types of variables, function parameters, and return values are **correct**. This reduces the risk of runtime errors caused by unexpected types.

#### Examples of Type Safety:

1. **Strict Variable Types**:
   ```ts
   let num: number = 5;
   num = "Hello"; 
   // Error: Type 'string' is not assignable to type 'number'.
   ```

2. **Type-Safe Function Parameters**:
   ```ts
   function add(a: number, b: number): number {
      return a + b;
   }

   add(5, "Hello"); 
   // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
   ```

3. **Using Interfaces for Type Safety**:
   ```ts
   interface Person {
      name: string;
      age: number;
   }

   let person: Person = { name: "John", age: 25 };
   person.age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'.
   ```

---


#### Type Annotations 

Type annotations are one of the most fundamental features of TypeScript. Here's what you need to know:  
1. **Basic Types**  
   - **Primitive types**: `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`.  
   - **Special types**: `any`, `unknown`, `never`, and `void`.

2. **Function Annotations**  
   - Specify parameter and return types for functions.  
   - Use annotations for optional parameters and default values.

3. **Object Annotations**  
   - Define shapes of objects and their properties.  
   - Use interfaces or inline object type annotations.

4. **Array and Tuple Annotations**  
   - Specify types for array elements.  
   - Use tuples for fixed-size arrays with different types of elements.

5. **Union and Intersection Types**  
   - Combine multiple types using `|` (Union) or `&` (Intersection).

6. **Type Compatibility**  
   - Understand how TypeScript checks compatibility based on structure (duck typing).

---



