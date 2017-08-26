import pokemonsJSON from '../data/pokemons.json';

function createPokemon(id) {
  let pokemon = pokemonsJSON.find(c => c.id === id);
  return pokemon;
}

export {
  createPokemon
}
