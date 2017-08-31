import React, {Component} from 'react';
import ListItem from './ListItem';
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
                <ListItem
                  key={pokemon.id}
                  pokemon={pokemon}
                  action={this.props.addPokemonById}
                  actionButton={'+'}
                />
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
