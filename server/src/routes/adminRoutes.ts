import { Router } from "express";
import { adminController } from "../controllers/adminController";

class AdminRoute{
    public router:Router=Router();
    
    constructor(){
        this.config();
    }

    config(){
        this.router.get('/logins',adminController.logins);

        this.router.get('/users',adminController.users);
        this.router.delete('/users/:id',adminController.deleteUser);
        this.router.get('/tickets',adminController.tickets);
        this.router.get('/tickets/:id',adminController.getTicket)
        this.router.put('/tickets/:id',adminController.updateTicket);


        this.router.get('/quotes',adminController.quotes);
        this.router.get('/quotes/:id',adminController.getQuote)
        this.router.put('/quotes/:id',adminController.updateQuote);

        this.router.post('/login',adminController.login);
        this.router.put('/:id',adminController.update);
        this.router.post('/check-password',adminController.checkPassword)
    }
}

const adminRouter = new AdminRoute();
export default adminRouter.router 