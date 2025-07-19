
import { http } from '../plugins/';

export const getPokemonById = async ( id: string | number ): Promise<string> => {

    const url = (`https://pokeapi.co/api/v2/pokemon/${ id }`)

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

    const pokemon = await http.get(url);

    console.log(pokemon.name);

    return pokemon.name;
}
