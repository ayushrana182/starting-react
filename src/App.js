import React from 'react';

import './App.css';
import styled from '@emotion/styled';
import { TextField } from '@material-ui/core';
import PokemonType from './PokemonType';
import PokemonRow from './components/PokemonRow';
import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

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
  const [selectedItem, selectedItemSet] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((res) => res.json())
      .then((data) => pokemonSet(data));
  }, []);

  return (
    <Container>
      <Title>Pokemon Search</Title>

      <TwoColumnLayout>
        <div>
          <PokemonFilter
            variant='outlined'
            filter={filter}
            fullWidth
            filterSet={filterSet}
          />

          <PokemonTable filter={filter} filterSet={filterSet} />
        </div>
        {selectedItem && (
          <div>
            <h1>{selectedItem && <PokemonInfo {...selectedItem} />}</h1>
          </div>
        )}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
