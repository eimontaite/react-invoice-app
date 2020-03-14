import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Customers from "../containers/customers/Customers";
import Header from "../components/header/Header";

import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div id="App">
            <Header />
        </div>
    );
  }
}

export default App;
