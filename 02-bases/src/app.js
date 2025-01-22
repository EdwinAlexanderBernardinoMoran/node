// const { emailTemplate} = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const {getUserById} = require('./js-foundation/04-arrow-function');
const { getAge, getUuid } = require('./plugins');
const { buildMakePerson } = require('./js-foundation/05-factory');

// console.log(emailTemplate);

// const id = 3;
// getUserById(id, (error, user) => {
        
//     if (error)  throw new Error(error);
//     console.log('User found:', user);
// });

const makePerson = buildMakePerson({getUuid, getAge});

const obj = {
    name: "Alexander",
    birthdate: "1994-09-02",
}

const john = makePerson(obj);
console.log(john);
