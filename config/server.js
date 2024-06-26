'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { dbConnection } from './mongo.js'

import comentRoute from '../src/comment/comment.routes.js'

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        this.commentPath = '/apiBlog/v1/comment'

        this.conectarDB();
        this.middlewares();
        this.routes();

    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(this.commentPath,comentRoute);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('El servidor se encuentra ejecutando en el puerto:', this.port)
        })
    }
}

export default Server;