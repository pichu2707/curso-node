

function cities() {
    const fs = require('fs');
    const text = fs.readFileSync('text.txt');

    const range = text.includes('range-3');
    
    if(!range || range === false) {
        return 'range-3 not found';
    } else {
        console.log('Aquí iría la variable');}
    return range
}
console.log(cities());