 //Funcion para imagen
 document.addEventListener('DOMContentLoaded', ()=>{
    changeImg();
    restoreImg();
 }) 

const changeImg = () => {
    document.getElementById('img-logo').src = 'photo.jpeg';
}
const restoreImg = () => {
    document.getElementById('img-logo').src = 'logo.jpeg';
}