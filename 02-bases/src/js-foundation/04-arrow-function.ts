interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Fernando'
    },
    {
        id: 2,
        name: 'Melissa'
    }
];

export const getUserById = (id: number, callback: (err?:string, user?:User) => void) => {
    const user = users.find((user) => user.id === id);

    if (!user) {
        return callback(`User with id ${id} not found`);
    }

    return callback(undefined, user);
}

// getUserById(1);

