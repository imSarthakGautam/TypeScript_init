/*
Create a Book Class,
Track Inventory using Static Methods,
Use Generic Method for Filetering Books,
Use Interface for defining book details
*/

interface BookDetails {
  title: string;
  author: string;
  price: number;
}

class Book {
    //book details as array of objects.
  private static inventory: BookDetails[] = [];

  static addBook(book: BookDetails): void {
    this.inventory.push(book);
  }

  static searchByTitle(title: string): BookDetails[] {
    return this.inventory.filter((book) => book.title.includes(title));
  }

  static viewInventory(): void {
    console.log("Current Inventory:");
    this.inventory.forEach((book) =>
      console.log(`${book.title} by ${book.author} - $${book.price}`)
    );
  }
}

// Example Usage
Book.addBook({ title: "TypeScript Basics", author: "Alice", price: 29.99 });
Book.addBook({ title: "Learn TypeScript", author: "Bob", price: 19.99 });
Book.viewInventory();
console.log("Search Results:", Book.searchByTitle("TypeScript"));
