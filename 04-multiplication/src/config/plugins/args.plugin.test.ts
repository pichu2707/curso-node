import { describe, expect, test, jest, beforeEach } from '@jest/globals';

// Esto lo utilizamos para simular los argumentos de la línea de comandos
const runCommand = async( args: string[] ) => {
    process.argv = [...process.argv, ...args];

    const { yarg } = await import('./args.plugin');

    return yarg;
}



describe('Test args.plugins', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules(); // Reseteamos los módulos para que no se acumulen los cambios
    });

    test('should return default values', async () => {

        const argv = await runCommand(['-b', '5']);
        console.log(argv);

        // Verificamos que los valores por defecto se hayan asignado correctamente
        expect( argv ).toEqual(expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        d: './outputs',
        n: 'multiplication-table',


        }));
    });

    test('should return configuracion personalizada', async () => {

        const argv = await runCommand(['-b', '5', '-l', '20', '-s', 'true', '-d', 'test-outputs', '-n', 'custom-table-name']);

        expect( argv ).toEqual(expect.objectContaining({
            b: 5,
            l: 20,
            s: true,
            d: 'test-outputs',
            n: 'custom-table-name',
        }));    
    });

});
