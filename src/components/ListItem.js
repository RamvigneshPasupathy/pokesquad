import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListItem extends Component {
  render() {
    let pokemon = this.props.pokemon;
    return (
      <li
        key={pokemon.id} className='list-group-item'
        style={{backgroundColor: this.props.colors[pokemon.type[0]]}}
      >
        <div className='list-item'>
          <b>{pokemon.name}</b>
          <sub> CP({pokemon.maxCP})</sub>
        </div>
        <div className='list-item right-button' onClick={()=>this.props.action(pokemon.id)}>
          {this.props.actionButton}
        </div>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors
  };
}

export default connect(mapStateToProps, null)(ListItem);
