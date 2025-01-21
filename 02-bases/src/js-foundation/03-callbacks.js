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

function getUserById(id, callback)
{
    const user = users.find(function(user){
        return user.id === id;
    });

    if (!user) {
        return callback(`User with id ${id} not found`);
    }

    return callback(null, user);
}

// getUserById(1);

module.exports = {
    getUserById
}

