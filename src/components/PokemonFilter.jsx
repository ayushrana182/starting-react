import { TextField } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
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
