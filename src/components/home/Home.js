import React, {Component} from 'react';
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