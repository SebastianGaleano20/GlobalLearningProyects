//Generamos una funcion que se ejecute una vez cargado todo el documento html.
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('formulary').addEventListener('submit', validateForm)
  //Generamos una funcion que obtenga el formulario y aguarde al evento submit para validar los datos
})

//Creamos una funcion que valide los datos del formulario
function validateForm(e) {
  e.preventDefault();
  //regex para expresiones regulares
  //Expresion para nombres y apellidos
  let regex = /^[a-zA-Z\s]*$/;
  //Expresion para contraseñas
  let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  //Expresion para emails
  let regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  //Expresion para Usuarios
  let regexUser = /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;
  //Variables 
  let firstN = document.getElementById('firstName');
  let firstName = firstN.value.trim();
  let lastN = document.getElementById('lastName');
  let lastName = lastN.value.trim();
  let userN = document.getElementById('userName');
  let userName = userN.value.trim();
  let pass = document.getElementById('password');
  let password = pass.value.trim();
  let confirmPass = document.getElementById('confirmPassword');
  let confirmPassword = confirmPass.value.trim();
  let emailValue = document.getElementById('email');
  let email = emailValue.value.trim();
  let check = document.getElementById('check');
  //Funciones
  //Funcion para validar inputs de nombre y apellido
  if (!regex.test(lastName) || !regex.test(firstName)) {
    console.log('First and last names cannot have numbers or special characters.')
    return;
  }
  //Funcion para validar inputs de contraseñas
  if(!regexPass.test(password)){
    console.log('la contraseña es incorrecta')
    return;
  }
  if(password !== confirmPassword){
    console.log('the password is different')
    return;
  }
  //Funcion para validar email
  if(!regexEmail.test(email)){
    console.log('Email invalid');
    return;
  }
  //Funcion para validar nombre de usuario
  if(!regexUser.test(userName)){
    console.log('User invalid');
    return;
  }
  //Funcion para validar si acepta bases y condiciones
    if(!check.checked){   
      console.log('Please acept terms and conditions');
      return;
    }
  //Funcion para validar que los campos no esten vacios
  if (firstName.length !== 0 && lastName.length !== 0) {
    this.submit();
  }else{
    console.log('First and last names cannot be empty')
  }
}
