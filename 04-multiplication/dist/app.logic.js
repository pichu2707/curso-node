"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Creación de la variable para almacenarlo en un .txt
let outputMessage = '';
// creacíon de la tabla de multiplicar del 5
const multiplicar = 10;
const table = 5;
const headerMessage = () => {
    const separate = ('='.repeat(40));
    const title = `Tabla de multiplicar del ${table}`;
    return `${separate}\n${title}\n${separate}\n`;
};
for (let i = 0; i <= multiplicar; i++) {
    outputMessage += `${table} x ${i} = ${table * i}\n`;
    // Imprimir en consola
    console.log(`${table} x ${i} = ${table * i}`);
}
outputMessage = headerMessage() + outputMessage;
console.log(outputMessage);
const outputPath = 'outputs';
//Creamos la carpeta outputs si no existe
if (!fs_1.default.existsSync('outputs')) {
    fs_1.default.mkdirSync('outputs');
    console.log('Carpeta "outputs" creada.');
}
else {
    console.log('La carpeta "outputs" ya existe.');
}
// Guardar el resultado en un archivo .txt
fs_1.default.writeFile(`${outputPath}/table-${table}.txt`, outputMessage, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    }
    else {
        console.log(`Tabla de multiplicar del ${table} guardada en outputs/table-${table}.txt`);
    }
});
