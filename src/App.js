import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

//Reducer

const pokemonReducer = (
  state = {
    pokemon: [],
    filter: '',
    selectedPokemon: null,
  },
  action
) => {
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
      return state;
  }
};

// Creating Store
const store = createStore(pokemonReducer);

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
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const selectedPokemon = useSelector((state) => state.selectedPokemon);

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

  if (!pokemon) {
    return <div>Loading Data</div>;
  }

  return (
    <Container>
      <Title>Pokemon Search</Title>

      <TwoColumnLayout>
        <div>
          <PokemonFilter variant='outlined' />

          <PokemonTable />
        </div>
        {selectedPokemon && (
          <div>
            <h1>
              {' '}
              <PokemonInfo />
            </h1>
          </div>
        )}
      </TwoColumnLayout>
    </Container>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
