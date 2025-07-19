import { describe, test, expect } from '@jest/globals';

import { getUserById } from '../../src/js-foundation/03-callbacks'



describe('js-foundation: 03-callbacks', () => {
    test('getUserById should return an error if user is not found', (done) => {

        const id = 10;
        
        getUserById( id, (error, user) => {
            expect( error ).toBe(`Usuario con id ${id} no encontrado`);
            expect( user ).toBeUndefined();

            done();
        })
    });

    test('getUserById should return Jhon Doe if id is 1', (done) => {
        const id = 1;

        getUserById( id, (error, user) => {


            expect( error ).toBeUndefined();
            expect( user ).toEqual({
                id: 1,
                name:'John Doe'
            });


            done();
        })
    });
});