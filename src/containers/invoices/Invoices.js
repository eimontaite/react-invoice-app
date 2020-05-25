import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../../styles/App.css';
import Table from 'react-bootstrap/Table';
import {TableHeader, TableBody} from '../../components/invoice/Invoice.js';

class Invoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceData: []
        };
    }

    componentDidMount() {
        const url = 'http://localhost:8080/invoices/';

        fetch(url + this.props.match.params.customerId)
            .then(result => result.json())
            .then(json => {
                this.setState({
                    invoiceData: json,
                })
            });
        console.log(this.state.invoiceData);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Table striped bordered hover>
                        <TableHeader/>
                        <TableBody invoiceData={this.state.invoiceData}/>
                    </Table>
                </div>
            </div>
        )
    }
}

export default withRouter(Invoices);