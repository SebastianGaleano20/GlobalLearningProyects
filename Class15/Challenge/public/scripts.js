const socket = io();
let mouseDown = false;
let mouseX = 0;
let mouseY = 0;

//Configuracion de canva
window.onload = () => {
    //Imagenes random para dibujar
    const imgs = [
        "https://latiendapokemon.com/wp-content/uploads/2017/04/dibujo_pokemon_saltando_boca_evee-340x340.gif",
        "https://media.istockphoto.com/id/1158366013/es/vector/p%C3%A1gina-para-colorear-con-un-perro-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=-KVMmyU2-LMikLX0D-i6rPoGcVgrQbKbIj2hd_yDGYU=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0vVOqAeq5zDBSajjnp8AJaP43XTmg44HQH1Tu0PWxA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBarC1wiX-cgZMNiRWxwIvw_U5knr5lILUQNKE7rhtlj-mlAyCR1I7LausMsIZZPPHkCo&usqp=CAU"

    ]
    let randomIndex = Math.floor(Math.random() * imgs.length);
    let randomImg = document.getElementById('randomImg');
    randomImg.src = imgs[randomIndex];

    socket.emit('join', INDEX_ID)
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
            socket.emit('draw', { INDEX_ID, mPos: { x: mouseX, y: mouseY }, pmPos: { x: pMouseX, y: pMouseY } });
        }
    })
    //Configuracion para estilar el espacio canva
    ctx.fillStyle = 'black';
    //Cofiguracion para establecer el espacio donde se dibujara
    ctx.fillRect(0, 0, canva.width, canva.height);
}

socket.on('draw', ({ mPos, pmPos }) => {
    ctx.lineWidth = 2;  //Tamaño de la linea a dibujar
    ctx.strokeStyle = 'green'; //Estilo del mouse
    ctx.beginPath(); //Inicio del trazado
    ctx.moveTo(pmPos.x, pmPos.y); //Coordenada inicial para el trazado
    ctx.lineTo(mPos.x, mPos.y);
    ctx.stroke();
})