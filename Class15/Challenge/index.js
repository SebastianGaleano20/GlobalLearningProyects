import express from 'express';
import dotenv from 'dotenv';
import {v4 as uuidV4} from 'uuid';
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/',(_request,response) => {
    response.redirect(uuidV4());
})
app.get('/:index', (request, response)=>{
    response.render('index', { indexId: request.params.index});
})

app.listen(PORT,() =>{
    console.log(`App listening on port ${PORT}`);
})








