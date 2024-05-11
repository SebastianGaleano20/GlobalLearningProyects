const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const timer = (time) => {
    //Al ser var el valor se pierde por lo tanto imprime undefined en pantalla
    for (var i = 0; i < time.length; i++) {
        //Creamos una funcion temporal para capturar el valor para imprimirlo en pantalla
        ((index)=>{ //Enviamos por parametro el index para que cada vuelta del bucle se guarde dentro de esta funcion
            setTimeout(() => {
                console.log(time[index]); //Utilizamos el valor del parametro para mostrarlo en consola
            }, index * 2000); //En cada vuelta tarda 2 segundos en mostrar el numero en consola
        })(i); //Enviamos el valor de i como parametro
} 
};

console.log(timer(numbers)); 