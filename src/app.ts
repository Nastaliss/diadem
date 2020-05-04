import express from 'express';
import redis from 'redis';
import io from 'socket.io';
import { v1 as uuidV1 } from 'uuid';
import { router as testGameRouter } from './games/test-game/test-game.controller';
// Todo: move this to env
const PORT = 3001;

const app = express();

const client = redis.createClient();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

const serverIo = io(server);

serverIo.on('connection', (socket) => {
    console.log('New connection');
    console.log(serverIo.sockets.sockets);
    const socketUuid = uuidV1();
    console.log(socketUuid);
    socket.emit('generate-socket-uuid', socketUuid);
    socket.on('disconnect', () => {
        console.log('dc');
    });
});

const registeredGames = [
    {
        'router': testGameRouter(serverIo),
        'name': 'test-game',
        'enabled': true
    }
];

for (const game of registeredGames) {
    if (! game.enabled)  
        continue;

    app.use(`/${game.name}`, game.router);
}