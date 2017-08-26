export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';

export function addPokemonById(id) {
  const action = {
    type: ADD_POKEMON,
    id: id
  };
  return action;
}

export function removePokemonById(id) {
  const action = {
    type: REMOVE_POKEMON,
    id: id
  };
  return action;
}
