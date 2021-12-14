"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AdminController {
    logins(req, res) {
        database_1.default.query(`
        SELECT 
            login_id AS id,
            user_name AS name,
            user_email AS email,
            USERS.user_id AS userID,
            login_date AS loginDate,
            login_ip AS IP,
            login_mac AS mac 
        FROM LOGINS,USERS WHERE USERS.user_id=LOGINS.user_id`, (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    users(req, res) {
        database_1.default.query(`
        SELECT 
            user_id AS id,
            user_address AS address,
            user_email AS email,
            user_alt_email AS altEmail,
            user_gender AS gender,
            user_contact AS contact,
            user_name AS name,
            user_password AS password,
            user_created_date AS createdDate
        FROM USERS`, (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    quotes(req, res) {
        database_1.default.query(`
        SELECT
            quote_id AS id,
            quote_name AS name,
            quote_email AS email,
            quote_contact AS contact,
            quote_company AS company,
            query,
            remark,
            status
        FROM QUOTES`, (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    login(req, res) {
        let name = req.body.name;
        let password = req.body.password;
        database_1.default.query('SELECT * FROM ADMINS WHERE admin_name=?', [name], (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length > 0) {
                let hash0 = result[0].admin_password;
                hash0 = hash0.replace('$2y$', '$2a$');
                bcrypt_1.default.compare(password, hash0, (err, result0) => {
                    if (err)
                        res.json(err);
                    if (result0) {
                        res.json({ response: result[0].admin_id });
                    }
                    else {
                        res.json({ response: 'false' });
                    }
                });
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    checkPassword(req, res) {
        let adminID = req.body.adminID;
        let password = req.body.password;
        database_1.default.query('SELECT * FROM ADMINS WHERE admin_id=?', [adminID], (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length > 0) {
                let hash0 = result[0].admin_password;
                hash0 = hash0.replace('$2y$', '$2a$');
                bcrypt_1.default.compare(password, hash0, (err, result0) => {
                    if (err)
                        res.json(err);
                    if (result0) {
                        res.json({ response: "true" });
                    }
                    else {
                        res.json({ response: 'false' });
                    }
                });
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    update(req, res) {
        let adminID = req.body.adminID;
        let password = req.body.password;
        const { id } = req.params;
        bcrypt_1.default.hash(password, 10, (err, hash) => {
            database_1.default.query('UPDATE ADMINS SET admin_password=? WHERE admin_id=?', [hash, adminID], (err, result, fields) => {
                if (err)
                    res.json(err);
                if (result.affectedRows == '1') {
                    res.json({ response: 'true' });
                }
                else {
                    res.json({ response: 'false' });
                }
            });
        });
    }
    deleteUser(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM USERS WHERE user_id=?', [id], (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.affectedRows == '1') {
                res.json({ response: 'true' });
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    tickets(req, res) {
        database_1.default.query(`
        SELECT
            ticket_id  AS id,
            ticket_title AS title,
            ticket_task AS task,
            ticket_priority AS prio,
            ticket_description AS description, 
            ticket_admin_remark AS adminRemark,
            ticket_admin_remark_date AS adminRemarkDate, 
            ticket_attachment AS attachment,
            ticket_post_date AS postDate,
            ticket_status AS status,
            ticket_email AS email
        FROM TICKETS`, (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    getTicket(req, res) {
        const { id } = req.params;
        database_1.default.query(`
        SELECT 
            ticket_id  AS id,
            ticket_title AS title,
            ticket_task AS task,
            ticket_priority AS prio,
            ticket_description AS description, 
            ticket_admin_remark AS adminRemark,
            ticket_admin_remark_date AS adminRemarkDate, 
            ticket_attachment AS attachment,
            ticket_post_date AS postDate,
            ticket_status AS status,
            ticket_email AS email  
        FROM TICKETS WHERE ticket_id=?`, [id], (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length > 0) {
                res.json(result[0]);
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    updateTicket(req, res) {
        const { id } = req.params;
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        database_1.default.query(`
        UPDATE TICKETS SET 
            ticket_admin_remark =?,
            ticket_admin_remark_date =?, 
            ticket_status =?
        WHERE ticket_id = ?
        `, [
            req.body.adminRemark,
            dateTime,
            "CLOSED",
            req.body.id
        ]);
    }
    getQuote(req, res) {
        const { id } = req.params;
        database_1.default.query(`
        SELECT
            quote_id AS id,
            quote_name AS name,
            quote_email AS email,
            quote_contact AS contact,
            quote_company AS company,
            query,
            remark,
            status
        FROM QUOTES 
        WHERE quote_id=?`, [id], (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length > 0) {
                res.json(result[0]);
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
    updateQuote(req, res) {
        database_1.default.query(`
        UPDATE QUOTES SET
            remark= ?,
            status= ?
        WHERE quote_id=?`, [
            req.body.remark,
            "CLOSED",
            req.body.id,
        ], (err, result, fields) => {
            if (err)
                res.json(err);
            if (result.length.affectedRows == '1') {
                res.json({ response: 'true' });
            }
            else {
                res.json({ response: 'false' });
            }
        });
    }
}
exports.adminController = new AdminController();
