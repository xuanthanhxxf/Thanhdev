const chalk = require('chalk');
const chalkercli = require("chalkercli");
module.exports = (data, option) => {
	const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ 𝐅𝐚𝐢𝐥 ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ 𝐅𝐚𝐢𝐥 ] » ') + data);
			break;
		case "load":
			console.log(color_one('[ 𝐅𝐚𝐜𝐞𝐡𝐨𝐨𝐤 𝐔𝐬𝐞𝐫 𝐍𝐞𝐰 ]') + color_two(data));
			break;
		default:
			console.log(color_one(`${option} » `) + color_two(data));
			break;
	}
}

module.exports.loader = (data, option) => {
	const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.red('[ XThanh ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ XThanh ] » ') + data);
			break;
		default:
			console.log(color_one(`[ XThanh ] » `) + color_two(data));
			break;
	}
}
module.exports.banner = (data) => {
	const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
	console.log(color(data));
}