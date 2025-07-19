import { describe, test, expect } from '@jest/globals';
import { buildMakePerson } from '../../src/js-foundation/05-factory';


describe('js-foundation - 05-factory', () => {

    const getId = () => '123';
    const getAge = () => 40;

    test('buildMakePerson should return a function', () => {
        
        const makePerson = buildMakePerson({ getId, getAge });
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => {

        const makePerson = buildMakePerson({ getId, getAge });
        const johnDoe = makePerson({ name: 'John Doe', birthday: '1984-07-27' });

        console.log('console de factory: ', johnDoe);
    });
});