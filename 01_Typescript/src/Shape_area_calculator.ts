/*
Discriminated Unions: Define Circle, Square, and Rectangle.
Type Guards: Identify the shape type.
Interfaces: Structure shape properties.
Enums: Represent shape types.
*/

enum ShapeType {
    Circle = "CIRCLE",
    Square = "SQUARE",
    Rectangle = "RECTANGLE",
  }
  
  interface Circle {
    type: ShapeType.Circle;
    radius: number;
  }
  
  interface Square {
    type: ShapeType.Square;
    side: number;
  }
  
  interface Rectangle {
    type: ShapeType.Rectangle;
    length: number;
    width: number;
  }
  
  type Shape = Circle | Square | Rectangle;
  
  function calculateArea(shape: Shape): number {
    switch (shape.type) {
      case ShapeType.Circle:
        return Math.PI * shape.radius ** 2;
      case ShapeType.Square:
        return shape.side ** 2;
      case ShapeType.Rectangle:
        return shape.length * shape.width;
      default:
        throw new Error("Invalid shape");
    }
  }
  
  // Example Usage
  const circle: Circle = { type: ShapeType.Circle, radius: 10 };
  const square: Square = { type: ShapeType.Square, side: 5 };
  const rectangle: Rectangle = { type: ShapeType.Rectangle, length: 10, width: 5 };
  
  console.log("Circle Area:", calculateArea(circle));
  console.log("Square Area:", calculateArea(square));
  console.log("Rectangle Area:", calculateArea(rectangle));
  
