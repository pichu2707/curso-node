

// Con el metodo require() podemos importar módulos de Node.js o archivos locales.
//const templateExport = require('./js-foundation/01-template');
//console.log('Este es el console log de 01-template: ', templateExport.emailTemplate);

//con desestructuración
// const { emailTemplate } = require('./js-foundation/01-template');
// console.log('Este es el console log de 01-template desestructurado: ', emailTemplate);


// require('./js-foundation/02-destructuring');

// ! Referencia a las callbacks
// const { getUserById } = require('./js-foundation/03-callbacks');

// const id = 3;

// getUserById( id, function( error, user) {
//     // Si hay un error, lanzamos una excepción
//     if ( error ) {
//         // En un entorno real, podríamos manejar el error de manera diferente, como registrar el error o enviar una respuesta al usuario.
//         throw new Error(error);
//     }

//     console.log('User fetched successfully: ', user);
// } );

// //Ejemplo 4
// const { getUserById } = require('./js-foundation/04-arrorw');

// const id = 1;

// getUserById( id, function( error, user) {
//     // Si hay un error, lanzamos una excepción
//     if ( error ) {
//         // En un entorno real, podríamos manejar el error de manera diferente, como registrar el error o enviar una respuesta al usuario.
//         throw new Error(error);
//     }

//     console.log('User fetched successfully: ', user);
// } );

// ! Referencia a las Factury y uso
// const { getId, getAge } = require('./plugins/');

// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getId, getAge });

// const obj = { name: 'Javi', birthday: '1987-07-27' };

// const jhon = makePerson( obj );

// console.log('console de App: ', { jhon });

// ! Referencia a las Promesas

// const getPokemonById = require('./js-foundation/06-promesas');

// getPokemonById(1)
//     .then(( pokemon ) => console.log({ pokemon }))
//     .catch( ( error ) => console.error('Por favor ingrese un ID válido', error.message) )
//     .finally( () => console.log('Petición finalizada') );

// tocken de acceso 
// peticiones públicas

// ! Referencia logger

const { buildLogger } = require('./plugins/');

const logger = buildLogger('app.js');

logger.log('Hola Mundo');
logger.error('Esto es algo malo');