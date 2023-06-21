const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');

// Function to prompt for team member details
function generateHTML(teamMembers) {
    // Generate HTML content here
    // You can use a template literal or a library like Handlebars.js
    
    // Example using a template literal:
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
      </head>
      <body>
        <h1>My Team</h1>
        ${generateTeamMemberCards(teamMembers)}
      </body>
      </html>
    `;
  
    // Write the generated HTML to a file
    fs.writeFile('./dist/team.html', html, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
  
  function generateTeamMemberCards(teamMembers) {
    // Generate HTML for each team member card
    // You can use a loop to iterate through the teamMembers array
    
    let cardsHTML = '';
    for (const member of teamMembers) {
      let roleSpecificInfo = '';
      if (member instanceof Manager) {
        roleSpecificInfo = `Office Number: ${member.officeNumber}`;
      } else if (member instanceof Engineer) {
        roleSpecificInfo = `GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a>`;
      } else if (member instanceof Intern) {
        roleSpecificInfo = `School: ${member.school}`;
      }
  
      const cardHTML = `
        <div>
          <h2>${member.getName()}</h2>
          <p>Role: ${member.getRole()}</p>
          <p>ID: ${member.getId()}</p>
          <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
          <p>${roleSpecificInfo}</p>
        </div>
      `;
  
      cardsHTML += cardHTML;
    }
  
    return cardsHTML;
  }
  
  module.exports = generateHTML;
  