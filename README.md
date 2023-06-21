# Team Profile Generator

This command-line application allows you to generate a team profile webpage by providing information about your software engineering team. The generated webpage displays the basic information of each team member, including their names, IDs, email addresses, and specific details based on their roles.

The application utilizes Node.js and the Inquirer package to collect user input and Jest for running unit tests.

## Installation

To install the necessary dependencies, run the following command in your project folder:

- npm install

This will install the required dependencies, including Inquirer and Jest.

## Usage

To start the application, run the following command:

- node index.js

You will be prompted to enter the information for the team manager, such as name, employee ID, email address, and office number. After providing the manager's details, you will have the option to add engineers, interns, or finish building the team. Follow the prompts to enter the information for each team member.

Once you finish adding the team members, an HTML file named `team.html` will be generated in the `dist` directory. This file will display a nicely formatted team roster with the provided information.

## Testing

Unit tests have been implemented using the Jest framework. To run the tests, use the following command:

- npm test

This will execute the test scripts and display the test results.




