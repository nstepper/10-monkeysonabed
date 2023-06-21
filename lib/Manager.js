// Reference the Employee class from the Employee.js file
const Employee = require('./Employee.js');


// Define the Manager class as a subclass of Employee
class Manager extends Employee {
  // Constructor function to initialize the Manager object
  constructor(name, id, email, officeNumber) {
    // Call the super() method to call the constructor of the Employee class and set its properties
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Method to get the office number of the manager
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Method to override the getRole() method of the Employee class and return the role as 'Manager'
  getRole() {
    return 'Manager';
  }
}
// Instantiate an Employee object
const employee = new Employee('John Doe', 123, 'john@example.com');

// Instantiate a Manager object
const manager = new Manager('Jane Smith', 456, 'jane@example.com', '1001');

// Access the properties and methods of the employee object
console.log('Name:', employee.getName());
console.log('ID:', employee.getId());
console.log('Email:', employee.getEmail());
console.log('Role:', employee.getRole());

// Access the properties and methods of the manager object
console.log('Name:', manager.getName());
console.log('ID:', manager.getId());
console.log('Email:', manager.getEmail());
console.log('Office Number:', manager.getOfficeNumber());
console.log('Role:', manager.getRole());

// Export the Manager class
module.exports = Manager;