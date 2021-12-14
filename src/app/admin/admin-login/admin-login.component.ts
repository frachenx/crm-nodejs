import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  name:string;
  password:string;
  resultString:string='';

  constructor(private adminService:AdminService,private router:Router,private dashboardService:DashboardService) { }

  ngOnInit(): void {
  }

  submit(){
    this.adminService.login(this.name,this.password).subscribe((res)=>{
      console.log(res);
      if(res.response=="false"){
        this.resultString='0';
        localStorage.clear();
        setTimeout(()=>{
          this.resultString='';
        },1500);
      }else{
        localStorage.clear();
        localStorage.setItem('user_type','ADMIN');
        localStorage.setItem('admin_id',res.response);
        this.dashboardService.userType.next('ADMIN');
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
