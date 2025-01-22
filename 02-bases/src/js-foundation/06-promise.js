const getPokemonByIdOne = (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((response) => response.json())
        // .then(() => {
        //     throw new Error("Error")
        // })
        .then((pokemon) => pokemon.name);
}

// ASYNC AWAIT

const getPokemonById = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();

    // throw new Error("Error Pokemonv no existe");

    return pokemon.name;
}

module.exports = getPokemonById;
