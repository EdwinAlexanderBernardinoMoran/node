const obj = {
    name: "Alexander",
    birthdate: "1994-09-02",
}

const buildPerson = ({name, birthdate}) => {
    return {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    }
}

const jhon = buildPerson(obj);
console.log(jhon);
