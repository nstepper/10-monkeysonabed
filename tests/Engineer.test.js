const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('should create an Engineer object', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'github');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('john@example.com');
    expect(engineer.github).toBe('github');
  });

  it('should return the GitHub username of the engineer', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'github');

    expect(engineer.getGithub()).toBe('github');
  });

  it('should return the role of the engineer', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'github');

    expect(engineer.getRole()).toBe('Engineer');
  });
});
