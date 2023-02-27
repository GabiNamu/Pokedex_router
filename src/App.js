import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Link to="/">Pokedex</Link>
      <Link to="/about">About Pokedex</Link>
      <Switch>
        <Route exact path="/about" render={ () => <About /> } />
        <Route
          exact
          path="/"
          render={ (props) => <Pokedex { ...props } pokemonList={ pokemonList } /> }
        />
        <Route
          path="/pokemon/:id"
          render={
            (props) => <PokemonDetails { ...props } pokemonList={ pokemonList } />
          }
        />
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
