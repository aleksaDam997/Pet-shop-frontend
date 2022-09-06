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

        const petId = this.props.pet?.petId;

        const data = {
            quantity: this.state.quantity
        };

        console.log(petId);
        console.log(data);

        api.apiToken('api/user/add/cart-item/pet/' +  petId, 'post', data)
        .then((res) => {
            window.dispatchEvent(new CustomEvent('cart.update'));
            console.log(res.data);
        });
        }

    render() {
        return (
            <Form.Group>
                <Row>
                    <Col xs="7">
                        <Form.Control className='text-center' type="number" min="1" step="1" max={Number(this.props.pet.quantity)} value={ this.state.quantity }
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