let mouseDown = false;
let mouseX = 0;
let mouseY = 0;

//Configuracion de canva
window.onload = () => {
    //Seleccionamos el elemento
    canva = document.querySelector('canvas');
    //Seleccionamos el elemento como contexto 2d para dibujar
    ctx = canva.getContext('2d');
    //Eventos del mouse
    addEventListener('mousedown', () => mouseDown = true); //Evento click 
    addEventListener('mouseup', () => mouseDown = false);  //Evento click up
    //Evento de movimiento
    addEventListener('mousemove', e => {  
        let pMouseX = mouseX;
        let pMouseY = mouseY;
        let boundingBox = canva.getBoundingClientRect(); //Obtenemos las coordenadas del cliente
        mouseX = e.clientX - boundingBox.x; //Coordenada X
        mouseY = e.clientY - boundingBox.y; //Coordenada Y
        if (mouseDown) {
            ctx.lineWidth = 2;  //Tamaño de la linea a dibujar
            ctx.strokeStyle = 'green'; //Estilo del mouse
            ctx.beginPath(); //Inicio del trazado
            ctx.moveTo(pMouseX, pMouseY); //Coordenada inicial para el trazado
            ctx.lineTo(mouseX, mouseY); //Coordenada final para el trazado
            ctx.stroke();  //Establece el trazado
        }
    })
    //Configuracion para estilar el espacio canva
    ctx.fillStyle = 'black';
    //Cofiguracion para establecer el espacio donde se dibujara
    ctx.fillRect(0, 0, canva.width, canva.height);
}