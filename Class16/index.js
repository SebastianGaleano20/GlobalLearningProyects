import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 2018;

app.use(express.static('public'));
app.use(express.static('assets'));

app.set('view engine','ejs');

app.get('/', (_request,response)=>{
    response.render('./index')
});

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});
