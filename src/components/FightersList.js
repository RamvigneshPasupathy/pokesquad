import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {removePokemonById} from '../actions';

class FightersList extends Component {
  render() {
    return (
      <div>
        <h4>My Squad</h4>
        <ul className='list-group'>
          {
            this.props.fighters.map(fighter => {
              return (
                <li key={fighter.id} className='list-group-item'>
                  <div className='list-item'>{fighter.name}</div>
                  <div className='list-item right-button' onClick={()=>this.props.removePokemonById(fighter.id)}>x</div>
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
    fighters: state.fighters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removePokemonById}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FightersList);
