import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import '../styles/App.css';
import Customers from "../containers/customers/Customers";

class App extends Component {
  render() {
    return (
        <>
          <Router basename={'/invoice-app/'}>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/customers" component={Customers}/>
          </Router>

        </>

    );
  }
}

export default App;
