import { CreateTable } from './create-table.use-case';
import { describe, expect, test } from '@jest/globals';


describe('CreateTable Use Case', () => {

    test('should create table with default vaues', () => {

        const createTable = new CreateTable();
        
        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n').length;

        console.log('El console log de table ',table);

        expect( createTable ).toBeInstanceOf( CreateTable );
        expect( table ).toContain('2 x 0 = 0');
        expect( table ).toContain('2 x 1 = 2');
        expect( rows ).toBe(14);

    });

    test('should create table with custom values', () => {

        const createTable = new CreateTable();
        const base = 3;
        const limit = 5;
        const table = createTable.execute({ base: 3, limit: 5 });
        const rows = table.split('\n').length;

        expect( table ).toContain(base.toString());
        expect( rows ).toBeLessThanOrEqual( limit + 4 ); // 4 por las lineas de header que hemos implementado


    });
});