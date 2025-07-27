import { describe, expect, test } from '@jest/globals';
import { jest } from '@jest/globals';
import { ServerApp } from './presentation/server-app';

describe(' Test App.ts', () => {

    test('should call Server.run with values ', async () => {

        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;

        process.argv = ['node', 'app.js', '--base=2', '--limit=10', '--showTable=false', '--destination=test-destination', '--name=test-file'];

        await import('./app');

        expect( serverRunMock ).toHaveBeenCalledWith({
            base: 2,
            limit: 10,
            showTable: false,
            fileDestination: 'test-destination',
            fileName: 'test-file'
    });
});

});