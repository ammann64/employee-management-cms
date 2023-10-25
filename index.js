const inquirer = require('inquirer');
const mysql = require('mysql2');

const menuOptions = [
    {name: 'View all employees', value: 'viewEmployees'},
    {name: 'Add employee', value: 'addEmployee'},
    {name: 'Update employee role', value: 'updateRole'},
    {name: 'View all roles', value: 'viewRoles'},
    {name: 'Add role', value: 'addRole'},
    {name: 'View all departments', value: 'viewDepts'},
    {name: 'Add department', value: 'addDept'}
];

inquirer
    .prompt({type: 'list', name: 'mainMenu', message: 'What do you want to do?', choices: menuOptions})