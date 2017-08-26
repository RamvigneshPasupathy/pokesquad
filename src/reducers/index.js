import {combineReducers} from 'redux';
import pokemons from './pokemonsReducer';
import fighters from './fightersReducer';

const rootReducer = combineReducers({
  pokemons,
  fighters
});

export default rootReducer;
