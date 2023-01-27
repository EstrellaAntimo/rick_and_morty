const regexEmai = /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation(userData){
    let errors ={}
    if(!regexEmai.test(userData.username)) errors.username = 'El usuario debe de ser un email'
    else if(!userData.username) errors.username='El usuario no puede estar vacio'
    else if(!userData.username.length > 35) errors.username='El nombre de usuario no puede ser mayor a 35 caracteres'
  
    if(!regexPassword.test(userData.pasword)) errors.pasword = 'La contrasena debe tener al menos un numero'
    else if(userData.pasword.length < 6 && userData.pasword.length > 10) errors.pasword = 'La contrasena debe terner una longitud entre 6 y 10'
   return errors;
}
