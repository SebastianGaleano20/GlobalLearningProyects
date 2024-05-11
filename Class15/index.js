import express from 'express';
import dotenv from 'dotenv';
//Levantamos app como servidor express
const app = express();
dotenv.config();
//Configurando puerto
const PORT = process.env.PORT  || 3000;

//Configuramos EJS
app.set('view engine','ejs');

//configuramos el metodo get 
app.get('/',(_request,response) => {
    response.render('index')
})

//Configuracion para error 404
app.get('*',(_request,response)=>{
    response.render('error404');
})

app.listen(PORT,() =>{
    console.log(`App listening on port ${PORT}`);
})