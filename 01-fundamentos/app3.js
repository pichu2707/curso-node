const fs = require('fs');

const content = fs.readFileSync('Readme.md', 'utf8');

const wordCount = content.split(' ');

// const palabras = wordCount.filter(word => word.toLowerCase().includes('react')
// ).length;

const reactWords = content.match(/react/gi ?? []).length;


console.log('Palabras en las que aparece react son: ',reactWords);
