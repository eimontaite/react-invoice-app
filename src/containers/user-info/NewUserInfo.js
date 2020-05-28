import React from "react";
import {withRouter} from "react-router-dom";

class NewUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Name:
                    <input
                        name="name"
                        type="input"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Surname:
                    <input
                        name="surname"
                        type="input"
                        value={this.state.surname}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default withRouter(NewUserInfo);