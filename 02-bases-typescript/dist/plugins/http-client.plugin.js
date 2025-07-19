"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
const axios = require('axios');
exports.httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
        // const response = await fetch( url );
        // return await response.json();
    },
    post: async (url, body) => {
        throw new Error('Method not implemented.');
    },
    put: async (url, body) => {
        throw new Error('Method not implemented.');
    },
    delete: async (url) => {
        throw new Error('Method not implemented.');
    },
};
