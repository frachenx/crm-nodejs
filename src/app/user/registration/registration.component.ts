import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User = new User();
  confirmPassword:string;
  passwordsMatch:boolean=true;
  resultString:string ="";

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    if(!this.passwordsMatch){
      alert('Passwords Must Match')
      return;
    }
    this.userService.signUp(this.user).subscribe((res)=>{
      console.log(res);
      if(res.response='true'){
        this.resultString='1';
        setTimeout(()=>{
          this.resultString='';
          this.router.navigate(['/login']);
        },1500)
      }else{
        this.resultString='0';
        setTimeout(()=>{
          this.resultString='';
        },1500)
      }
    });

  }

  
  checkPasswords(){
    let pwd = document.getElementById('password') as HTMLInputElement;
    let confirmpwd = document.getElementById('confirmPassword') as HTMLInputElement;
    if(pwd.value == confirmpwd.value){
      this.passwordsMatch =true;
    }else{
      this.passwordsMatch=false;
    }
  }
}
