import { Router } from "express";
import { getAllClubs } from "../controllers/clubsController.js";

const clubRouter = Router();

clubRouter.get('/', (_request, response) => {
    response.status(200);
    response.json({
        status: 200,
        app: 'express-server',
        endpoints: {
            index: '/',
            getClubs: '/clubs'
        }
    });
});

clubRouter.get('/clubs', getAllClubs);

export {clubRouter};

