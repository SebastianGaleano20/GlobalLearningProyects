//Generamos una funcion que se ejecute una vez cargado todo el documento html.
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('formulary').addEventListener('submit', validateForm)
  //Generamos una funcion que obtenga el formulario y aguarde al evento submit para validar los datos
})

//Creamos una funcion que valide los datos del formulario
function validateForm(e) {
  //Detenemos el envio del formulario
  e.preventDefault();
  let regex = /^[a-zA-Z\s]*$/;
  let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
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
  if (!regex.test(lastName) || !regex.test(firstName)) {
    console.log('First and last names cannot have numbers or special characters.')
    return;
  }
  if(!regexPass.test(password)){
    console.log('la contraseña es incorrecta')
    return;
  }
  if (firstName.length !== 0 && lastName.length !== 0) {
    this.submit();
  }else{
    console.log('First and last names cannot be empty')
  }
}
