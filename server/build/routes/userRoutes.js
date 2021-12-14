"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/login', userController_1.userController.login);
        this.router.get('/tickets/:id', userController_1.userController.tickets);
        this.router.post('/quote', userController_1.userController.addQuote);
        this.router.put('/:id', userController_1.userController.updateProfile);
        this.router.get('/:id', userController_1.userController.getUser);
        this.router.post('/register', userController_1.userController.register);
        this.router.post('/ticket', userController_1.userController.createTicket);
    }
}
const userRouter = new UserRoute();
exports.default = userRouter.router;
