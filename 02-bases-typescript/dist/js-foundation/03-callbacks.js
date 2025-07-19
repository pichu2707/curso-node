"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
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
function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        return callback(`Usuario con id ${id} no encontrado`);
    }
    return callback(undefined, user);
}
