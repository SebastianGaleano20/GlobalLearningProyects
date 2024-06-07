//Funcion para mostrar como respuesta al cliente en formato json la database
export const responseClubs = (response, code, data) =>{
    response.writeHead(code, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(data));
}