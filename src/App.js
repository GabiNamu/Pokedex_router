import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';

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
      </Switch>
    </div>
  );
}

export default App;
