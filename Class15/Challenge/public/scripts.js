

//Configuracion de canva
window.onload = () => {
    //Seleccionamos el elemento
    canva = document.querySelector('canvas');
    //Seleccionamos el elemento como contexto 2d para dibujar
    ctx = canva.getContext('2d'); 
    //Intervalo de tiempo
    setInterval(repeat, 1000/30);
}
//Funcion repeat a utiliza en setInterval
const repeat = () =>{
    //Configuracion para estilar el espacio canva
    ctx.fillStyle = 'black';
    //Cofiguracion para establecer el espacio donde se dibujara
    ctx.fillRect(0,0,canva.width,canva.height); 
}