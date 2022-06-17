import React from "react";
import { CardImg, Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {AddToCartComponent, AddToCartInput} from '../AddToCart/AddToCartComponent';
import { Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export class SinglePetProductPreview extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pet: this.props.pet
        }
    }

    componentDidUpdate(){

        Object.assign(this.state, {
            pet: this.props.pet
        })
    }
    
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.pokemons !== this.state.pokemons) {
    //       console.log('pokemons state has changed.')
    //     }
    //   }

    render(){
        return(
            <Col lg="4" md="6" sm="6" xs="12">
                <Card className="mb-3" bg="light" text="light">
                    <Card.Header>
                        {/* <img alt={pet.name} src={this.state.pet.photoPath}></img> */}
                        <CardImg key={Date.now()} width="200px" height="160px" src={this.state.pet.photoPath} alt={this.state.pet.name} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title as="p">{this.state.pet.name}</Card.Title>
                        <Card.Text>{this.state.pet.excerpt}</Card.Text>
                        <Card.Text>Price: {this.state.pet.retailPrice} EUR</Card.Text>
                        <AddToCartInput pet={this.state.pet}></AddToCartInput>
                        <br />
                        <Link to={`/pet/${this.props.pet.petId}`} className="btn btn-primary btn-block  btn-sm"
                        style={{width: '100%'}}>Open Pet page...</Link>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}