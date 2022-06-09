import React from 'react'
import "./FormSuccess.css"

const FormSuccess = (props) => {

  console.log(props);

  return (
    <div>
      <h1>Success</h1> 
      <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
      firstName: {props.data.firstName},
      lastName: {props.data.lastName}
    </div>
  )}

export default FormSuccess
  