import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addPokemonById} from '../actions';

class PokemonList extends Component {
  render() {
    return (
      <div>
        <h4>Pokemons</h4>
        <ul className='list-group'>
          {
            this.props.pokemons.map(pokemon => {
              return (
                <li key={pokemon.id} className='list-group-item'>
                  <div className='list-item'>{pokemon.name}</div>
                  <div className='list-item right-button' onClick={()=>this.props.addPokemonById(pokemon.id)}>+</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addPokemonById}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
