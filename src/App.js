import React from 'react';

import './App.css';
import styled from '@emotion/styled';
import { TextField } from '@material-ui/core';
import PokemonType from './PokemonType';
import PokemonRow from './components/PokemonRow';
import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './components/PokemonContext';

//CSS in JS
const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: '1rem';
`;

function App() {
  const [filter, filterSet] = React.useState('');
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, selectedPokemonSet] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((resp) => resp.json())

      .then((data) => pokemonSet(data));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        filter,
        pokemon,
        selectedItem,
        filterSet,
        pokemonSet,
        selectedPokemonSet,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>

        <TwoColumnLayout>
          <div>
            <PokemonFilter variant='outlined' />

            <PokemonTable />
          </div>
          {selectedItem && (
            <div>
              <h1>
                {' '}
                <PokemonInfo />
              </h1>
            </div>
          )}
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
