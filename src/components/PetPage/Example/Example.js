import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Example() {

    const [product, setProduct] = useState({
        name: "",
        excerpt: "",
        price: 0.01
    })

    useEffect(() => {


    })

  return (
    <div>
         <Form.Group style={{width: "30vw"}} className="mb-2">
            <Form.Label htmlFor="name">Naziv:</Form.Label>
            <Form.Control className="text-capitalize" id="name" type="text" value={product.name} onChange={(e) => setProductStringFieldState(e)}></Form.Control>
        </Form.Group>  
        <Form.Group style={{width: "30vw"}} className="mb-2">
            <Form.Label htmlFor="excerpt">Ukratko:</Form.Label>
            <Form.Control className="text-capitalize" id="excerpt" type="text" value={product.excerpt} onChange={(e) => setProductStringFieldState(e)}></Form.Control>
        </Form.Group>  
        {/* <Form.Group style={{width: "30vw"}} className="mb-2">
            <Form.Label htmlFor="price">Cijena:</Form.Label>
            <Form.Control className="text-capitalize" id="price" type="number" min="0.01" step="0.01" value={product.price} onChange={(e) => setProductNumberFieldState(e)}></Form.Control>
        </Form.Group>   */}
    </div>
  )

  function setProductStringFieldState(e) {

    setProduct({
        ...product,
        [e.target.id]: e.target.value
    })

    }

  function setProductNumberFieldState(e) {
    setProduct(Object.assign(product, {
        [e.target.id]: Number(e.target.value)
    }))
  }



}