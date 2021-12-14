import { json, Response, Request } from 'express'
import conn from '../database'
import bcrypt,{hash} from 'bcrypt'

class UserController{
    register(req:Request,res:Response){
        conn.query(`
        INSERT INTO USERS (
            user_name,user_email,user_password,user_contact,user_gender
        ) 
        VALUES(?,?,?,?,?) `,[req.body.name,req.body.email,req.body.password,req.body.contact,req.body.gender],(err,result,fields)=>{
            if(err) res.json(err);

            if(result.affectedRows=='1'){
                res.json({response:'true'});
            }else{
                res.json({response:'false'});
            }
        })
    }

    login(req:Request,res:Response){
        let email = req.body.email;
        let password = req.body.password;

        conn.query('SELECT * FROM USERS WHERE user_email=?',[email],(err,result,fields)=>{
            if(err) res.json(err);
            if(result.length>0){
                let hash0:string = result[0].user_password;
                hash0 = hash0.replace('$2y$','$2a$');
                bcrypt.compare(password,hash0,(errHash,resultHash)=>{
                    if(errHash) res.json(errHash);
                    console.log(resultHash);
                    console.log(result);
                    if(resultHash){
                        res.json({response:result[0].user_id})
                    }else{
                        res.json({response:'false'})
                    }
                })
            }
        })
    }

    tickets(req:Request,res:Response){
        const {id} = req.params;
        conn.query(`SELECT ticket_id  AS id,ticket_title AS title,ticket_task AS task,ticket_priority AS prio,ticket_description AS description,ticket_admin_remark AS adminRemark,ticket_admin_remark_date AS adminRemarkDate,ticket_attachment AS attachment,ticket_post_date AS postDate,ticket_status AS status,ticket_email AS email FROM tickets,USERS WHERE USERS.user_id=? AND tickets.ticket_email=USERS.user_email `,[id],(err,result,fields)=>{
            if(err) {
                res.json(err)
                console.log(err)
            }else{
                
            }
            console.log(err);
            if(result.length>0){
                console.log(result);
                res.json(result);
            }else{
                res.json({response:'false'})
            }
        })
    }

    addQuote(req:Request,res:Response){
        conn.query(`
        INSERT INTO QUOTES (
            quote_name,quote_email,quote_contact,quote_company,webDesign,cms,seo,smo,staticWeb,dynamicWeb,flashWeb,domainReg,webHosting,webMaintenance,ecomm,animation,payment,logo,dashboard,openSource,newsLetter,other,
            query,
            remark,
            post_date,
            status
        ) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[req.body.name,req.body.email,req.body.contact,req.body.company,req.body.webDesign,req.body.cms,req.body.seo,req.body.smo,req.body.staticWeb,req.body.dynamicWeb,req.body.flashWeb,req.body.domainReg,req.body.webHosting,req.body.webMaintenance,req.body.ecomm,req.body.animation,req.body.payment,req.body.logo,req.body.dashboard,req.body.openSource,req.body.newsLetter,req.body.other,req.body.query,req.body.remark,req.body.postDate,req.body.status],(err,result,fields)=>{
            if(err) res.json(err);
            if(result.affectedRows=='1'){
                res.json({response:'true'});
            }else{
                res.json({response:'true'});
            }
        })
    }

    updateProfile(req:Request,res:Response){
        bcrypt.hash(req.body.password,10,(errorHash,resultHash)=>{
            conn.query('UPDATE USERS SET user_address=?,user_email=?,user_alt_email=?,user_gender=?,user_contact=?,user_name=?,user_password=?',[req.body.address,req.body.email,req.body.altEmail,req.body.gender,req.body.contact,req.body.name,resultHash],(err,result,fields)=>{
                if(err) res.json(err);
                if(result.affectedRows=='1'){
                    res.json({response:'true'});
                }else{
                    res.json({response:'true'});
                }
            })
        })
        
    }

    createTicket(req:Request,res:Response){
        conn.query(`
        INSERT INTO TICKETS (
            ticket_title,ticket_task,ticket_priority,ticket_description
        ) 
        VALUES (?,?,?,?)`,[req.body.title,req.body.task,req.body.prio,req.body.description],(err,result,fields)=>{
            if(err) res.json(err);
            if(result.affectedRows=='1'){
                res.json({response:'true'});
            }else{
                res.json({response:'false'});
            }
        })
    }

    getUser(req:Request,res:Response){
        const {id} = req.params
        conn.query(`
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
        FROM USERS
        WHERE user_id=?`,[id],(err,result,fields)=>{
            if(err) res.json(err);
            if(result.length>0){
                res.json(result[0]);
            }else{
                res.json({response:'false'})
            }
        })
    }   

}

export const userController = new UserController();
