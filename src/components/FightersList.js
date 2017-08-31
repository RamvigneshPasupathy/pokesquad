import React, {Component} from 'react';
import ListItem from './ListItem';
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
                <ListItem
                  key={fighter.id}
                  pokemon={fighter}
                  action={this.props.removePokemonById}
                  actionButton={'x'}
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
    fighters: state.fighters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removePokemonById}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FightersList);
