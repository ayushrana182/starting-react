import React from 'react';
import PokemonContext from './PokemonContext';
import PokemonRow from './PokemonRow';

const PokemonTable = () => {
  const { pokemon, filter, selectedPokemonSet } = React.useContext(
    PokemonContext
  );
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
              pokemon={pokemon}
              onSelect={(pokemon) => selectedPokemonSet(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
