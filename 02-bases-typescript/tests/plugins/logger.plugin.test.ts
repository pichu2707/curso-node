import { describe, expect, jest, test } from '@jest/globals';
import { buildLogger, logger as wistonLogger } from '../../src/plugins/logger.plugin';
import { level } from 'winston';

describe('plugins/loggerPlugin()', () => {

    test('Buildlogger should retrurn a function logger', () => {
       const logger = buildLogger('test');
       
       expect( typeof logger.log ).toBe('function');
       expect( typeof logger.error ).toBe('function');
    });

    test('logger.log should log a message', () => {

        const winstonLoggerMock = jest.spyOn(wistonLogger, 'log');
        const message = 'test message';
        const service = 'test Service';

        const logger = buildLogger(service);
        logger.log(message);

    expect( winstonLoggerMock ).toHaveBeenCalled();
    expect.objectContaining(
        {
            level: 'info',
            message,
            service,
        }
    );
    });
});