import { useState, useEffect } from "react";


const useForm = validateInfo => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        password2: '' 
    })
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target;
        console.log(e.target)
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setErrors(validateInfo(values))
    }

    return {handleChange, values, handleSubmit, errors}
};
export default useForm;