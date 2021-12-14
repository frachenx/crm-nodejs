import { Router } from "express";
import { userController } from "../controllers/userController";

class UserRoute{
    public router:Router=Router();
    
    constructor(){
        this.config();
    }

    config(){
        this.router.post('/login',userController.login);
        this.router.get('/tickets/:id',userController.tickets);
        this.router.post('/quote',userController.addQuote);
        this.router.put('/:id',userController.updateProfile);
        this.router.get('/:id',userController.getUser);
        this.router.post('/register',userController.register);
        this.router.post('/ticket',userController.createTicket);
    }
}

const userRouter = new UserRoute();
export default userRouter.router 