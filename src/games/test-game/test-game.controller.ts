import express from 'express';
import { Server } from 'socket.io';
import { Game } from '../../engine/game';

export const router = (serverIo: Server) => {

    const testGameRouter = express.Router();
    testGameRouter.use((req, res, next) => {
        next();
    });
    
    testGameRouter.get('/', (req, res, next) => {
        const game = new Game();
        res.send('Gammmme');
    });
    
    
    testGameRouter.get('/:gameId', (req, res) =>  {
        console.log('aaaaa');
        const gameId: string = req.params.gameId;
        serverIo.on('connection', (socket) => {
            console.log('Connection');
            console.log(gameId);
            socket.on('disconnect', ()=> {
                console.log('Disconnect');
            });
        });

        res.send(gameId);
    });
    
    return testGameRouter;
};


