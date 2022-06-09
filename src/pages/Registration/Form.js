import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [childData, setChildData] = useState({});

    function submitForm(){
        setIsSubmitting(true)
    }

    function handleCallback(childObject) {
      console.log(childObject.firstName);
      setChildData({
        firstName: childObject.firstName,
        lastName: childObject.lastName
      })
      console.log(childData);
    }
  return (
    <div>
    {!isSubmitting ? (<FormSignup submitForm={submitForm} parentCallback = {handleCallback}/>) : (<FormSuccess data={childData}/>)}
    

    </div>
  )
}

export default Form