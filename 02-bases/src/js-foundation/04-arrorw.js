const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

const getUserById = ( id, callbacks ) => {
    const user = users.find( user => user.id === id );

    if ( !user ) {
        return callbacks(`Usuario con id ${id} no encontrado`);
    }

    return callbacks(null, user);
}

module.exports = {
    getUserById,
}