import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/user/ticket.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-tickets',
  templateUrl: './manage-tickets.component.html',
  styleUrls: ['./manage-tickets.component.css']
})
export class ManageTicketsComponent implements OnInit {
  tickets:Ticket[]
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.tickets().subscribe((tickets:Ticket[])=>{
      this.tickets = tickets;
    })
  }

}
