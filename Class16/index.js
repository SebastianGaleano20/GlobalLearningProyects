import express from 'express';
import dotenv from 'dotenv';
import { timeRequest }  from './middlewares/timeRequests.js';
import { registerRequest } from './middlewares/registerRequests.js';
import { clubRouter } from './routes/clubRouter.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 2018;
app.use(express.json());

app.use(timeRequest);
app.use(registerRequest);

app.use('/', clubRouter)

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});
