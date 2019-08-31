import React, { Component } from 'react';
import './styles/Pokecard.scss';

// const POKE_API =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padTo3 = num => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    const { pokemon } = this.props;
    const { id, name, type, base_experience } = pokemon;

    return (
      <div className='Pokecard'>
        <h2 className='Pokecard-title'> {name} </h2>
        <div className='Pokecard-image'>
          <img src={`${POKE_API}${padTo3(id)}.png`} alt={name} />
        </div>
        <p>Type: {type}</p>
        <p>EXP: {base_experience} </p>
      </div>
    );
  }
}

export default Pokecard;
