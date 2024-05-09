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
    if (!regex.test(lastName) ) {
    let errorLN = document.getElementById('errorLN');
      errorLN.style.display = "block";
      return;
    }else{
      errorLN.style.display = "none";
    }
    if(!regex.test(firstName)){
   let errorN = document.getElementById('errorN');
      errorN.style.display = "block";
      return;
    }else{
      errorN.style.display = "none";
    }
    //Funcion para validar inputs de contraseñas
    if(!regexPass.test(password)){
      let errorP = document.getElementById('errorP');
      errorP.style.display = "block";
      return;
    }else{
      errorP.style.display = "none";
    }
    if(password !== confirmPassword){
      let errorCP = document.getElementById('errorCP');
      errorCP.style.display = "block";
      return;
    }else{
      errorCP.style.display = "none";
    }
    //Funcion para validar email
    if(!regexEmail.test(email)){
   let errorE = document.getElementById('errorE');
      errorE.style.display = "block";
      return;
    }else{
      errorE.style.display = "none";
    }
    //Funcion para validar nombre de usuario
    if(!regexUser.test(userName)){
       let errorUN = document.getElementById('errorUN');
      errorUN.style.display = "block";
      return;
    }else{
      errorUN.style.display = "none";
    }
    //Funcion para validar si acepta bases y condiciones
      if(!check.checked){  
        let errorCH = document.getElementById('errorCH');
      errorCH.style.display = "block";
      return;
      }else{
      errorCH.style.display = "none";
    }
    const dataUser = {
      name: firstName,
      userName: userName,
      email: email
    }
    const dataJSON = JSON.stringify(dataUser);
    localStorage.setItem('dataUser', dataJSON);
    alert('data saved')
    //Funcion para validar que los campos no esten vacios
    if (firstName.length !== 0 && lastName.length !== 0) {
      this.submit();
    }else{
      console.log('First and last names cannot be empty')
    }
  }
  