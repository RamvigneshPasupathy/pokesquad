import React, {Component} from 'react';
import PokemonList from './PokemonList';
import FightersList from './FightersList';
import SquadStats from './SquadStats';
import '../styles/index.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1><b>Poke Squad</b></h1>
        <div className='col-md-4'>
          <PokemonList/>
        </div>
        <div className='col-md-4'>
          <FightersList/>
        </div>
        <div className='col-md-4'>
          <SquadStats/>
        </div>
      </div>
    );
  }
}
