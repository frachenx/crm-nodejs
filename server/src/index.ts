import express, { Application} from "express";
import morgan from "morgan";
import cors from 'cors';

import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";

class Server{
    app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev')); 
        const cors1 = cors();
        this.app.use(cors1);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    routes(){
        this.app.use('/user',userRoutes);
        this.app.use('/admin',adminRoutes);
    }


    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on Port',this.app.get('port'));
        })
    }
}

const server =  new Server();
server.start();