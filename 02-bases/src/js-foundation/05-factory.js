const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age')

const obj = {
    name: "Alexander",
    birthdate: "1994-09-02",
}

const buildPerson = ({name, birthdate}) => {
    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}

const jhon = buildPerson(obj);
console.log(jhon);
