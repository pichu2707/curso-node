import { describe, expect, test } from '@jest/globals';
import { getId } from '../../src/plugins/get-id.plugin';

describe('uuid plugin', () => {

    test('should return a valid UUID', (done) => {

        const uuid = getId();
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);

        done();
    });
});