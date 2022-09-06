import React from 'react';
import "./FormSuccess.css";
import Alert from 'react-bootstrap/Alert';
import Success from '../../img/success.png'


const FormSuccess = (props) => {
  console.log('Bojan' + props)
  return (
    <div>
      <img className='img-success' src={Success} alt="success image" width='150px' />
      <Alert className='alert-success' variant="success">
      <Alert.Heading>Thank you!</Alert.Heading>
      <p>
      Thanks for signing up. Welcome to our community. We are happy to have you on board.
      Please check your email for user verification.
      </p>
      <hr />
      <p className="mb-0">
        Pet Shop
      </p>
    </Alert>
      
    </div>
  )}

export default FormSuccess
  
  