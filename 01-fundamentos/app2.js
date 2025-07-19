const fs = require('fs');

const data = fs.readFileSync('Readme.md', 'utf8');
console.log(data);

const newData = data.replace(/React/ig, 'Angular');
fs.writeFileSync('Readme-Angular.md', newData, 'utf8');