import { faAdd, faBoxes, faDog, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import * as api from '../../api/api';


export default function AddBreedModal() {

  const [visibility, setVisibility] = useState(false)

  const [breed, setBreed] = useState({
    name: "",
    description: "",
    animalId: 0
  })

  const [animals, setAnimals] = useState([])

  const [message, setMessage] = useState("");

  useState(() => {
    
    getAnimals();

  }, [])

  function getAnimals(){
    api.apiToken("api/user/get/animal", "get", {}).then(res => {

        setAnimals(res.data);
      })
  }

  return (
    <>
      <Button className="me-2 select d-block" onClick={() => setVisibility(true)}>Dodaj novu rasu</Button>
      <Modal size="lg" centered show={visibility} onHide={() => setVisibility(false)}>
          <Modal.Header closeButton>
              <FontAwesomeIcon icon={faBoxes} /> Dodaj novu rasu / proizvoda
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-2">
                <Form.Label htmlFor="name">Naziv:</Form.Label>
                <Form.Control className="text-capitalize" id="name" type="text" value={breed.name} onChange={(e) => formStringFieldChanged("name", e)}></Form.Control>
            </Form.Group>  
            <Form.Group>
                <Form.Label htmlFor="description">Opis: <FontAwesomeIcon icon={faNoteSticky} /></Form.Label>
                <Form.Control id="description" type="textarea" value={breed.description} onChange={(e) => formStringFieldChanged("description", e)}></Form.Control>
            </Form.Group>     
            <Form.Group>
                <Form.Label htmlFor="select">Izaberi životinju: </Form.Label>
                <Form.Select id="select" name="select" onChange={(e) => selectChanged(e)}>
                    {
                        animals.map(animal => {
                            return(
                                <option value={animal.animalId}>{animal.name}</option>
                            );
                        })
                    }
                </Form.Select>
            </Form.Group>
            <Alert id="message" className={message === "" ? "d-none" : "d-block mt-3"}>{message}</Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => saveInDatabase()}>Sačuvaj</Button>
          </Modal.Footer>
      </Modal>
    </>
  );

  function saveInDatabase(){
    api.apiToken("api/admin/add/breed", "post", {
      name: breed.name,
      description: breed.description,
      animalId: breed.animalId
    }).then(res => {

      if(res.status === "error"){
        const alert = document.getElementById("alert");
        if(alert){
          alert.className = "text-danger";
        }
  
        setMessage("Došlo je do greške, zahtjev nije sačuvan");
        return;
      }

      const alert = document.getElementById("alert");
      if(alert){
        alert.className = "text-success";
      }
      
      setMessage("Rasa je uspješno sačuvana");

    }).catch(err => {

      const alert = document.getElementById("alert");
      if(alert){
        alert.className = "text-danger";
      }

      setMessage("Došlo je do greške, zahtjev nije sačuvan \n" + err);
    });

    setTimeout(() => {
      setMessage("");
      setBreed({
        ...breed,
        name: "",
        description: "",
        breedId: 0
      })
    }, 3000)
  }

  function formStringFieldChanged(field, e){
    setBreed({
      ...breed, 
      [field]: e.target.value
    })
    
  }

  function selectChanged(e) {
    setBreed({
        ...breed,
        animalId: Number(e.target.value)
    })
  }

  function hideModal() {
    setVisibility(false);
  }

  function showModal() {
    setVisibility(true)

  }

}