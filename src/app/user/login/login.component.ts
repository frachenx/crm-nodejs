import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  resultString:string='';
  constructor(private userService:UserService,private router:Router,private dashboardService:DashboardService) { }

  ngOnInit(): void {
  }

  submit(){
    this.userService.login(this.email,this.password).subscribe((res)=>{
      if(res.response=='false'){
        localStorage.clear();
        this.resultString='0';
        setTimeout(()=>{
          this.resultString='';
          let myForm:HTMLFormElement = document.getElementById('myForm') as HTMLFormElement;
          myForm.reset();
        },1500);
      }else{
        localStorage.clear();
        localStorage.setItem('user_id',res.response);
        localStorage.setItem('user_type','USER');
        this.dashboardService.userType.next('USER');
        this.router.navigate(['/dashboard']); 
      }
    });
  }
}
