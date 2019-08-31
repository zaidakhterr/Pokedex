import React, { Component } from 'react';
import './styles/Pokedex.scss';

import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    const { pokemons, exp, isWinner } = this.props;

    return (
      <div className='Pokedex'>
        <h1 className={isWinner ? 'Win' : 'Lose'}>
          {isWinner ? 'Winning Hand' : 'Losing Hand'}
        </h1>
        <h4>TOTAL EXPERIENCE: {exp}</h4>
        <div className='Pokedex-cards'>
          {pokemons.map(item => (
            <Pokecard pokemon={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
