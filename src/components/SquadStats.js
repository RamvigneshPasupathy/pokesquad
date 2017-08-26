import React, {Component} from 'react';
import {connect} from 'react-redux';

const NA = {
  id: 0,
  name: 'NA'
}

class SquadStats extends Component {

  strongestPokemon() {
    let fighters = [...this.props.fighters];
    let n = fighters.length - 1;
    let pokemon = fighters.length > 0 ?
    fighters.sort((a, b) => a.maxCP - b.maxCP)[n] : NA;
    return pokemon;
  }

  weakestPokemon() {
    let fighters = [...this.props.fighters];
    let n = 0;
    let pokemon = fighters.length > 0 ?
    fighters.sort((a, b) => a.maxCP - b.maxCP)[n] : NA;
    return pokemon;
  }

  render() {
    return (
      <div>
        <h4>SquadStats</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Strongest Pokemon: {this.strongestPokemon().name} </b>
          </li>
          <li className='list-group-item'>
            <b>Weakest Pokemon: {this.weakestPokemon().name}</b>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state: ', state)
  return {
    fighters: state.fighters
  };
}

export default connect(mapStateToProps, null)(SquadStats);
