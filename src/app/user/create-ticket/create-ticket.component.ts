import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  ticket:Ticket= new Ticket();
  user:User= new User();

  resultString:string="";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  submit(){
    this.userService.getUser(localStorage.getItem('user_id')!).subscribe((res)=>{
      this.user=res;
      this.ticket.email = this.user.email;
      this.userService.addTicket(this.ticket).subscribe((res2)=>{
        if(res2.response=='true'){
          let myForm =  document.getElementById('myForm') as HTMLFormElement
          myForm.reset();
          this.resultString='1';
          setTimeout(()=>{
            this.resultString=''
          },1500);
        }else{
          this.resultString='0';
          setTimeout(()=>{
            this.resultString=''
          },1500);
        }
      })
    });
    
    
  }

}
