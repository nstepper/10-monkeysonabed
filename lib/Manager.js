// Import the Employee class from the Employee.js file
import Employee, { getName, getId, getEmail, getRole as _getRole } from './Employee.js';

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
// Access the properties and methods of the employee object
console.log('Name:', getName());
console.log('ID:', getId());
console.log('Email:', getEmail());
console.log('Role:', _getRole());
// Export the Manager class
export default Manager;
