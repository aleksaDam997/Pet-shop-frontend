import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row, Table } from "react-bootstrap";
import * as api from "../../api/api";
import { AddToCartInput } from "../AddToCart/AddToCartComponent";
import { ApiConfig } from "../../config/ApiConfig";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


    export const PetPage = () => {

        const [pet, setPet] = useState({
            petId: 0,
            name: '',
            excerpt: '',
            description: '',
            vendorPrice: '',
            retailPrice: '',
            discount: 0,
            sex: '',
            age: 1
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
                            age: res.data.age
    
                        }
                    )
    
                });
            }

            const fetchPhotos = async () => {
                await api.api("api/user/get/photos/pet/" + id, 'get', {}).then(res => {
                    
                    res.data.map(photo => {
                        setPhotos([
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
                <Card bg="white" text="dark">
                    <Card.Body>
                        <Card.Title className="text-center mb-1">
                            <FontAwesomeIcon icon={faBoxOpen} />
                            <strong className="text-center">{pet ? pet.name : 'We have no this article in our offer!'}</strong>
                        </Card.Title>
                        <Row>
                            <Col xs="12" lg="8">
                                <div className="excerpt" mb-1>
                                    {pet?.except}
                                </div>
                                <hr style={{backgroundColor: '#DDDDDD'}}/>
                                <div className="description mb-3">
                                    {pet?.description}
                                </div>
                                <Table className="m-1" bordered variant="secondary">
                                    <thead>
                                        <tr>
                                            <th className="text-center" colSpan={2}>Features</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                          
                                    </tbody>
                                </Table>
                                <div className="mt-3">Promoted: </div>
                                <div className="mt-3">Status: </div>
                            </Col>
                            <Col xs="12" lg="4">
                                <Row>
                                    <Col xs="12" style={{cursor: 'pointer'}}>
                                        <img src={ApiConfig.baseUrl + 'resources/pet/' + photos[0]?.path } onClick={() => setImageModalVisible(true)}
                                         alt={'Image-' + pet?.petId}
                                         style={{width: '320px', height: '240px', border: '3px solid #DDDDDD'}} className="w-100"/>
                                    </Col>
                                </Row>
                                <Row>
                                   
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs="12">
                                        <AddToCartInput pet={pet}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/> <hr/>
                        <Row>
                            <Col xs="12" className='text-center'>
                                <h3>
                                Price: 
                                {pet.vendorPrice}
                                </h3>
                                
                            </Col>
                        </Row>

                    </Card.Body>
                    <Modal size="lg" centered show={imageModalVisible} onHide={() => setImageModalVisible(false)}>
                        <Modal.Header className="text-center">
                               <strong>{pet?.name + " photo " }</strong> 
                        </Modal.Header>
                        <Modal.Body style={{display: 'inline-block', border: '3px solid black'}}>
                        {photos.map(photo => {
                                return(
                                    <img src={ApiConfig.baseUrl + 'resources/pet/' + photo.path }
                                alt={'Image-' + pet.petId}
                                style={{width: '320px', height: '240px', border: '3px solid #DDDDDD'}} className="w-100 mb-1"/>
                                );
                            })}
                            <Button style={{position: 'absolute', left:'0%', top: '50%'}}>{"<"}</Button>
                            <Button style={{position: 'absolute', right: '0%', top: '50%'}}>{">"}</Button>
                        </Modal.Body>
                    </Modal>
                </Card>
            </Container>
        );
    }
