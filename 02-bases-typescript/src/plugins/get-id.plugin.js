

const getIdPlugin = require('uuid');

const getId = () => {
    if (!getIdPlugin) return new Error('UUID plugin is required');
    return getIdPlugin.v4();
}

module.exports = {
    getId,
};