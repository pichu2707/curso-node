

// const { getId, getAge } = require('../plugins/');

const buildMakePerson = ({ getId, getAge}) => {

    return ({ name, birthday }) => {
    
    
        return  {
            id: getId(),
            name: name,
            birthday: birthday,
            age: getAge(birthday),
        }
    }
}

module.exports = {
    buildMakePerson,
};

// const obj = { name: 'John', birthday: '1987-07-27' };

// const john = buildPerson(obj);
// console.log('console de factory: ',buildPerson(obj));