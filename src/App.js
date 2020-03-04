import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drinks from './Drinks'
import DrinksForm from './DrinksForm'
import { createStore, applyMiddleware} from 'redux';

const store = createStore (() => [], {}, applyMiddleware());
class App extends Component {
  render() {
    return (

      <div className="App">
      <DrinksForm/>
      <hr/>
      <Drinks />
      </div>

    );
  }
}

export default App
