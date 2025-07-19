
const getAgetPlugin = require('get-age');


const getAge = (birthday) => {
    if ( !birthday ) return new Error('Birthday is required');

    return getAgetPlugin(birthday);
}

module.exports = {
    getAge,
};