
const axios = require('axios');

export const httpClientPlugin = {

        get: async ( url: string ) => {
            const { data } = await axios.get( url );
            return data;


            // const response = await fetch( url );
            // return await response.json();
        },

        post: async( url: string, body: any ) => {
            throw new Error('Method not implemented.');
        },
            
        put: async( url: string, body: any ) => {
            throw new Error('Method not implemented.');
        },
            
        delete: async( url: string ) => {
            throw new Error('Method not implemented.');
        },
           
};

