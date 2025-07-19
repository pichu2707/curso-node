
const getAgetPlugin = require('get-age');


export const getAge = (birthday: string) => {

    // console.log({ currentYear: new Date(birthday).getFullYear() });    

    return getAgetPlugin(birthday);
}
