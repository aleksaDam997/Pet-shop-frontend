import React from 'react';
import * as api from '../../api/api';
import {Form, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class AddToCartInput extends React.Component {
    state;

    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
        }
    }

    quantityChanged(event) {
        this.setState({
            quantity: Number(event.target.value),
        });
    }

    addToCart() {
        const data = {
            petId: this.props.pet?.petId,
            quantity: this.state.quantity,
        };

        api('api/user/cart/add/pet/{petId}', 'post', data)
        .then((res) => {
            if (res.status === 'error' || res.status === 'login') {
                return;
            }

            window.dispatchEvent(new CustomEvent('cart.update'));
        });
    }

    render() {
        return (
            <Form.Group>
                <Row>
                    <Col xs="7">
                        <Form.Control type="number" min="1" step="1" value={ this.state.quantity }
                                        onChange={ (e) => this.quantityChanged(e) } />
                    </Col>
                    <Col xs="5">
                        <Button variant="secondary" block
                                onClick={ () => this.addToCart() }>
                            Kupi
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
        );
    }
}