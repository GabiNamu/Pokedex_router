import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';

class PokemonDetails extends Component {
  render() {
    const { match: { params: { id } }, pokemonList } = this.props;
    const pokemonId = pokemonList.filter((pokemon) => pokemon.id === +id);
    const { name, averageWeight, type, summary, foundAt } = pokemonId[0];
    return (
      <div>
        <h1>{`${pokemonId[0].name} details`}</h1>
        <div>
          <h3>{ name }</h3>
          <p>{ type }</p>
          <p>
            {
              `${averageWeight.value} ${averageWeight.measurementUnit}`
            }
          </p>
          <p>{ summary }</p>
          { foundAt.map((local) => (
            <div key={ local.location }>
              <p>{local.location}</p>
              <img src={ local.map } alt={ local.location } />
            </div>
          ))}
        </div>
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
