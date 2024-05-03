//Generamos una funcion que se ejecute una vez cargado todo el documento html.
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('formulary').addEventListener('submit', validateForm)    
//Generamos una funcion que obtenga el formulario y aguarde al evento submit para validar los datos
})
//Creamos una funcion que valide los datos del formulario
const validateForm = (event) =>{
  //Detenemos el envio del formulario
  event.preventDefault(); 
  let nameValue = document.getElementById('firstName');
  console.log(nameValue)
  let firstName = nameValue.value

  if(firstName.length === 0){
    alert('El nombre no puede contener 0 caracteres')
    return;
  }
  this.submit(); 
}

console.log(validateForm())