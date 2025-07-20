import fs from "fs";
import { yarg } from './config/plugins/args.plugin';

// Creación de la variable para almacenarlo en un .txt
let outputMessage = '';
// creacíon de la tabla de multiplicar del 5
const multiplicar: number = yarg.l; //No le pasamos argumento porque ya le hemos programado el 10 por defecto
const table: number = yarg.b; // tiene que ser mayor a 1 
const headerMessage = () => {
    const separate = ('='.repeat(40));
    const title = `Tabla de multiplicar del ${table}`;
    return `${separate}\n${title}\n${separate}\n`;
}

for ( let i = 0; i <= multiplicar; i++ ) {
    outputMessage += `${table} x ${i} = ${table * i}\n`;
}

outputMessage = headerMessage() + outputMessage;
if (yarg.s) {
    // Si el argumento show es true, muestra la tabla en consola
    console.log(outputMessage);
}

const outputPath: string = 'outputs';

//Creamos la carpeta outputs si no existe
if (!fs.existsSync('outputs')) {
    fs.mkdirSync('outputs');
    console.log('Carpeta "outputs" creada.');
}

// Guardar el resultado en un archivo .txt
fs.writeFile(`${outputPath}/table-${table}.txt`, outputMessage, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log(`Tabla de multiplicar del ${table} guardada en outputs/table-${table}.txt`);
    }
});