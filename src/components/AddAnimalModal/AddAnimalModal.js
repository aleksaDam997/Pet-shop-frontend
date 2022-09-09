import { faAdd, faDog, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import * as api from '../../api/api';


export default function AddAnimalModal() {

  const [visibility, setVisibility] = useState(false)

  const [animal, setAnimal] = useState({
    name: "",
    description: "",
    clas: "",
    petCategoryId: 0
  })

  const [categories, setCategories] = useState([])

  const [message, setMessage] = useState("");

  useEffect(() => {
    
    getCategories();

    window.addEventListener('animal.modal.update', () => getCategories());


  }, [])

  function getCategories(){
    api.apiToken("api/user/get/categories", "get", {}).then(res => {

        setCategories(res.data);
        setAnimal(Object.assign(animal, {
          petCategoryId: res.data[0].petCategoryId
        }))
      })
  }

  return (
    <>
      <Button className="me-2 select d-block" onClick={() => setVisibility(true)}>Dodaj novu životinju</Button>
      <Modal size="lg" centered show={visibility} onHide={() => setVisibility(false)}>
          <Modal.Header closeButton>
              <FontAwesomeIcon icon={faDog} /> Dodaj novu životinju / proizvoda
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-2">
                <Form.Label htmlFor="name">Naziv:</Form.Label>
                <Form.Control className="text-capitalize" id="name" type="text" value={animal.name} onChange={(e) => formStringFieldChanged("name", e)}></Form.Control>
            </Form.Group>  
            <Form.Group>
                <Form.Label htmlFor="description">Opis: <FontAwesomeIcon icon={faNoteSticky} /></Form.Label>
                <Form.Control id="description" type="textarea" value={animal.description} onChange={(e) => formStringFieldChanged("description", e)}></Form.Control>
            </Form.Group>   
            <Form.Group>
                <Form.Label htmlFor="clas">Latinski naziv: <FontAwesomeIcon icon={faNoteSticky} /></Form.Label>
                <Form.Control id="clas" type="text" value={animal.clas} onChange={(e) => formStringFieldChanged("clas", e)}></Form.Control>
            </Form.Group>       
            <Form.Group>
                <Form.Label htmlFor="select">Izaberi kategoriju: </Form.Label>
                <Form.Select id="select" name="select" onChange={(e) => selectChanged(e)}>
                    {
                        categories.map(cat => {
                            return(
                                <option value={cat.petCategoryId}>{cat.name}</option>
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
    api.apiToken("api/admin/add/animal", "post", {
      name: animal.name,
      description: animal.description,
      clas: animal.clas,
      petCategoryId: animal.petCategoryId
    }).then(res => {

      if(res.status === "error"){
        const alert = document.getElementById("alert");
        if(alert){
          alert.className = "text-danger";
        }
  
        setMessage("Došlo je do greške, zahtjev nije sačuvan");
      }

      const alert = document.getElementById("alert");
      if(alert){
        alert.className = "text-success";
      }
      
      setMessage("Životinja je uspješno sačuvana");
      window.dispatchEvent(new CustomEvent('breed.modal.update'));


    }).catch(err => {

      const alert = document.getElementById("alert");
      if(alert){
        alert.className = "text-danger";
      }

      setMessage("Došlo je do greške, zahtjev nije sačuvan \n" + err);
    });

    setTimeout(() => {
      setMessage("");
      setAnimal({
        ...animal,
        name: "",
        description: "",
        clas: "",
        petCategoryId: 0
      })
    }, 3000)
  }

  function formStringFieldChanged(field, e){
    setAnimal({
      ...animal, 
      [e.target.id]: e.target.value
    })
    
  }

  function selectChanged(e) {
    setAnimal({
        ...animal,
        petCategoryId: Number(e.target.value)
    })
  }

  function hideModal() {
    setVisibility(false);
  }

  function showModal() {
    setVisibility(true)

  }

}