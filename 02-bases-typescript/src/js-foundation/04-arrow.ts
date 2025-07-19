interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

export const getUserById = ( id: number, callback: ( error?: string, user?: User ) => void ) => {
    const user = users.find( user => user.id === id );

    if ( !user ) {
        return callback(`Usuario con id ${id} no encontrado`);
    }

    return callback(undefined, user);
}
