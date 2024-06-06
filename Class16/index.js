import express from 'express';
import dotenv from 'dotenv';
import { timeRequest }  from './middlewares/timeMiddle.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 2018;

app.use(express.static('public'));
app.use(express.static('assets'));

app.set('view engine','ejs');

app.use(timeRequest);
app.get('/', (_request,response)=>{
    response.render('./index')
});

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});