"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgetPlugin = require('get-age');
const getAge = (birthday) => {
    // console.log({ currentYear: new Date(birthday).getFullYear() });    
    return getAgetPlugin(birthday);
};
exports.getAge = getAge;
