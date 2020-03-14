import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../styles/App.css';

const element = "Hello";

class Home extends Component {
    render() {
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default Home;