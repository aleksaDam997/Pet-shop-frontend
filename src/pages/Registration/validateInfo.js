export default function validateInfo(values){
    let errors = {}
    if(!values.firstName.trim()){
        console.log(values.firstName)
        errors.firstName = 'Ime je obavezno'
    }else{
        console.log(!values.firstName)
    }
    if(!values.lastName.trim()){
        errors.lastName = 'Prezime je obavezno'
    }
    if(!values.userName.trim()){
        errors.userName = 'Korisnicko ime je obavezno'
    }
    if(!values.email){
        errors.email = 'Emali adresa je obavezna'
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(values.email)){
        errors.email = 'Emali adresa nije ispravna'
    }
    if(!values.address){
        errors.address = 'Adresa je obavezna'
    }
    if(!values.phone.trim()){
        errors.phone = 'Broj telefona je obavezan'
    }
    if(values.password === ''){
        errors.password = 'Sifra je obavezna'
    }else if(values.password.length < 5){
        errors.password = 'Sifra mora imati pet ili vise karaktera'
    }
    if(values.password2 === ''){
        console.log(values.password2)
        errors.password2 = 'Potvrda sifre je obavezna'
    }else if(values.password2 !== values.password){
        console.log(values.password2)
        errors.password2 = 'Sifre se ne poklapaju'
    }
    return errors;
}