import { describe, expect, test } from '@jest/globals';
import { httpClientPlugin as http } from '../../src/plugins/http-client.plugin';

describe('plugins/httpClientPlugin()', () => {

    test('should get return data from a URL', async () => {

        const url = await http.get('https://jsonplaceholder.typicode.com/todos/1');

        expect( url ).toEqual({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: expect.any(Boolean),

        });
            });

    test('http-client-plugin should have a get method', () => {

            console.log( typeof http.post );
            const methods = Object.keys(http);
            expect(methods).toContain('get');
            expect(methods).toContain('put');
            expect(methods).toContain('delete');

        });

});