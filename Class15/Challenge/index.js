import express from 'express';
import dotenv from 'dotenv';
import http from 'http'
import { v4 as uuidV4 } from 'uuid';
import { Server as SocketIOServer } from 'socket.io';

const app = express();
const server = http.createServer(app);

dotenv.config();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (_request, response) => {
    response.redirect(uuidV4());
})
app.get('/:index', (request, response) => {
    response.render('index', { indexId: request.params.index } );
})

const io = new SocketIOServer(server);
io.on('connection', (socket) => {
    console.log(`A user connected ${socket.id}`);
    socket.on('join', indexId => socket.join(indexId))
    socket.on('draw',({INDEX_ID, mPos, pmPos}) =>{
     socket.broadcast.to(INDEX_ID).emit('draw', {mPos, pmPos})
    })
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

