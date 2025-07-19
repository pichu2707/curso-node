"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const http_client_plugin_1 = require("../plugins/http-client.plugin");
const getPokemonById = async (id) => {
    try {
        const url = (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await http_client_plugin_1.httpClientPlugin.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw new Error('El pokemon no existe');
    }
    // fetch(url).then( (response ) => {
    //     response.json().then( ( pokemon ) => {
    //         callback( pokemon.name );
    //     });
    // });
    //return 'Pokemon';
    // Segunda forma con las promesas
    // return fetch(url)
    // .then( (response ) => response.json() )
    // // .then( () => {throw new Error('El pokemon no existe') })
    // .then( ( pokemon ) => pokemon.name );
    // con async/await
    // const response = await fetch( url );
    // const pokemon = await response.json();
    //throw new Error('El pokemon no existe');
};
exports.getPokemonById = getPokemonById;
