import { faBoxOpen, faCartArrowDown, faCartFlatbed, faCartFlatbedSuitcase, faCartPlus, faCartShopping, faCarTunnel, faCashRegister, faGenderless, faLessThan, faLessThanEqual, faMoneyBill, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row, Table } from "react-bootstrap";
import * as api from "../../api/api";
import { AddToCartInput } from "../AddToCart/AddToCartComponent";
import { ApiConfig } from "../../config/ApiConfig";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ImageSliderComponent from "../ImageSliderComponent/ImageSliderComponent";
import './pet_page.css';



    export const PetPage = () => {

        const photoPath = ApiConfig.baseUrl + "resources/pet/";

        const [pet, setPet] = useState({
            petId: 0,
            name: '',
            excerpt: '',
            description: '',
            vendorPrice: '',
            retailPrice: '',
            discount: 0,
            sex: '',
            age: 1,
            color: "",
            eyesColor: "",
            quantity: 0
        });
        
        const [photos, setPhotos] = useState([]);

        const [imageModalVisible, setImageModalVisible] = useState(false)

        let { id } = useParams();


        useEffect(() => {

            const fetchPet = async () => {
                await api.api("api/user/get/pet/" + id, 'get', {}).then(res => {
    
                    setPet({
                        ...pet,
                            petId: res.data.petId,
                            name: res.data.name,
                            excerpt: res.data.excerpt,
                            description: res.data.description,
                            vendorPrice: res.data.vendorPrice,
                            retailPrice: res.data.retailPrice,
                            discount: res.data.discount,
                            sex: res.data.sex,
                            age: res.data.age,
                            color: res.data.color,
                            eyesColor: res.data.eyesColor,
                            quantity: res.data.quantity
    
                        }
                    )
    
                });
            }

            const fetchPhotos = async () => {
                await api.api("api/user/get/photos/pet/" + id, 'get', {}).then(res => {

                    res.data.map(photo => {
                        setPhotos(photos => [
                            ...photos, {
                                photoId: photo.photoId,
                                path: photo.path
                            }
                        ]);
                    })
                }); 
            }


            fetchPet();
            fetchPhotos();

        }, []);


        return(
            <Container>
                <Card bg="wihte" text="dark">
                    <Card.Body>
                        <Card.Title className="text-center mb-1 title-pet-page">
                            <FontAwesomeIcon icon={faBoxOpen} /> &nbsp;
                            <strong className="text-center">{pet ? pet.name : 'We have no this article in our offer!'}</strong>
                        </Card.Title>
                        <br />
                        <Row>
                            <Col xs="12" lg="8">
                                <div className="description mb-3" data-mdb-toggle="animation" data-mdb-animation="slide-out-right" 
                                data-mdb-animation-reset="true" data-mdb-animation-start="onLoad">
                                    {pet?.description}
                                </div>
                                <Table className="m-1" responsive="md" variant="dark">

                                    <tbody className="text-center">
                                        <tr>
                                            <th>
                                                Starost:
                                            </th>
                                            <td>{pet.age} mjeseca</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Pol:
                                            </th>
                                            <td>{pet.sex === "MALE" ? "Muški" : "Ženski"}</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Boja:
                                            </th>
                                            <td>{pet.color}</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Boja očiju:
                                            </th>
                                            <td>{pet.eyesColor}</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Količina:
                                            </th>
                                            <td>{pet.quantity}</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Maloprodajna cijena:
                                            </th>
                                            <td>{pet.retailPrice} KM</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Cijena prodavca:
                                            </th>
                                            <td>{pet.vendorPrice} KM</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Popust:
                                            </th>
                                            <td>{pet.discount * 100} %</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                {/* <div className="mt-3">Status: </div> */}
                            </Col>
                            <Col xs="12" lg="4">
                                <Row>
                                    <Col xs="12" style={{cursor: 'pointer'}}>
                                        <div className="image">
                                        <img src={ApiConfig.baseUrl + 'resources/pet/' + photos[0]?.path } onClick={() => setImageModalVisible(true)}
                                         alt={'Image-' + pet?.petId}
                                         style={{width: '320px', height: '240px', border: '3px solid #DDDDDD'}} className="w-100"/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                   
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs="12">
                                        <AddToCartInput pet={pet}/>
                                        <div className="excerpt" mb-1>
                                            {pet?.excerpt}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/> <hr/>
                        <Row>
                            <Col xs="12" className='text-center'>
                            <h3 >Na promociji: {pet.discount > 0 ? "✅" : "X"}</h3>
                                <h3 className="text-danger">
                                    <FontAwesomeIcon icon={faCartShopping} />&nbsp;
                                        Price: &nbsp;
                                        {pet.vendorPrice - pet.vendorPrice * pet.discount} KM                                        
                                </h3>
                                
                            </Col>
                        </Row>

                    </Card.Body>
                    <Modal size="lg" centered show={imageModalVisible} onHide={() => setImageModalVisible(false)}>
                        <Modal.Header className="text-center" closeButton>
                               <strong>{pet?.name + " slike " }</strong> 
                        </Modal.Header>

                        <Modal.Body>

                            <ImageSliderComponent photoPath={photoPath} photos={photos}></ImageSliderComponent>

                        </Modal.Body>
                    </Modal>
                </Card>
            </Container>
        );
    }
