import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PetsAndProducts.css';
import { faArchway, faListAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import * as api from "../../api/api";
import {SinglePetProductPreview} from "../../components/SinglePetProductPreview/SinglePetProductPreview";
import { ApiConfig } from "../../config/ApiConfig";

export default class PetsAndProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            products: []
        }
    }

    componentDidMount(){
        this.getAllPets();
    }

    async getAllPets() {
        const body = {}

        api.api("api/user/get/pet", "get", body).then(res => {
                        
            let petts = [];

                res.data.map(pet => {

                    petts.push(
                        {
                            petId: pet.petId,
                            name: pet.name,
                            excerpt: pet.excerpt,
                            age: pet.age,
                            color: pet.color,
                            vendorPrice: pet.vendorPrice,
                            retailPrice: pet.retailPrice,
                            discount: pet.discount,
                            photoPath: ""
                        }
                    )
                });

                let path = ApiConfig.baseUrl + "resources/pet/small/";

                api.api("api/user/get/photos/pet/" + petts[petts.length - 1].petId, "get", {}).then(res => {
                    path = path + res.data[0].path;
                    petts[petts.length - 1].photoPath = path;
                });
                

                this.setState(Object.assign(this.state, {
                    pets: petts
                }));
        
        });
    }

    render() {
      return (
        <Container>
        <Card bg="dark" text="light">
            <Card.Header><FontAwesomeIcon icon={faArchway}></FontAwesomeIcon> Categories </Card.Header>
            <Card.Body>
                <Card.Title>
                <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon> Ljubimci
                </Card.Title>
                <Container>
                    {/* {this.printOptionalMessage()}
                    {this.showSubcategories()} */}
                    <Row>
                        <Col xs="12" md="4" lg="3">
                            {this.printFilters()}
                        </Col>
                        <Col xs="12" md="8" lg="9">
                            {this.showPets()}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    </Container>
      )
    }


    showPets(){
        if(this.state.pets?.length === 0){
            return(
                <div>Nemamo artikala u ponudi za ovu kategoriju!</div>
            );
        }

        return (
            <Row>
                {
                    this.state.pets?.map(pet => {
                        return (
                            <SinglePetProductPreview pet={pet} />
                        );
                    })
                }
            </Row>
        );
    }

    printFilters(){
        return(
            <div>
            <Form.Group>
                <Form.Label htmlFor="keywords">Search keywords: </Form.Label>
                <Form.Control type="text" id="keywords"></Form.Control>
            </Form.Group>
            <br />
            <Form.Group>
                <Row>
                    <Col xs="12" sm="6">
                    <Form.Label htmlFor="priceMin">Min. price: </Form.Label>
                    <Form.Control type="number" id="priceMin" 
                    min="0.01" max="99999.99" step="0.01"></Form.Control>
                    </Col>
                    <Col xs="12" sm="6">
                    <Form.Label htmlFor="priceMax">Max. price: : </Form.Label>
                    <Form.Control type="number" id="priceMax" 
                    min="0.01" max="99999.99" step="0.01"></Form.Control>
                    </Col>
                </Row>
            </Form.Group>
            <br />
            <br />
            <Form.Group>
                <Form.Label htmlFor="sortOrder">Sortiraj po: </Form.Label>
                <Form.Control as="select" id="sortOrder" name="sortOrder">
                    <option value="name asc">Sort by name - asc</option>
                    <option value="name desc">Sort by name - desc</option>
                    <option value="price asc">Sort by price - asc</option>
                    <option value="price desc">Sort by price - desc</option>
                </Form.Control>
            </Form.Group>
            <br />
            <br />
            <Form.Group>
                <Button variant="primary" block onClick={(e) => this.applyFilters()}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>Search</Button>
            </Form.Group>
            </div>

        );
    }
  }