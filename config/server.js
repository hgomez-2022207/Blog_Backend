'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { dbConnection } from './mongo.js'

class Server {
    constructor(){
        this.app = express();
        this.port = prcces.env.Port;

        this.conectarDB();
        this.middlewares();
        this.routes()
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

    }

    liste(){
        this.app.listen(this.port, () => {
            console.log('El servidor se encuentra ejecutando en el puerto:', this.port)
        })
    }
}