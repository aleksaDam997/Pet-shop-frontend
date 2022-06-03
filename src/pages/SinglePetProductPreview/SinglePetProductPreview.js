import React from "react";
import { CardImg, Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export class SinglePetProductPreview extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pet: this.props.pet
        }

        console.log(this.state.pet.photoPath);
        console.log(this.props.pet.name);

        console.log(this.state.pet.vendorPrice);
        console.log(this.state.pet.discount);
    }

    render(){
        return(
            <Col lg="4" md="6" sm="6" xs="12">
                <Card className="mb-3">
                    <Card.Header>
                        {/* <img alt={article.name} src={ApiConfig.PHOTO_PATH + "small/" + article.imageUrl}></img> */}
                        <CardImg className="text-dark" width="200px" height="160px" src={this.state.pet.photoPath} alt={this.state.pet.name} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="text-dark" as="p">{this.state.pet.name}</Card.Title>
                        <Card.Text className="text-dark" >{this.state.pet.excerpt}</Card.Text>
                        <Card.Text className="text-dark" >Price: {this.state.pet.retailPrice} EUR</Card.Text>
                        {/* <Card.Text>{article.description}</Card.Text> */}
                        {/* <AddToCartInput article={this.props.pet}/> */}
                        {/* <Navigate to={`/pet/${this.props.pet.petId}`} className="btn btn-primary btn-block  btn-sm">Open article page...</Navigate> */}
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}