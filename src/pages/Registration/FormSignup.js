import React from 'react';
import './FormSignup.css';
import useForm from './useForm';
import validate from './validateInfo';
import { Link } from 'react-router-dom';
// import * as api from '../../api/api';


const onTrigger = (event) => {
	this.props.parentCallback({
		firstName: event.target.firstName.value,
		lastName: event.target.lastName.value
	});
	event.preventDefault();
}



const FormSignup = ({submitForm}) => {
 
	const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate);

  return (
        <form onSubmit={handleSubmit}>
			<h1>Registracija korisnika</h1>
			<div className='form-group'>
				<label for="firstName">Ime:</label>
				<input id="firstName" type="text" name="firstName" placeholder="Marko"
				value={values.firstName}
				onChange={handleChange} />
				{errors.firstName && <p className='erors-msg'>{errors.firstName}</p>}
			</div>
			<div>
				<label for="lastName">Prezime:</label>
				<input id="lastName" type="text" name="lastName" placeholder="Marković" 
				value={values.lastName}
				onChange={handleChange}/>
				{errors.lastName && <p className='erors-msg'>{errors.lastName}</p>}
			</div>
			<div>
				<label for="userName">Korisničko ime:</label>
				<input id="userName" type="text" name="userName" placeholder="Mare"
				value={values.userName} 
				onChange={handleChange}/>
				{errors.userName && <p className='erors-msg'>{errors.userName}</p>}
			</div>
			<div>
				<label for="email">Email adresa:</label>
				<input id="email" type="text" name="email" placeholder="marko.markovic@mail.com" 
				value={values.email}
				onChange={handleChange}/>
				{errors.email && <p className='erors-msg'>{errors.email}</p>}
			</div>
			<div>
				<label for="address">Adresa stanovanja:</label>
				<input id="address" type="text" name="address" placeholder="Doboj, Celjska 37/5"
				value={values.address} 
				onChange={handleChange}/>
				{errors.address && <p className='erors-msg'>{errors.address}</p>}
			</div>
			<div>
				<label for="phone">Broj telefona:</label>
				<input type="tel" id="phone" name="phone" placeholder="065121212"
				value={values.phone} 
				onChange={handleChange}/>
				{errors.phone && <p className='erors-msg'>{errors.phone}</p>}
			</div>
			<div>
				<label for="password">Lozinka:</label>
				<input id="password" type="password" name="password" placeholder="*******" 
				value={values.password}
				onChange={handleChange}/>
				{errors.password && <p className='erors-msg'>{errors.password}</p>}
			</div>
			<div>
				<label for="password2">Ponovi lozinku:</label>
				<input id="password2" type="password" name="password2" placeholder="*******" 
				value={values.password2}
				onChange={handleChange}/>
				{errors.password2 && <p className='erors-msg'>{errors.password2}</p>}
			</div>
			<div>
				<button type='submit' className='btn btn-primary' >Registruj se</button>
				<span>Vec si registrovan? Uloguj se <Link className='link-login' to='/prijava'>ovdje</Link>.</span>
			</div>
		</form>
   
	)}


export default FormSignup