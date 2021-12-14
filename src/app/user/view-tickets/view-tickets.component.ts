import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
  tickets:Array<Ticket>

  constructor(private userService:UserService) {
    userService.getUserTickets(localStorage.getItem('user_id')!).subscribe(
      (tickets:Ticket[])=>{
          this.tickets = tickets;
      }
    )
   }

  ngOnInit(): void {
  }

  

}
