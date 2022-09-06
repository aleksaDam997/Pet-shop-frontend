import React from "react";
import { CardImg, Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {AddToCartComponent, AddToCartInput} from '../AddToCart/AddToCartComponent';
import { Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './single_pet_preview.css';


export class SinglePetProductPreview extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pet: this.props.pet
        }
    }

    componentDidMount() {
        this.setState(
            Object.assign(
                this.state, {
                    pet: {
                        petId: this.props.pet.petId,
                        name: this.props.pet.name,
                        excerpt: this.props.pet.excerpt,
                        photoPath: this.props.pet.photoPath,
                        discount: this.props.pet.discount,
                        retailPrice: this.props.pet.retailPrice
                    } 
                }
            )
        )
    }

    componentDidUpdate(){

        Object.assign(this.state, {
            pet: {
                petId: this.props.pet.petId,
                name: this.props.pet.name,
                excerpt: this.props.pet.excerpt,
                photoPath: this.props.pet.photoPath,
                retailPrice: this.props.pet.retailPrice
            } 
        })
    }

    render(){
        return(
            <Col lg="4" md="6" sm="6" xs="12">
                <Card className="mb-3" >
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        {/* <img alt={pet.name} src={this.state.pet.photoPath}></img> */}
                        <Card.Img key={Date.now()} width="200px" height="160px" src={this.state.pet.photoPath} alt={this.state.pet.name} />
                        {/* <Card.ImgOverlay>
                            <Card.Text className={this.state.pet.discount ? 'promoted': 'd-none'}>{this.state.pet.discount * 100}% popust</Card.Text>
                        </Card.ImgOverlay>     */}
                    </div>
                    <Card.Body>
                        <Card.Text className="bold">
                        {(this.state.pet.excerpt).length <= 15 ? 
                             this.state.pet.excerpt : `${(this.state.pet.excerpt).slice(0, 45)}...`}
                        </Card.Text>
                        <Card.Text className="bold text-danger">Cijena: {this.state.pet.discount ? (this.state.pet.retailPrice - this.state.pet.retailPrice * this.state.pet.discount) : this.state.pet.retailPrice} KM</Card.Text>
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