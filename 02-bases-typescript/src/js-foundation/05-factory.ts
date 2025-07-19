import { getAge, getId } from '../plugins/index';

interface BuildMakerPersonOptions {
    getId: () => string;
    getAge: (birthday: string) => number;
}

interface PersonOptions {
    name: string;
    birthday: string;
}


export const buildMakePerson = ({ getId, getAge}: BuildMakerPersonOptions) => {

    return ({ name, birthday }: PersonOptions) => {
    
    
        return  {
            id: getId(),
            name: name,
            birthday,
            age: getAge(birthday),
        }
    }
}

// const obj = { name: 'John', birthday: '1987-07-27' };

// const john = buildPerson(obj);
// console.log('console de factory: ',buildPerson(obj));