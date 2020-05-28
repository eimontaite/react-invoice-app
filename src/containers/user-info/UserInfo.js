import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../../styles/App.css';
import Table from 'react-bootstrap/Table';
import {UserInfoCard} from '../../components/user-info/UserInfoCard.js';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: []
        };
    }

    componentDidMount() {
        // todo use actual userId dynamically
        const url = 'http://localhost:8080/user-info/2';
            fetch(url)
                .then(result => result.json())
                .then(json => {
                    this.setState({
                        userInfo: json,
                    })
                });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Table striped bordered hover>
                        <UserInfoCard userInfo={this.state.userInfo}/>
                    </Table>
                </div>
            </div>
        )
    }
}

export default withRouter(UserInfo);