import { test, describe, expect } from '@jest/globals'
import { getPokemonById } from '../../src/js-foundation/06-promesas';


describe('js-foundation - 06-promesas', () => {



    test('getPokemonById should return a pokemon name', async () => {

        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);
        expect( pokemonName ).toBe('bulbasaur');

    });

    test('should return an error if the pokemon does not exist', async () => {

        const pokemonId = 9999999999;
        await expect( getPokemonById(pokemonId) )
        .rejects.toThrow('El pokemon no existe');

    });
});