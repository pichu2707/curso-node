"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getId, getAge }) => {
    return ({ name, birthday }) => {
        return {
            id: getId(),
            name: name,
            birthday,
            age: getAge(birthday),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'John', birthday: '1987-07-27' };
// const john = buildPerson(obj);
// console.log('console de factory: ',buildPerson(obj));
