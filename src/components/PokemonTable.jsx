import React from 'react';
import PokemonContext from './PokemonContext';
import PokemonRow from './PokemonRow';

const PokemonTable = () => {
  const {
    state: { pokemon, filter },
    dispatch,
  } = React.useContext(PokemonContext);
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {(pokemon || [])
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={(pokemon) =>
                dispatch({
                  type: 'SET_SELECTED_POKEMON',
                  payload: pokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
