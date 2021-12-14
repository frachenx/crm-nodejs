import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:User[];
  resultString:string='';
  constructor(private adminService:AdminService) { 
  }

  ngOnInit(): void {
    this.adminService.users().subscribe((users:Array<User>)=>{
      this.users = users;
    });
  }

  deleteUser(userID:string){
    this.adminService.deleteUser(userID).subscribe((res)=>{
      if(res.response=='true'){
        this.resultString='1';
        setTimeout(()=>{
          this.resultString='';      
          this.ngOnInit();
        },1500)
      }else{
        this.resultString='0';
        setTimeout(()=>{
          this.resultString='';
          this.ngOnInit();
        },1500)
      }
    });
  }
}
