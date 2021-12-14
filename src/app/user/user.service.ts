import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Quote } from './quote.model';
import { Ticket } from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    return this.http.post<any>(`${this.baseUrl}user/login`,{'email':email,'password':password})
  }

  signUp(user:User){
    return this.http.post<any>(`${this.baseUrl}user/register`,user)
  }

  getUser(id:string){
    return this.http.get<User>(`${this.baseUrl}user/${id}`);
  }

  updateUser(user:User){
    return this.http.put<any>(`${this.baseUrl}user/${user.id}`,user);
  }

  addQuote(quote:Quote){
    return this.http.post<any>(`${this.baseUrl}user/quote`,quote);
  }
  
  addTicket(ticket:Ticket){
    return this.http.post<any>(`${this.baseUrl}user/ticket`,ticket);
  }

  getUserTickets(userID:string){
    return this.http.get<Ticket[]>(`${this.baseUrl}user/tickets/${userID}`)
  }
  
}
