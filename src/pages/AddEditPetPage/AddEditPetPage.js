import React, { useEffect, useState } from "react";
import { Card, Container, Form, Alert, Button, Col, Row, Modal, Nav } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import * as api from '../../api/api';
import { ApiConfig } from "../../config/ApiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faCat, faMoneyCheck, faPercent, faSortAmountAsc, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import "./AddEditPetPage.css";
import AddPetCategoryModal from "../../components/AddPetCategoryModal/AddPetCategoryModal";
import AddAnimalModal from "../../components/AddAnimalModal/AddAnimalModal";
import AddBreedModal from "../../components/AddBreedModal/AddBreedModal";



export default function AdministratorAddEditPetPage() {

    async function fetchBreeds() {

        await api.api('api/user/get/breed/byAnimalId/' + selected.animalId, 'get', {}).then(res => {

            if(res.status ==="error"){
                setMessage({
                    ...message,
                    pet: "Doslo je do greske prilikom dopremanja rasa, prijavite se ponovo.."
                })
                return;
            }

            setBreed(
                res.data
            )
        });

    }

    async function fetchAnimals() {

        await api.api("api/user/get/animal/byCategoryId/" + selected.petCategoryId, 'get', {}).then(res => {

            if(res.status ==="error"){
                setMessage({
                    ...message,
                    pet: "Doslo je do greske prilikom dopremanja životinja, prijavite se ponovo.."
                })
                return;
            }

            setAnimal(res.data);
        })
    }

    async function fetchPetCategories() {

        let categories = [];

         await api.apiToken("api/user/get/categories", "get", {}).then(res => {

            if(res.status ==="error"){
                setMessage({
                    ...message,
                    pet: "Doslo je do greske prilikom dopremanja kategorija, prijavite se ponovo.."
                })
                return;
            }

            res.data.map(cat => {
                categories.push(
                    {
                        petCategoryId: cat.petCategoryId,
                        name: cat.name,
                        description: cat.description
                    }
                )
            })
         });

         setPetCategory(
            categories
         )
    }

    function setPetStringFieldState(e) {

        setPet({
            ...pet, 
            [e.target.id]: e.target. value
        })

    }
    
    function setPetNumberFieldState(e) {
    
        setPet({
            ...pet, 
            [e.target.id]: Number(e.target.value)
        })
    }

    function radioGroupChanged(e) {
        setPet({
            ...pet,
            sex: e.target.value
        })

    }

    const photoPath = ApiConfig.baseUrl + "resources/pet/";

    const [pet, setPet] = useState({
        petId: 0,
        name: '',
        excerpt: '',
        description: '',
        vendorPrice: 0.01,
        retailPrice: 0.01,
        discount: 0.0,
        sex: '',
        age: 1,
        color: "",
        eyesColor: "",
        quantity: 1
    });

    const [selected, setSelected] = useState({
        petCategoryId: 0,
        animalId: 0,
        breedId: 0
    })


    const [petCategory, setPetCategory] = useState([]);
    const [animal, setAnimal] = useState([]);
    const [breed, setBreed] = useState([]);

    const [photos, setPhotos] = useState([]);

    const { id } = useParams();

    const [message, setMessage] = useState({
        pet: "",
        photo: ""
    });

    const [endingModalVisible, setEndingModalVisible] = useState(false);
 
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
                        status: res.data.status,
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


        if(id !== undefined){
            fetchPet();
            fetchPhotos();
        }

        fetchPetCategories();



    }, []);

    return (
        <Container>
        <Card className="font-weight-bold bg-image">
            <Card.Header>
                <Card.Title>
                    <h2 className="text-center">
                    <FontAwesomeIcon icon={faCat} />  Dodaj ljubimca
                    </h2>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Form.Group style={{width: "30vw"}} className="mb-2">
                    <Form.Label htmlFor="name">Naziv:</Form.Label>
                    <Form.Control className="text-capitalize" id="name" type="text" value={pet.name} onChange={(e) => setPetStringFieldState(e)}></Form.Control>
                </Form.Group>  

                <Form.Group style={{width: "10vw"}}>
                    <Form.Label htmlFor="quantity">Količina: <FontAwesomeIcon icon={faSortAmountAsc} /></Form.Label>
                    <Form.Control className="text-center" id="quantity" type="number" min="1" step="1" value={pet.quantity} onChange={(e) => setPetNumberFieldState(e)}></Form.Control>
                </Form.Group>      
                <dvi className="d-flex justify-content-start text-left">   
                <Form.Group className="my-2 me-2" style={{width: "200px"}}>
                <Form.Label htmlFor="color">Boja:</Form.Label>
                    <Form.Select name="color" id="color" aria-label="Default select example" onChange={(e) => selectColorFormChanged(e)}>
                        <option value="Crna" > Crna</option>
                        <option value="Smeđa" > Smeđa</option>
                        <option value="Bijela" > Bijela</option>
                        <option value="Žuta" > Žuta</option>
                    </Form.Select>
                </Form.Group> 
                <Form.Group className="m-2" style={{width: "200px"}}>
                <Form.Label htmlFor="eyesColor">Boja očiju:</Form.Label>
                    <Form.Select name="eyesColor" id="eyesColor" aria-label="Default select example" onChange={(e) => selectEyeColorFormChanged(e)}>
                        <option value="Crna" > Crna</option>
                        <option value="Smeđa" > Smeđa</option>
                        <option value="Plava" > Bijela</option>
                        <option value="zelena" > zelena</option>
                    </Form.Select>
                </Form.Group> 
                </dvi>
                <Form.Group className="my-3">
                    <Form.Label htmlFor="excerpt">U kratko:</Form.Label>
                    <Form.Control style={{overflow: "auto"}} id="excerpt" type="text" value={pet.excerpt} onChange={(e) => setPetStringFieldState(e)}></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label htmlFor="description">Detaljan opis: </Form.Label>
                    <Form.Control as="textarea" id="description" type="text" value={pet.description} onChange={(e) => setPetStringFieldState(e)}></Form.Control>
                </Form.Group>
                <Row>
                <Col>
                <Form.Group className="mt-2" onChange={(e) => radioGroupChanged(e)}>   
                        <Form.Label className="d-block">Pol: <FontAwesomeIcon icon={faVenusMars} /></Form.Label>
                        <Form.Label forHtml="MALE">Muški: </Form.Label>
                        <input className="radio-group" id="MALE" type="radio" value="MALE" name="sex" />
                        <br />
                        <Form.Label forHtml="FEMALE">Ženski: </Form.Label>
                        <input className="radio-group" id="FEMALE" type="radio" value="FEMALE" name="sex" />
                </Form.Group >
                </Col>
                <Col>
                <Form.Group className="my-3">
                    <Form.Label>Izaberi sliku za upload</Form.Label>
                    <Form.Control id='image' type="file" />
                </Form.Group>
                {/* <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group> */}
                </Col>
                </Row>
                <Form.Group className="d-flex justify-content-start text-center my-3">
                    <Form.Group>
                        <Form.Label htmlFor="age">Starost u mjesecima: <FontAwesomeIcon icon={faBirthdayCake} /></Form.Label>
                        <Form.Control className="text-center" id="age" type="number" min="1" step="1" value={pet.age} onChange={(e) => setPetNumberFieldState(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="ms-4 me-3">
                        <Form.Label htmlFor="vendorPrice">Cjena prodavca: <FontAwesomeIcon icon={faMoneyCheck} /></Form.Label>
                        <Form.Control className="text-center" id="vendorPrice" type="number" min="0.01" step="0.01" value={pet.vendorPrice} onChange={(e) => setPetNumberFieldState(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="ms-3 me-3">
                        <Form.Label htmlFor="retailPrice">Maloprodajna cijena: <FontAwesomeIcon icon={faMoneyCheck} /></Form.Label>
                        <Form.Control className="text-center" id="retailPrice" type="number" min="0.01" step="0.01" value={pet.retailPrice} onChange={(e) => setPetNumberFieldState(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mx-3">
                        <Form.Label htmlFor="discount">Popust: <FontAwesomeIcon icon={faPercent} /></Form.Label>
                        <Form.Control className="text-center" id="discount" type="number" min="0" step="0.01" max="1" value={pet.discount} onChange={(e) => setPetNumberFieldState(e)}></Form.Control>
                    </Form.Group>
                </Form.Group>
                <Form.Label htmlFor="selectFields">Izaberi rasu:</Form.Label>
                <Form.Group id="selectFields" className="d-flex justify-content-start mb-4">
                    <Form.Group className="d-block me-2 select">
                    <Form.Select name="category" id="category" aria-label="Default select example" onChange={(e) => selectCategoryFormChanged(e)}>
                            <option value={0}>Odaberite kategoriju ljubimaca</option>
                            {
                                petCategory.map(category => {
                                    return(
                                        <option value={category.petCategoryId}>{category.name}</option>
                                    );
                                })
                            }
                    </Form.Select>
                    </Form.Group>
                    {renderAnimalSelect()}
                    {
                    renderBreedSelect()
                    }
                </Form.Group>

                <Form.Group className="d-flex justify-content-start mt-4 mb-4">
                    <AddPetCategoryModal />
                    <AddAnimalModal />
                    <AddBreedModal />
                </Form.Group>
            </Card.Body>
            <Card.Footer>
                {/* <Button variant="primary" disabled={(this.state.message != '') ? true : false} onClick={() => this.makeAnOrder()} >Sačuvaj izmjene</Button> */}
                <Button variant="danger" onClick={() => {addPetToDatabase()}}>Sačuvaj izmjene</Button>
            </Card.Footer>
        </Card>
        <Modal show={endingModalVisible} centered onHide={() => closeEndingModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Dijalog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert className={`${message.pet !== "" ? 'd-block' : "d-none"} 
                ${message.pet === "Došlo je do greške, provjerite da li je formular pravilno popunjen, u krajnjem slučaju prijavite se ponovo, te pokušajte dodati ljubimca ponovo.." ? 'alert alert-danger' : ''}
                ${message.pet === "Ljubimac je uspješno dodat.." ? 'alert alert-success' : ''}`} id="message-pet" >{message.pet}</Alert>
                <Alert className={`${message.photo !== "" ? 'd-block' : "d-none"} 
                ${message.photo === "Došlo je do greške prilikom dodavanja slike, pokušajte je dodati naknadno u slučaju da je ljubimac uspješno dodat.." ? 'alert alert-danger' : ''}
                ${message.photo === "Fotografija je uspješno dodata.." ? 'alert alert-success' : ''}`} id="alert-photo" >{message.photo}</Alert>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-start">
                <Link to="/administrator_dashboard" className="btn btn-info btn-sm">Admin panel</Link>
                <Link to="/administrator_dashboard/pets" className="btn btn-success  btn-sm">Ljubimci</Link>
                <Button className="btn btn-danger btn-sm" onClick={() => closeEndingModal()}>Nazad</Button>
            </Modal.Footer>
        </Modal>
    </Container>
    );

    async function addPetToDatabase() {

        await savePet();
        await pickPhoto();

        setEndingModalVisible(true);

        // setTimeout(() => {
        //     setMessage({
        //         ...message,
        //         pet: "",
        //         photo: ""
        //     });

        //   }, 6000)
    
    }

    async function savePet() {

        await api.apiToken("api/admin/add/pet", "post", {
            name: pet.name,
            excerpt: pet.excerpt,
            description: pet.description,
            vendorPrice: pet.vendorPrice,
            retailPrice: pet.retailPrice,
            discount: pet.discount,
            sex: pet.sex,
            age: pet.age,
            color: pet.color,
            eyesColor: pet.eyesColor,
            quantity: pet.quantity,
            breedId: selected.breedId
        }).then(res => {

            if(res.status ==="error" || res.status ==="login"){

                setMessage(Object.assign(message, {
                    pet: "Došlo je do greške, provjerite da li je formular pravilno popunjen, u krajnjem slučaju prijavite se ponovo, te pokušajte dodati ljubimca ponovo.."
                }))

                return;
            }

            setMessage(Object.assign(message, {
                pet: "Ljubimac je uspješno dodat.."
            }))

            setPet(Object.assign(pet, {
                petId: res.data.petId
            }));

            
        });
    }

    async function uploadPhoto(petId, file){

        await api.apiFile("upload/api/admin/pet/" + petId + "/add/photo", "file", file).then(res => {
            
            if(res.status ==="error" || res.status === "login"){

                setMessage(message, {
                    photo: "Došlo je do greške prilikom dodavanja slike, pokušajte je dodati naknadno u slučaju da je ljubimac uspješno dodat.."
                })
                return;
            }

            setMessage(Object.assign(message, {
                photo: "Fotografija je uspješno dodata.."
            }))
        });

    }

    async function pickPhoto(){
    
        const filePicker = document.getElementById('image');
    
        if (filePicker?.files.length === 0) {
            setMessage(Object.assign(message, {
                file: "Izaberite sliku za upload.."
            }));

        return;
        }
    
        const file = filePicker.files[0];
        await uploadPhoto(pet.petId, file);
    
    
        // this.getPhotos();
        }

  

    function renderAnimalSelect(){
    if(animal.length > 0){
        return(
            <Form.Group className={selected.petCategoryId !== 0 ? 'd-block select mx-2' : 'd-none'}>
                <Form.Select name="animal" id="animal" aria-label="Default select example" onChange={(e) => selectAnimalFormChanged(e)}>
                    
                    <option>Životinja</option>
                    {
                        animal.map(animal => {
                            return(
                                <option value={animal.animalId}>{animal.name}</option>
                            );
                        })
                    }
                </Form.Select>
            </Form.Group>

        );
    }
}

function renderBreedSelect(){
    if(breed){
        return(
            <Form.Group className={selected.animalId !== 0 ? 'd-block select mx-2' : 'd-none'}>
            <Form.Select name="breed" id="breed" aria-label="Default select example" onChange={(e) => selectBreedFormChanged(e)}>
                <option>Životinja</option>
                {
                    breed.map(breed => {
                        return(
                            <option value={breed.breedId}>{breed.name}</option>
                        );
                    })
                }
            </Form.Select>
        </Form.Group>
        );
    }
}

async function selectCategoryFormChanged(e) {
    
    setSelected(Object.assign(selected, {
        petCategoryId: Number(e.target.value)
    }))

    await fetchAnimals();

}

async function selectAnimalFormChanged(e) {

    setSelected(Object.assign(selected, {
        animalId: Number(e.target.value)
    }))

    await fetchBreeds();
}

function selectBreedFormChanged(e){

    setSelected(Object.assign(selected, {
        breedId: Number(e.target.value)
    }))
}

function selectColorFormChanged(e) {
    setPet(Object.assign(pet, {
        color: e.target.value
    }))

}

function selectEyeColorFormChanged(e) {
    setPet(Object.assign(pet, {
        eyesColor: e.target.value
    }))
}

function closeEndingModal() {
    setPet({
        ...pet,
        petId: 0,
        name: '',
        excerpt: '',
        description: '',
        vendorPrice: 0.01,
        retailPrice: 0.01,
        discount: 0.0,
        sex: '',
        age: 1,
        color: "",
        eyesColor: "",
        quantity: 1
    })

    setSelected({
        ...selected,
        petCategoryId: 0,
        animalId: 0,
        breedId: 0
    })

    setAnimal([]);
    setBreed([]);

    setEndingModalVisible(false);
}
}
