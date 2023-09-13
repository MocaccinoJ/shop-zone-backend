import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from "cors";

import db from './database/conection'; 

class Server {
    private app : Application;
    private port: string;
    private apiRouters = {
        // routes
    };

    constructor() {
        this.app = express();
        this.port = process.env.NODE_PORT || "3001";

        // conection to db
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.')
        } catch (error) {
            console.log(error);
        }
    }

    middlewares() {
        this.app.use(cors());
        // body parser config
        this.app.use(express.json());
        // use passport
    }

    routes() {
        // here are the routes
        this.app.use('/', (req: any, res: any) => {
            res.send(`Welcome to Express & TypeScript Server`);
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

};

export default Server;