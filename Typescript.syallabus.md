# Learning Typescript from questions
 - separated into topics and subtopics. 
 - The outline will act as a foundation for a detailed TypeScript guide and cheatsheet
 - !not official documentation, just my self notes.

---

## **TypeScript Documentation Outline**

### **1. Introduction to TypeScript**  
1. What is TypeScript, and how is it different from JavaScript?  
2. Explain the concept of "duck typing" in TypeScript.  

---

### **2. Type Annotations**  
#### **2.1. Basic Types**  
3. How do you declare a variable with a specific type in TypeScript?  
4. What does the `: number` annotation indicate in a variable declaration?  
5. How do you specify a function’s return type in TypeScript?  

#### **2.2. Special Types**  
6. What is the purpose of the `any` type in TypeScript?  
7. What does the `unknown` type represent?  
8. What are "never" and "void" types in TypeScript?  

#### **2.3. Union and Intersection Types**  
9. How can you use a union type in TypeScript?  
10. Write an example of a union type with conditional checks.  

---

### **3. Type Inference and Assertions**  
11. Explain what type inference means in TypeScript.  
12. What is a type assertion in TypeScript, and when would you use it?  

---

### **4. Interfaces and Type Aliases**  
#### **4.1. Interfaces**  
13. What is the syntax to create an interface in TypeScript?  
14. How do you create an optional property in an interface?  
15. How do you ensure an object conforms to a specific shape using TypeScript?  
16. Write a TypeScript interface for a user object with dynamic keys.  

#### **4.2. Type Aliases**  
17. What are type aliases in TypeScript?  
18. What is the difference between interfaces and type aliases?  

---

### **5. Functions in TypeScript**  
#### **5.1. Function Basics**  
19. How do you specify a function’s return type in TypeScript?  
20. Write a simple function in TypeScript that adds two numbers.  
21. Write a TypeScript function that logs a message and returns nothing.  
22. How do you use default parameters in TypeScript functions?  

#### **5.2. Function Overloads**  
23. Write an example of a function overload in TypeScript.  
24. How does TypeScript handle function overloads?  

#### **5.3. Type Guards**  
25. Explain type guards with an example.  
26. Write a function demonstrating narrowing with the `in` operator.  
27. Explain the `instanceof` type guard in TypeScript.  

---

### **6. Arrays and Tuples**  
28. How do you create an array of numbers in TypeScript?  
29. How do you define a tuple in TypeScript?  
30. How can you create a readonly array in TypeScript?  

---

### **7. Enums**  
31. Write an example of a TypeScript enum.  

---

### **8. Classes and Objects**  
#### **8.1. Classes**  
32. How do you define a class in TypeScript?  
33. What is the `readonly` keyword, and how is it used in TypeScript?  
34. How do you specify a class property as optional in TypeScript?  
35. What is the purpose of the `implements` keyword in TypeScript?  

#### **8.2. Abstract Classes vs Interfaces**  
36. What is the difference between abstract classes and interfaces?  

---

### **9. Generics**  
#### **9.1. Basics of Generics**  
37. What is a generic type in TypeScript, and how do you use it?  
38. Write a function demonstrating conditional types with generics.  

#### **9.2. Advanced Generics**  
39. Explain how TypeScript handles variance in generics.  
40. How can you recursively define types in TypeScript?  

---

### **10. Utility Types**  
41. Explain the `Partial<T>` utility type in TypeScript.  
42. Write a TypeScript example using the `Pick` utility type.  
43. What is the `Record<K, T>` utility type used for?  
44. What is the `Omit` utility type in TypeScript?  
45. What is a utility type `ReturnType` used for?  
46. Write an example using the `Extract` utility type.  
47. What is the purpose of the `Exclude` utility type?  

---

### **11. Advanced Types**  
#### **11.1. Conditional Types**  
48. What are conditional types in TypeScript? Write an example.  
49. What is a distributive conditional type?  

#### **11.2. Mapped Types**  
50. Explain how to use mapped types in TypeScript.  
51. What is a mapped type with modifiers in TypeScript?  

#### **11.3. Discriminated Unions**  
52. What is a discriminated union, and how is it used in TypeScript?  

---

### **12. Decorators**  
53. Write an example of a decorator in TypeScript.  

---

### **13. Namespaces and Modules**  
54. What is the purpose of `namespace` in TypeScript?  
55. Explain how TypeScript handles module resolution.  
56. How do you configure path aliases in a `tsconfig.json` file?  

---

### **14. Error Handling and Strictness**  
57. How do you enforce strict null checks in TypeScript?  
58. What is the `noImplicitAny` compiler option, and why is it useful?  
59. What is the role of `@ts-ignore` and `@ts-expect-error` comments in TypeScript?  

---

### **15. Advanced Concepts**  
#### **15.1. Type Compatibility**  
60. Explain the concept of type compatibility in TypeScript.  

#### **15.2. Custom Type Guards**  
61. How can you create a custom type guard in TypeScript?  

#### **15.3. Recursive and Complex Types**  
62. Write an example of a recursive generic type in TypeScript.  
63. How can you create a "readonly deep" type in TypeScript?  

---

### **16. Working with JavaScript and Third-Party Libraries**  
64. How do you define custom types for third-party libraries in TypeScript?  
65. What is `declare global` used for?  
66. Explain the difference between `declare` and `const` when importing modules.  

---

### **17. TypeScript Compiler and Debugging**  
67. How does TypeScript compile down to JavaScript?  
68. How do you debug TypeScript compilation errors effectively?  
69. How do you create a custom transformer in TypeScript?  

---

### **18. React and TypeScript**  
70. How do you use TypeScript with React props?  

---
