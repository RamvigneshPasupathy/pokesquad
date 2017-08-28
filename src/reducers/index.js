import {combineReducers} from 'redux';
import pokemons from './pokemonsReducer';
import fighters from './fightersReducer';
import colors from './colorsReducer';

const rootReducer = combineReducers({
  pokemons,
  fighters,
  colors
});

export default rootReducer;
