import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile, } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';
import { describe, expect, test, beforeEach, afterEach, jest } from '@jest/globals';

describe('ServerApp', () => {

    let saveFile: jest.Mocked<SaveFile>;
    let createTable: jest.Mocked<CreateTable>;

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        fileDestination: 'test-destination',
        fileName: 'test-file'
    }

    // Creamos funciones simuladas para los casos de uso
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    })

    
    test('should create ServerApp instance', () => {

        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect( typeof ServerApp.run ).toBe('function');
    });


    test('should run ServerApp with options', ()=> {
        // const logSpy = jest.spyOn(console, 'log');
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute' );
        // const SaveFileSpy = jest.spyOn(SaveFile.prototype, 'execute' );


        // ServerApp.run(options);

        // expect(logSpy).toHaveBeenCalledWith('Server is running...');
        // expect(logSpy).toHaveBeenCalledTimes(2);
        // expect(logSpy).toHaveBeenCalledWith(`La tabla de ${options.base} fue creada correctamente.`);

        // expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        // expect(createTableSpy).toHaveBeenCalledTimes(1);

        // expect( SaveFileSpy ).toHaveBeenCalledTimes(1);
        // expect( SaveFileSpy ).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     fileDestination: options.fileDestination,
        //     fileName: options.fileName
        // })

    });

    test('should run with custom values mocked', () => {
        // Spies para console

        const logSpy = jest.spyOn(console, 'log')


        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute')
            .mockReturnValue('Mocked table content')
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute').mockReturnValue(true);

        ServerApp.run(options);

        expect(logSpy).toHaveBeenCalledWith('Server is running...');
        expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.fileDestination,
            fileName: options.fileName
        });


    });
});