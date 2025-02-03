import { getUuid } from '../plugins/get-uuid.plugin';
// const { v4: uuidv4 } = require('uuid');
// const getAge = require('get-age')
// const { getUuid } = require('../plugins/get-uuid.plugin');
// const { getAge } = require('../plugins/get-age.plugin');

// const obj = {
//     name: "Alexander",
//     birthdate: "1994-09-02",
// }

interface BuildMakerPersonOptions {
    getUuid: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({getUuid, getAge}: BuildMakerPersonOptions) => {
    return ({name, birthdate}: PersonOptions) => {
        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}

// const jhon = buildPerson(obj);
// console.log(jhon);
