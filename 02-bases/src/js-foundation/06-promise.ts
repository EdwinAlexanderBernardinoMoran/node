const { http } = require('../plugins')

export const getPokemonByIdOne = (id: string|number): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((response) => response.json())
        // .then(() => {
        //     throw new Error("Error")
        // })
        .then((pokemon) => pokemon.name);
}

// ASYNC AWAIT

export const getPokemonById = async (id: string|number):  Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);


    // throw new Error("Error Pokemonv no existe");

    return pokemon.name;
}
