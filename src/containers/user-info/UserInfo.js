import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../../styles/App.css';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {UserInfoCard} from '../../components/user-info/UserInfoCard.js';

// todo use userId
const NewUserInfoButton = withRouter(({ history, customerId }) => (
    <Button
        onClick={() => { history.push('new') }}
    >
        Create New
    </Button>
));

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
            <Container>
                <Row>
                    <Col>
                        <NewUserInfoButton userId={2} variant={"success"}>
                            Create New
                        </NewUserInfoButton>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <UserInfoCard userInfo={this.state.userInfo}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(UserInfo);