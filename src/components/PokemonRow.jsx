import React from 'react';
import { Button } from '@material-ui/core';
import PokemonType from '../PokemonType';
import PropTypes from 'prop-types';

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(',')}</td>
    <td>
      <Button
        variant='contained'
        color='primary'
        onClick={() => onSelect(pokemon)}
      >
        More Info
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;
