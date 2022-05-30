import React from 'react';
import useForm from './UseForm';
import './Registration.scss';
import validate from './validateInfo';

const Registration = () => {
	const {handleChange, values, handleSubmit, errors} = useForm()
	

	


  return (
    <div>
        <form onSubmit={handleSubmit}>
		<h1>Registracija korisnika</h1>
		<div>
			<label for="firstName">Ime:</label>
			<input id="firstName" type="text" name="firstName" placeholder="Marko"
			value={values.firstName} onChange={handleChange}/>
			{errors.firstName && <p>{errors.firstName}</p>}
		</div>
        <div>
			<label for="lastName">Prezime:</label>
			<input id="lastName" type="text" name="lastName" placeholder="Marković"
			value={values.lastName} onChange={handleChange}/>
		</div>
		<div>
			<label for="userName">Korisničko ime:</label>
			<input id="userName" type="text" name="userName" placeholder="Mare"
			value={values.userName} onChange={handleChange}/>
		</div>
		<div>
			<label for="email">Email adresa:</label>
			<input id="email" type="text" name="email" placeholder="marko.markovic@mail.com"
			value={values.email} onChange={handleChange}/>
		</div>
        <div>
			<label for="address">Adresa stanovanja:</label>
			<input id="address" type="text" name="address" placeholder="Celjska 36"
			value={values.address} onChange={handleChange}/>
		</div>
        <div>
            <label for="phone">Broj telefona:</label>
            <input type="tel" id="phone" name="phone" placeholder="065121212"
			value={values.phone} onChange={handleChange}/>
        </div>
		<div>
			<label for="password">Lozinka:</label>
			<input id="password" type="password" name="password" placeholder="*******"
			value={values.password} onChange={handleChange}/>
		</div>
		<div>
			<label for="password2">Ponovi lozinku:</label>
			<input id="password2" type="password" name="password2" placeholder="*******"
			value={values.password2} onChange={handleChange}/>
		</div>
		<div>
			<button type='submit' className='btn' >Registruj se</button>
			<span>Vec si registrovan? Uloguj se <a href='/login'>ovdje</a>.</span>
		</div>
	</form>
    </div>
  )}


export default Registration