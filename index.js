var chalk = require("chalk");

var message = chalk.bold.bgRed("Hello ") + chalk.yellow.bgCyan("World");
console.log(message);