const { default: inquirer } = require('inquirer');
require('colors');

const opts = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Pon tu opcion',
    choices: ['abc', 'def', 'ghi']
  }
];


const inquireMeny = async () => {

  const opt = await inquirer.prompt([opts]);

  return opt;


}

module.exports = {
  inquireMeny
}








