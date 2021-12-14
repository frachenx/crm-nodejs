"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
class AdminRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/logins', adminController_1.adminController.logins);
        this.router.get('/users', adminController_1.adminController.users);
        this.router.delete('/users/:id', adminController_1.adminController.deleteUser);
        this.router.get('/tickets', adminController_1.adminController.tickets);
        this.router.get('/tickets/:id', adminController_1.adminController.getTicket);
        this.router.put('/tickets/:id', adminController_1.adminController.updateTicket);
        this.router.get('/quotes', adminController_1.adminController.quotes);
        this.router.get('/quotes/:id', adminController_1.adminController.getQuote);
        this.router.put('/quotes/:id', adminController_1.adminController.updateQuote);
        this.router.post('/login', adminController_1.adminController.login);
        this.router.put('/:id', adminController_1.adminController.update);
        this.router.post('/check-password', adminController_1.adminController.checkPassword);
    }
}
const adminRouter = new AdminRoute();
exports.default = adminRouter.router;
