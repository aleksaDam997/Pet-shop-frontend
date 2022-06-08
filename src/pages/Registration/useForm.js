import { useState, useEffect } from "react";
import * as api from "../../api/api";
import { ApiConfig } from "../../config/ApiConfig";

const useForm = (callback, validate) => {
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

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value

        })
    }
    const handleSubmit = e => {
        e.preventDefault();

        const body = {
            firstName: values.firstName,
            lastName: values.lastName,
            userName: values.userName,
            password: values.password,
            email: values.email,
            contact: values.phone,
            address: values.address,
            role: 'USER'
        }

        api.api("api/user/registration", 'post', body ).then(res => {
            console.log(res.data);
        })


        setErrors(validate(values));
        setIsSubmitting(true)
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }    
    },[errors])




    return {handleChange, values, handleSubmit, errors}
}

export default useForm