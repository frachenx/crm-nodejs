import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User=new User();
  resultString:string = "";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('user_id')!).subscribe(
      (user:User)=>{
        this.user = user;
      }
    );
  }

  submit(){
    this.userService.updateUser(this.user).subscribe(
      res=>{
        if(res.response=='true'){
          this.resultString='1';
          setTimeout(()=>{
            this.resultString='';
          },1500);
        }else{
          this.resultString='0';
          setTimeout(()=>{
            this.resultString='';
          },1500);
        }
      }
    )
  }

}
