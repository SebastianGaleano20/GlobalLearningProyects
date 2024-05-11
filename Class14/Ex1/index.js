//Importamos fs
const fs = require('fs');
//Leemos el archivo datos.txt
let data = fs.readFileSync('datos.txt', 'utf8');
//Generamos un array con la data
let arrayData = data.split(' '); 
//Generamos un array de numeros de la data
let numbers = arrayData.map((number) => {
  return parseInt(number);
})
//Funcion para obtener numeros pares
const pairFunction = (numbers) => {
  const pairNumbers = numbers.filter((number) =>number % 2 === 0)
  return pairNumbers;
}
//Filtramos los numeros pares y guardamos en una variable
const pairNumbers = pairFunction(numbers);

//Transformamos en string para enviar el contenido al nuevo archivo
const pairData = JSON.stringify(pairNumbers)

// Ruta y nombre del archivo
const fileNumber = 'pairNumbers.txt';

//Funcion para escribir en el archivo
const writeFile = (fileName, content) =>{
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo:', err);
    } else {
      console.log('Archivo creado exitosamente.');
    }
  });
}
//Generamos el nuevo archivo con los numeros filtrados 
const newFile = writeFile(fileNumber, pairData);
console.log(newFile);
