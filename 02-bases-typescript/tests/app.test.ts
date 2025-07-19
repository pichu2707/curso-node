
import {describe, expect, test} from '@jest/globals';

describe('App', () => {
    
    test('Debería ser 30', () => {

        // 1. Arrange
        const num1 = 10;
        const num2 = 20;

        // 2. Act

        const result = num1 + num2 + 5;


        //3. Asserts
        expect(result).toBe(40);


    });
});

