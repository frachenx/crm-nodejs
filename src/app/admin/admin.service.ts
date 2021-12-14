import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Login } from './login.model';
import { User } from '../user/user.model';
import { Quote } from '../user/quote.model';
import { Ticket } from '../user/ticket.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl:string=environment.baseUrl;

  constructor(private http:HttpClient) { }

  login(adminName:string,adminPassword:string){
    return this.http.post<any>(`${this.baseUrl}admin/login`,{"name":adminName,"password":adminPassword});
  }

  visitors(){
    return this.http.get<Login[]>(`${this.baseUrl}admin/logins`)
  }

  users(){
    return this.http.get<User[]>(`${this.baseUrl}admin/users`)
  }

  quotes(){
    return this.http.get<Quote[]>(`${this.baseUrl}admin/quotes`);
  }

  tickets(){
    return this.http.get<Ticket[]>(`${this.baseUrl}admin/tickets`);
  }

  checkOldPassword(adminID:string,password:string){
    return this.http.post<any>(`${this.baseUrl}admin/check-password`,{"adminID":adminID,"password":password})
  }

  changePassword(adminID:string,password:string){
    return this.http.put<any>(`${this.baseUrl}admin/${adminID}`,{"adminID":adminID,"password":password});
  }

  deleteUser(userID:string){
    return this.http.delete<any>(`${this.baseUrl}admin/users/${userID}`);
  }

  viewTicket(ticketID:string){
    return this.http.get<Ticket>(`${this.baseUrl}admin/tickets/${ticketID}`);
  }

  ticketRemark(ticketID:string,remark:string){
    return this.http.put<any>(`${this.baseUrl}admin/tickets/${ticketID}`,{"id":ticketID,"adminRemark":remark});
  }

  viewQuote(quoteID:string){
    return this.http.get<Quote>(`${this.baseUrl}admin/quotes/${quoteID}`);
  }

  quoteRemark(quoteID:string,remark:string){
    return this.http.put<any>(`${this.baseUrl}admin/quotes/${quoteID}`,{"id":quoteID,"remark":remark});
  }
  
}
