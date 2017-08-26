import {ADD_POKEMON, REMOVE_POKEMON} from '../actions';
import {createPokemon} from './helpers';

function fighters(state = [], action) {
  switch (action.type) {
    case ADD_POKEMON:
      return [...state, createPokemon(action.id)];
    case REMOVE_POKEMON:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export default fighters;
