import { TextField } from '@material-ui/core';
import React from 'react';
import PokemonContext from './PokemonContext';

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = React.useContext(PokemonContext);
  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Search Bar'
        variant='outlined'
        value={filter}
        fullWidth
        onChange={(evt) =>
          dispatch({ type: 'SET_FILTER', payload: evt.target.value })
        }
      />
    </div>
  );
};

export default PokemonFilter;
