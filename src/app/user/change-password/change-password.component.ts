import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  resultString:string='';
  passwordsMatch:boolean =true;
  oldPasswordCorrect:boolean =true;
  oldPassword:string;
  newPassword:string;
  confirmPassword:string;
  user:User;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.oldPasswordCorrect && this.passwordsMatch){
      this.userService.getUser(localStorage.getItem('user_id')!).subscribe((user:User)=>{
        this.user = user;
        user.password = this.newPassword;
        this.userService.updateUser(this.user).subscribe((res)=>{
          if(res.response=='true'){
            this.resultString = '1';
            setTimeout(()=>{
              this.resultString='';
            },1500  )
          }else{
            this.resultString = '0';
            setTimeout(()=>{
              this.resultString='';
            },1500  )
          }
        });
        let myForm =  document.getElementById('myForm') as HTMLFormElement;
        myForm.reset();
      })
    }else{
      alert('Check Fields');
      return;
    }
  }

  checkOldPassword(){
    this.userService.login(localStorage.getItem('user_id')!,this.oldPassword).subscribe(
      (res)=>{
        if (res.response!="false"){
          this.oldPasswordCorrect=true;
        }else{
          this.oldPasswordCorrect=false;
        }
      }
    );
  }

  checkPasswordsMatch(){
    if(this.newPassword === this.confirmPassword){
      this.passwordsMatch=true;
    }else{
      this.passwordsMatch=false;
    }
  }

}
