const users = [
    {
        id: 1,
        name: 'Fernando'
    },
    {
        id: 2,
        name: 'Melissa'
    }
];

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    if (!user) {
        return callback(`User with id ${id} not found`);
    }

    return callback(null, user);
}

// getUserById(1);

module.exports = {
    getUserById
}

