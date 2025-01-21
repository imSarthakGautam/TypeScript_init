/*
Union Types: Define full-time and part-time employees.
Interfaces: Create a structure for Employee.
Type Guards: Identify employee types.
Enums: Represent employment types.
*/

enum EmploymentType {
    FullTime = "FULL_TIME",
    PartTime = "PART_TIME",
  }
  
  interface Employee {
    id: number;
    name: string;
    hourlyRate: number;
    hoursWorked: number;
    type: EmploymentType;
  }
  
  const employees: Employee[] = [];
  
  function addEmployee(employee: Employee): void {
    employees.push(employee);
  }
  
  function calculatePayroll(): void {
    employees.forEach((emp) => {
      const totalPay = emp.hourlyRate * emp.hoursWorked;
      console.log(`${emp.name} (${emp.type}): $${totalPay}`);
    });
  }
  
  // Example Usage
  addEmployee({ id: 1, name: "Alice", hourlyRate: 20, hoursWorked: 40, type: EmploymentType.FullTime });
  addEmployee({ id: 2, name: "Bob", hourlyRate: 15, hoursWorked: 20, type: EmploymentType.PartTime });
  calculatePayroll();
  