const fs = require('fs');
const titlesstr = fs.readFileSync('problem-titles.txt').toString();
const titles = titlesstr.split('\n');

titles.forEach((title, i) => {
	titles[i] = titles[i].toLowerCase();
});

module.exports = titles;
