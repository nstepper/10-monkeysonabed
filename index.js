const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const teamMembers = [];

// Function to prompt for team member details
function promptTeamMember(role) {
  console.log(`Enter ${role}'s information:`);
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `Enter ${role}'s name:`,
      },
      {
        type: 'input',
        name: 'id',
        message: `Enter ${role}'s ID:`,
      },
      {
        type: 'input',
        name: 'email',
        message: `Enter ${role}'s email:`,
      },
      // Add specific role question(s) here
    ])
    .then((answers) => {
      // Create a new instance of the appropriate class based on role
      let teamMember;
      if (role === 'Manager') {
        teamMember = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      } else if (role === 'Engineer') {
        teamMember = new Engineer(answers.name, answers.id, answers.email, answers.github);
      } else if (role === 'Intern') {
        teamMember = new Intern(answers.name, answers.id, answers.email, answers.school);
      }

      teamMembers.push(teamMember);

      // Prompt to add more team members or generate HTML
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'action',
            message: 'What would you like to do next?',
            choices: ['Add another team member', 'Generate HTML'],
          },
        ])
        .then((choice) => {
          if (choice.action === 'Add another team member') {
            promptRole();
          } else {
            generateHTML(teamMembers);
            console.log('HTML generated successfully!');
          }
        });
    });
}

// Function to prompt for team member role
function promptRole() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Select the role for the team member:',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
    ])
    .then((answer) => {
      promptTeamMember(answer.role);
    });
}

// Start the application by prompting for the team manager's details
promptTeamMember('Manager');
