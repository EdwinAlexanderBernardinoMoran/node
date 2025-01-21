// const { v4: uuidv4 } = require('uuid');
// const getAge = require('get-age')
const { getUuid } = require('../plugins/get-uuid.plugin');
const { getAge } = require('../plugins/get-age.plugin');

const obj = {
    name: "Alexander",
    birthdate: "1994-09-02",
}

const buildPerson = ({name, birthdate}) => {
    return {
        id: getUuid(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}

const jhon = buildPerson(obj);
console.log(jhon);
