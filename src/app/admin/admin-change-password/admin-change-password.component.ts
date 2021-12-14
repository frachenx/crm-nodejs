import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {
  oldPassword:string;
  newPassword:string;
  confirmPassword:string;
  oldPasswordCorrect:boolean =true;
  passwordsMatch:boolean = true;
  resultString:string='';
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  checkOldPassword(){
    this.adminService.checkOldPassword(localStorage.getItem('admin_id')!,this.oldPassword).subscribe(
      (res)=>{
        console.log(res);
        if(res.response=='true'){
          this.oldPasswordCorrect=true;
        }else{
          this.oldPasswordCorrect=false;
        }
      }
    )
  }

  checkPasswordsMatch(){
    if(this.newPassword!=this.confirmPassword){
      this.passwordsMatch=false;
    }else{
      this.passwordsMatch=true;
    }
  }

  submit(){
    if(!this.oldPassword || !this.passwordsMatch){
      alert('Error Ocurred');
    }else{
      this.adminService.changePassword(localStorage.getItem('admin_id')!,this.newPassword).subscribe((res)=>{
        console.log(res);
        let myForm =  document.getElementById('myForm') as HTMLFormElement;
        myForm.reset();
        if(res.response=='true'){
          this.resultString ='1';
          setTimeout(()=>{
            this.resultString=''
          },1500);
        }else{
          this.resultString ='0';
          setTimeout(()=>{
            this.resultString=''
          },1500);
        }
      })
      
    }
  }

}
