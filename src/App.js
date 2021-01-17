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

//Reducer

const pokemonReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error('No Action');
  }
};

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
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    pokemon: [],
    filter: '',
    selectedPokemon: null,
  });

  React.useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((resp) => resp.json())

      .then((data) =>
        dispatch({
          type: 'SET_POKEMON',
          payload: data,
        })
      );
  }, []);

  if (!state.pokemon) {
    return <div>Loading Data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>

        <TwoColumnLayout>
          <div>
            <PokemonFilter variant='outlined' />

            <PokemonTable />
          </div>
          {state.selectedPokemon && (
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
