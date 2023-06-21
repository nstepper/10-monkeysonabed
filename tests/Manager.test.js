const Manager = require('../lib/Manager').default;

describe('Manager', () => {
  it('should create a Manager object', () => {
    const manager = new Manager('John', 1, 'john@example.com', '123');

    expect(manager.name).toBe('John');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('john@example.com');
    expect(manager.officeNumber).toBe('123');
  });

  it('should return the office number of the manager', () => {
    const manager = new Manager('John', 1, 'john@example.com', '123');

    expect(manager.getOfficeNumber()).toBe('123');
  });

  it('should return the role of the manager', () => {
    const manager = new Manager('John', 1, 'john@example.com', '123');

    expect(manager.getRole()).toBe('Manager');
  });
});
