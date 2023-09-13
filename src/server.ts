import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from "cors";


class Server {
    private app : Application;
    private port: string;
    private apiRouters = {
        // routes
    };

    constructor() {
        this.app = express();
        this.port = "3000" || "4000";

        // conection to db
        this.middlewares();
        this.routes();
    };

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

}

export default Server;

// const app: Application = express();
// const port = process.env.PORT || 8000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Welcome to Express & TypeScript Server');
// });

// app.listen(port, () => {
//   console.log(`Server is Fire at http://localhost:${port}`);
// });