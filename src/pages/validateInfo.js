export default function validate(values){
    let errors = {}

    if(!values.firstName.trim()){
        errors.firstName = 'Ime je obavezno'
    }
    if(!values.lastName.trim()){
        errors.lastName = 'Prezime je obavezno'
    }
    if(!values.userName.trim()){
        errors.userName = 'Korisnicko ime je obavezno'
    }
    if(!values.email){
        errors.userName = 'Email ime je obavezan'
    }else if((!/\S+@\S+\.\S+/.test(values.email))){
        errors.email = 'Email adresa je pogresna.';
    }
    if(!values.address.trim()){
        errors.firstName = 'Adresa je obavezna'
    }
    if(!values.phone.trim()){
        errors.firstName = 'Broj telefona je obavezan'
    }
    if(!values.password.trim()){
        errors.firstName = 'Lozinka je obavezna'
    } else if (values.password.length < 5) {
        errors.password = 'Lozinka treba imati 5 ili vise karaktera';
      }
    if(!values.password2.trim()){
        errors.firstName = 'Potvrda lozinke je obavezna'
    }else if (values.password2 !== values.password) {
        errors.password2 = 'Lozinke se ne poklapaju';
    }
      return errors;
    }