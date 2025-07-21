import { describe, expect, test, afterEach } from '@jest/globals';
import { SaveFile } from './save-file.use-case';
import fs from 'fs';

describe('SaveFile Use Case', () => {

    // beforeEach(() => {
    //     // Limpiar el directorio de prueba antes de cada test
    //     fs.rmSync('test-outputs', { recursive: true });
    // });

    afterEach(() => {
        // Limpiar el directorio de prueba después de cada test
        fs.rmSync('test-outputs', { recursive: true });
    });

    test('should save file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'test-outputs/table.txt';
        const options = {
            fileContent: 'test content',
            fileDestination: 'test-outputs',
        }
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
        const result = saveFile.execute(options);

            expect( result ).toBe( true );
            expect( fileExists ).toBe( true );
            expect( fileContent ).toBe( options.fileContent );
            expect( fileContent)
    });
});