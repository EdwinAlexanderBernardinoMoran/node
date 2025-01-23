// const { emailTemplate} = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const {getUserById} = require('./js-foundation/04-arrow-function');
// const { getAge, getUuid } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promise');
const { buildLogger } = require('./plugins');

// console.log(emailTemplate);

// const id = 3;
// getUserById(id, (error, user) => {
        
//     if (error)  throw new Error(error);
//     console.log('User found:', user);
// });


// Clase 5 - Factory Function
// const makePerson = buildMakePerson({getUuid, getAge});

// const obj = {
//     name: "Alexander",
//     birthdate: "1994-09-02",
// }

// const john = makePerson(obj);
// console.log(john);

// Clase 6 - Promises

// getPokemonById(1)
//     .then(pokemon => console.log(pokemon))
//     .catch(error => console.error('Porfavor intente de nuevo', error))
//     .finally(() => console.log('Finalizado'));


// Clase 7 - Logger Plugin

const logger = buildLogger('app.js');
logger.log('Hola mundo');
 

