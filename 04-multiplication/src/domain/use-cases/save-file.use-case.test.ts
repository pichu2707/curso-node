import { describe, expect, test, afterEach, jest } from '@jest/globals';
import { SaveFile } from './save-file.use-case';
import fs, { write, writeFile } from 'fs';


describe('SaveFile Use Case', () => {

    
    const customOptions = {
        fileContent: 'test content',
        fileDestination: 'test-outputs',
        fileName: 'custom-table-name',
    }
    
    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    
    afterEach(() => {
        // Limpiar el directorio de prueba después de cada test
        const outputFolderExists = fs.existsSync('test-outputs');
        if (outputFolderExists) fs.rmSync('test-outputs', { recursive: true });

        const customOutputFolderExists = fs.existsSync(customOptions.fileDestination);
        if( customOutputFolderExists ) fs.rmSync(customOptions.fileDestination, { recursive: true });
    });

    test('should save file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test constent',
        }

        const result = saveFile.execute(options);
        
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
        
        
            expect( result ).toBe( true );
            expect( fileExists ).toBe( true );
            expect( fileContent ).toBe( options.fileContent );
            expect( fileContent).toBe(  options.fileContent );
    });


    test('should return false if direcotry could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error('Este es el error que sale del SpyOn');
        });

        const result = saveFile.execute(customOptions);

        expect( result ).toBe( false );

        mkdirSpy.mockRestore();
    });

    test('should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
            throw new Error('Este es el error que sale del SpyOn');
        });

        const result = saveFile.execute({ fileContent: 'test consent' });
        
        expect( result ).toBe( false );

        writeFileSpy.mockRestore();
    });
});