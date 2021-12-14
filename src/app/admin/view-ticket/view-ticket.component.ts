import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/user/ticket.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  ticket:Ticket=new Ticket();
  id:string;
  constructor(private adminService:AdminService,private router:ActivatedRoute) {  
  }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.id = params['id'];
      this.adminService.viewTicket(this.id).subscribe((ticket:Ticket)=>{
        console.log(ticket);
        this.ticket = ticket;
      });
    })
  }

  submit(){
    this.adminService.ticketRemark(this.id,this.ticket.adminRemark).subscribe((res)=>{
      console.log(res);
      if(res.response=='true'){
        this.ngOnInit();
      }
    });
  }

}
