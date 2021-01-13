import { TextField } from '@material-ui/core';
import React from 'react'


 const PokemonFilter = ({filter, filterSet}) => {
    return (
        <div>
             <TextField
        id='outlined-basic'
        label='Search Bar'
        variant='outlined'
        value={filter}
        fullWidth
        onChange={(evt) => filterSet(evt.target.value)}
      />
        </div>
    )
}


export default PokemonFilter;