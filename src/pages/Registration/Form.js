import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    function submitForm(){
        setIsSubmitting(true)
    }
  return (
    <div>
    {!isSubmitting ? (<FormSignup submitForm={submitForm}/>) : (<FormSuccess />)}
    

    </div>
  )
}

export default Form