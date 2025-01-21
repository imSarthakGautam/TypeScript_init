/*
Classes: Create a Task class.
Readonly Properties: For task IDs.
Union Types: Represent task states (Pending or Completed).
Generics: Manage a list of tasks.
*/

class Task {
    private static idCounter = 0;
    public readonly id: number;
    public status: "Pending" | "Completed";
  
    constructor(public description: string) {
      this.id = ++Task.idCounter;
      this.status = "Pending";
    }
  
    markAsDone(): void {
      this.status = "Completed";
    }
  }
  
  class TodoList {
    private tasks: Task[] = [];
  
    addTask(description: string): void {
      this.tasks.push(new Task(description));
    }
  
    markTaskAsDone(id: number): void {
      const task = this.tasks.find((task) => task.id === id);
      if (task) task.markAsDone();
    }
  
    viewTasks(): void {
      console.log("To-Do List:");
      this.tasks.forEach((task) =>
        console.log(`[${task.status}] ${task.id}: ${task.description}`)
      );
    }
  }
  
  // Example Usage
  const todo = new TodoList();
  todo.addTask("Learn TypeScript");
  todo.addTask("Build a project");
  todo.viewTasks();
  todo.markTaskAsDone(1);
  todo.viewTasks();
  