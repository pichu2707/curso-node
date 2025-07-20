import yargs, { options } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
// Configuración de los argumentos de la línea de comandos
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: 'Base de la tabla de multiplicar',
})
.option('l', {
    alias: 'limite',
    type: 'number',
    default: 10,
    description: 'Límite de la tabla de multiplicar',
    }
)
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    description: 'Muestra la tabla de multiplicar en consola',
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    description: 'Directorio donde se guardará el archivo de la tabla de multiplicar',
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    description: 'Nombre del archivo donde se guardará la tabla de multiplicar',
})
// Configuración de los argumentos de la línea de comandos
.check((argv, options) => {

    if ( argv.b < 1 ) throw 'Error: Debes ingresar un número positivo para la base mayor a 1';


    return true;
})
// Parsear los argumentos de la línea de comandos
.parseSync()