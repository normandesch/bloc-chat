const inquirer = require('inquirer');
const dateFormat = require('dateformat');

const MenuController = require('./controllers/MenuController');
 const menu = new MenuController();

 menu.clear();
 menu.main();
