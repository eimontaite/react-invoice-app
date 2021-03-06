import React from "react";
import {withRouter} from "react-router-dom";
import UserInfoForm from '../../components/user-info/UserInfoForm.js';
import {Container, Col, Row, Form, Button} from "react-bootstrap";

class NewUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state)
    };

    handleSubmit(event) {
        console.log("handling submit")
        event.preventDefault();
        const form = new FormData(event.target);
        console.log("form", form);
        fetch('http://localhost:8080/user-info/new', {
            method: 'POST',
            headers: {
                method: 'post',
                body: JSON.stringify({form: form})
            },
            body: form,
            mode: 'no-cors'
        })
            .then(json => {
                this.setState({
                    redirectToReferrer: true,
                })
            });
        // todo use actual userId
        this.props.history.push('/user-info/2')
    }

    render() {
        console.log(this.state.redirectToReferrer)
        return (
            <Container>
                <Row>
                <Col>
            <UserInfoForm onSubmit={this.handleSubmit} onChange={this.myChangeHandler} />
                </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(NewUserInfo);