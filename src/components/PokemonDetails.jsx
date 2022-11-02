import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';

class PokemonDetails extends Component {
  render() {
    const { match: { params: { id } }, pokemonList } = this.props;
    const pokemonId = pokemonList.filter((pokemon) => pokemon.id === +id);
    console.log(pokemonId);
    return (
      <div>
        <h1>{`${pokemonId[0].name} details`}</h1>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  pokemonList: PropTypes.arrayOf(pokemonType).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default PokemonDetails;
