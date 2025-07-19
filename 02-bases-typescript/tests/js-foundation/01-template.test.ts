import { describe, test, expect } from '@jest/globals';
import { emailTemplate } from '../../../02-bases-typescript/src/js-foundation/01-template';


describe('js-foundation/01-template.ts', () => {

    test('email should be valid', () => {

        expect(emailTemplate).toContain('Hi, ');
    });

    test(' emailTemplate should containd {{name}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/);

        expect(emailTemplate).toContain('{{name}}');

        });
});