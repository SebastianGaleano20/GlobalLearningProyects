const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const timer = (time) => {
    //Al ser var el valor se pierde por lo tanto imprime undefined en pantalla
    for (var i = 0; i < time.length; i++) {
        //Creamos una funcion temporal para capturar el valor para imprimirlo en pantalla
        ((index)=>{
            setTimeout(() => {
                console.log(time[index]);
            }, (index + 1 ) * 2000);
        })(i);
} 
};

console.log(timer(numbers));