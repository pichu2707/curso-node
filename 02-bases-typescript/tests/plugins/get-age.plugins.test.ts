import { describe, expect, jest, test } from '@jest/globals'
import { getAge } from '../../src/plugins/get-age.plugin';


describe('plugins/get-age.plugins', () => {

    test('getAge() should return the age of a person', () => {

        const birthday = '1984-07-27';
        const age = getAge(birthday);

        const calculateAge = new Date().getFullYear() - new Date(birthday).getFullYear();

        expect(age).toBe(calculateAge);
    });

    test('getAge() should return 0 if the birthday is today', () => {

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthday = '1984-07-27';
        const age = getAge(birthday);

        expect( age ).toBe(0);
        console.log(spy);
    });
})