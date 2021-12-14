import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardType: string = "";
  overallVisitors: number = 0;
  visitorsToday: number = 0;
  registeredUsers: number = 0;
  registeredToday: number = 0;
  overallQuotes:number=0;
  quotesInProgress:number=0;
  overallTickets:number=0;
  pendingTickets:number=0;
  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('user_type') == null) {
      this.dashboardType = "USER";
    }
    if (localStorage.getItem('user_type') == 'ADMIN') {
      this.dashboardType = "ADMIN";
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
      this.adminService.visitors().subscribe((res) => {
        this.overallVisitors = res.length;
        this.visitorsToday = res.filter(login =>  login.loginDate.substr(0,10) == yyyy+'-'+mm+'-'+dd).length
      });
      this.adminService.users().subscribe((res)=>{
        this.registeredUsers = res.length;
        this.registeredToday =res.filter(user =>  user.createdDate.substr(0,10) == yyyy+'-'+mm+'-'+dd).length
      });
      this.adminService.quotes().subscribe((res)=>{
        this.overallQuotes = res.length;
        this.quotesInProgress = res.filter( quote => quote.status=="").length
      });
      this.adminService.tickets().subscribe((res)=>{
        this.overallTickets = res.length;
        this.pendingTickets = res.filter( ticket => ticket.status=="").length
      });
    }
    if (localStorage.getItem('user_type') == 'USER') {
      this.dashboardType = "USER";
    }
  }


  openNav(){
    let customNavbar = document.querySelectorAll('.custom-navbar')[0] as HTMLDivElement;
    let content = document.querySelectorAll('.content')[0] as HTMLDivElement;
    let sidebar = document.querySelectorAll('.sidebar')[0] as HTMLDivElement;
    if(customNavbar.style.transform == '' || customNavbar.style.transform == 'translateX(0px)'){
      customNavbar.style.transform ='translateX(250px)';
      content.style.transform ='translateX(0px)';
      sidebar.style.visibility ='visible';
    }else{
      customNavbar.style.transform = 'translateX(0px)';
      content.style.transform = 'translateX(-250px)';
      sidebar.style.visibility ='hidden';
    }
  }
}
