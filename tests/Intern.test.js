const Intern = require('../lib/Intern').default;

describe('Intern', () => {
  it('should create an Intern object', () => {
    const intern = new Intern('John', 1, 'john@example.com', 'school');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('john@example.com');
    expect(intern.school).toBe('school');
  });

  it('should return the school name of the intern', () => {
    const intern = new Intern('John', 1, 'john@example.com', 'school');

    expect(intern.getSchool()).toBe('school');
  });

  it('should return the role of the intern', () => {
    const intern = new Intern('John', 1, 'john@example.com', 'school');

    expect(intern.getRole()).toBe('Intern');
  });
});
