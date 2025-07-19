import { characters } from '../../src/js-foundation/02-destructuring';
import { describe, test, expect } from '@jest/globals';


describe('js-foundation: 02-destructuring', () => {

    test(' charactes should contain Flash, Superman', () => {

        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');

        const [flash, superman ] = characters;

        //Expecificamos que flash y superman sean los primeros dos elementos del array characters
        // expect(flash).toBe('Flash');
        // expect(superman).toBe('Superman');
    });

});