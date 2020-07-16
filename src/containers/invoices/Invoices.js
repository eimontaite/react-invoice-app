import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../../styles/App.css';
import Table from 'react-bootstrap/Table';
import {InvoiceCard} from '../../components/invoice/Invoice.js';

import {Button, Col, Container, Row} from 'react-bootstrap';

const NewInvoiceButton = withRouter(({ history }) => (
    <Button
        onClick={() => { history.push('new') }}
    >
        Create New
    </Button>
));

class Invoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceData: []
        };
    }

    componentDidMount() {
        let url;
        console.log("id", this.props.match.params.customerId)
        if (this.props.match.params.customerId !== undefined) {
            url = 'http://localhost:8080/invoices/' + this.props.match.params.customerId;
        } else {
            url = 'http://localhost:8080/invoices'
        }
            fetch(url)
                .then(result => result.json())
                .then(json => {
                    this.setState({
                        invoiceData: json,
                    })
                });
    }

    render() {
        return (
            <Container>
            <Row>
                <Col>
                <NewInvoiceButton variant={"success"}>
                        Create New
                    </NewInvoiceButton>
                </Col>
            </Row>
            <br/>
            <div>
                <div className="container">
                    <Table striped bordered hover>
                        <InvoiceCard invoiceData={this.state.invoiceData}/>
                    </Table>
                </div>
            </div>
            </Container>
        )
    }
}

export default withRouter(Invoices);