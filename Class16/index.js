import express from 'express';
import dotenv from 'dotenv';
import { timeRequest }  from './middlewares/timeRequests.js';
import { registerRequest } from './middlewares/registerRequests.js';
import fs, { read } from "node:fs";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 2018;

app.use(timeRequest);
app.use(registerRequest);

app.get('/', (_request,response)=>{
  
});

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});
