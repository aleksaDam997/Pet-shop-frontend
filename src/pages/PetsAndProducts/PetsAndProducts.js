import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PetsAndProducts.css';
import { faArchway, faDog, faListAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import * as api from "../../api/api";
import {SinglePetProductPreview} from "../../components/SinglePetProductPreview/SinglePetProductPreview";
import { ApiConfig } from "../../config/ApiConfig";

export default class PetsAndProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            minPrice: 0.1,
            maxPrice: 9999.9,
            keywords: "",
            sortBy: "SORT_BY_NAME_ASC",
            pets: [],
            categories: [],
            selectedCategoryId: 0,
            animals: [],
            selectedAnimalId: 0,
            breeds: [],
            selectedBreedId: 0
        }
    }

    componentDidMount(){
        this.getAllPets();
        this.fetchPetCategories();
    }

    

    async applyFilters() {

        let objectFilter = {
            keyWords: this.state.keywords,
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            sortBy: this.state.sortBy,
            categoryId: this.state.selectedCategoryId,
            animalId: this.state.selectedAnimalId,
            breedId: this.state.selectedBreedId
        }

        await api.api("api/user/pet/search", 'post', objectFilter).then(res => {

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

            

            let path = ApiConfig.baseUrl + "resources/pet/";

        petts.map(async (pet, index) => {
            await api.api("api/user/get/photos/pet/" + pet.petId, "get", {}).then(res => {
                petts[index].photoPath = path + res.data[0].path;
            });
        })

            this.setState(Object.assign(this.state, {
                pets: petts
            }));
        });
        
    }

    async fetchBreeds() {
        let breeeds = [];

        await api.api('api/user/get/breed/byAnimalId/' + this.state.selectedAnimalId, 'get', {}).then(res => {
            res.data.map(breed => {
                breeeds.push({
                    breedId: breed.breedId,
                    name: breed.name,
                    description: breed.description
                })
            });
        });

        this.setState(Object.assign(this.state, {
            breeds: breeeds
        }))
    }

    async fetchAnimals() {
        let animalls = [];

        await api.api("api/user/get/animal/byCategoryId/" + this.state.selectedCategoryId, 'get', {}).then(res => {
            res.data.map(animal => {
                animalls.push(
                    {
                        animalId: animal.animalId,
                        name: animal.name,
                        clas: animal.clas
                    }
                )
            });
        });

        this.setState(Object.assign(this.state, {
            animals: animalls
        }));
    }

    async fetchPetCategories() {

        let catts = [];
        await api.api("api/user/get/categories", "get", {}).then(res => {

            res.data.map(catt => {
                catts.push({
                    categoryId: catt.petCategoryId,
                    name: catt.name,
                    description: catt.description
                });
            });
        });

        this.setState(
            Object.assign(this.state, {
                categories: catts
            })
        )
    }



    async getAllPets() {
    
        await api.api("api/user/get/pet", "get", {}).then(res => {
                        
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

                let path = ApiConfig.baseUrl + "resources/pet/";

            petts.map((pet, index) => {
                api.api("api/user/get/photos/pet/" + pet.petId, "get", {}).then(res => {
                    petts[index].photoPath = path + res.data[0].path;
                });
            })

                this.setState(Object.assign(this.state, {
                    pets: petts
                }));
        });
    }

    render() {
      return (
        <Container>
        <Card text="dark" className="font-weight-bold">
            {/* <Card.Header><FontAwesomeIcon icon={faArchway}></FontAwesomeIcon> Categories </Card.Header> */}
            <Card.Body>
                <Card.Title>
                <FontAwesomeIcon icon={faDog}></FontAwesomeIcon> Ljubimci
                </Card.Title>
                <Container>
                    <br />
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
                    this.state.pets.map(pet => {
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
                <Form.Label htmlFor="category">Izaberite kategoriju ljubimaca za pretragu: </Form.Label>
                <Form.Select name="category" id="category" aria-label="Default select example" value={this.state.selectedCategoryId} onChange={(e) => this.selectCategoryFormChanged(e)}>
                    <option>Odaberite kategoriju ljubimaca</option>
                    {
                        this.state.categories.map(category => {
                            return(
                                <option value={category.categoryId}>{category.name}</option>
                            );
                        })
                    }
                </Form.Select>
            </Form.Group>
            <br />
            {this.renderAnimalSelect()}
            {
             this.renderBreedSelect()
            }
            <Form.Group>
                <Form.Label htmlFor="keywords">Pretraži po ključnim riječima: </Form.Label>
                <Form.Control placeholder="npr. Domaci pas" type="text" id="keywords" value={this.state.keywords} onChange={(e) => this.keywordChanged(e)}></Form.Control>
            </Form.Group>
            <br />
            <Form.Group>
                <Row>
                    <Col xs="12" sm="6">
                    <Form.Label htmlFor="priceMin">Min. cijena: </Form.Label>
                    <Form.Control type="number" id="priceMin" 
                    min="0.00" max="99999.99" step="0.01" value={this.state.minPrice} onChange={(e) => this.minPriceChanged(e)}></Form.Control>
                    </Col>
                    <Col xs="12" sm="6">
                    <Form.Label htmlFor="priceMax">Max. cijena: : </Form.Label>
                    <Form.Control type="number" id="priceMax" 
                    min="0.01" max="99999.99" step="0.01" value={this.state.maxPrice} onChange={(e) => this.maxPriceChanged(e)}></Form.Control>
                    </Col>
                </Row>
            </Form.Group>
            <br />
            <br />
            <Form.Group>
                <Form.Label htmlFor="sortOrder">Sortiraj po: </Form.Label>
                <Form.Control as="select" id="sortOrder" name="sortOrder" value={this.state.sortBy} onChange={(e) => this.sortSelectChanged(e)}>
                    <option value="SORT_BY_NAME_ASC">Sort by name - asc</option>
                    <option value="SORT_BY_NAME_DESC">Sort by name - desc</option>
                    <option value="SORT_BY_PRICE_ASC">Sort by price - asc</option>
                    <option value="SORT_BY_PRICE_DESC">Sort by price - desc</option>
                </Form.Control>
            </Form.Group>
            <br />
            <br />
            <Form.Group>
                <Button variant="primary" block onClick={(e) => this.applyFilters()}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Filter</Button>
            </Form.Group>
            </div>

        );
    }

    renderAnimalSelect(){
        if(this.state.animals){
            return(
                <div>
                <Form.Group className={this.state.selectedCategoryId !== 0 ? 'd-block' : 'd-none'}>
                <Form.Label htmlFor="animal">Koju zivotinju želite pretraživati: </Form.Label>
                <Form.Select name="animal" id="animal" aria-label="Default select example" value={this.state.selectedAnimalId} onChange={(e) => this.selectAnimalFormChanged(e)}>
                    <option>Životinja</option>
                    {
                        this.state.animals.map(animal => {
                            return(
                                <option value={animal.animalId}>{animal.name}</option>
                            );
                        })
                    }
                </Form.Select>
            </Form.Group>
            <br />
            </div>
            );
        }
    }

    renderBreedSelect(){
        if(this.state.breeds){
            return(
                <div>
                <Form.Group className={this.state.selectedAnimalId !== 0 ? 'd-block' : 'd-none'}>
                <Form.Label htmlFor="breed">Koju rasu želite pretraživati: </Form.Label>
                <Form.Select name="breed" id="breed" aria-label="Default select example" value={this.state.selectedBreedId} onChange={(e) => this.selectBreedFormChanged(e)}>
                    <option>Životinja</option>
                    {
                        this.state.breeds.map(breed => {
                            return(
                                <option value={breed.breedId}>{breed.name}</option>
                            );
                        })
                    }
                </Form.Select>
            </Form.Group>
            <br />
            </div>
            );
        }
    }


    selectCategoryFormChanged(e) {
        this.setState(
            Object.assign(this.state, {
                selectedCategoryId: e.target.value
            })
        );
        this.fetchAnimals();
    }

    selectAnimalFormChanged(e) {
        this.setState(
            Object.assign(this.state, {
                selectedAnimalId: e.target.value
            })
        );
        this.fetchBreeds();
    }

    selectBreedFormChanged(e){
        this.setState(
            Object.assign(
                this.state, {
                    selectedBreedId: e.target.value
                }
            )
        )
    }

    keywordChanged(e) {

        this.setState(Object.assign(this.state, {
            keywords: e.target.value
        }))
    }

    minPriceChanged(e){
        this.setState(Object.assign(this.state, {
            minPrice: e.target.value
        }))
    }

    maxPriceChanged(e) {
        this.setState(Object.assign(this.state, {
            maxPrice: e.target.value
        }))
    }

    sortSelectChanged(e) {
        this.setState(Object.assign(this.state, {
            sortBy: e.target.value
        }))
    }
  }