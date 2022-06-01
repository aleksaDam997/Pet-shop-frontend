import React from 'react';
import {useState} from 'react';
import {useForm} from "react-hook-form";
import './Registration.scss';
import { Container } from 'react-bootstrap';

const Registration = () => {
	const {register, handleSubmit, errors} = useForm();
	const [userInfo, setUserInfo] = useState()
	const onSubmit = (data) => {
		setUserInfo(data);
	}

  return (
    <Container>
		<pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
			<h1>Registracija korisnika</h1>
			<div className='form-group'>
				<label for="firstName">Ime:</label>
				<input id="firstName" type="text" name="firstName" placeholder="Marko" ref={register}/>
			</div>
			<div>
				<label for="lastName">Prezime:</label>
				<input id="lastName" type="text" name="lastName" placeholder="Marković" ref={register}/>
			</div>
			<div>
				<label for="userName">Korisničko ime:</label>
				<input id="userName" type="text" name="userName" placeholder="Mare" ref={register}/>
			</div>
			<div>
				<label for="email">Email adresa:</label>
				<input id="email" type="text" name="email" placeholder="marko.markovic@mail.com" ref={register}/>
			</div>
			<div>
				<label for="address">Adresa stanovanja:</label>
				<input id="address" type="text" name="address" placeholder="Celjska 36" ref={register}/>
			</div>
			<div>
				<label for="phone">Broj telefona:</label>
				<input type="tel" id="phone" name="phone" placeholder="065121212" ref={register}/>
			</div>
			<div>
				<label for="password">Lozinka:</label>
				<input id="password" type="password" name="password" placeholder="*******" ref={register}/>
			</div>
			<div>
				<label for="password2">Ponovi lozinku:</label>
				<input id="password2" type="password" name="password2" placeholder="*******" ref={register}/>
			</div>
			<div>
				<button type='submit' className='btn btn-primary' >Registruj se</button>
				<span>Vec si registrovan? Uloguj se <a href='/prijava'>ovdje</a>.</span>
			</div>
		</form>
    </Container>
  )}


export default Registration