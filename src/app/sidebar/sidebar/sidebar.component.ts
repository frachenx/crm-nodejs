import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarItemsType:string;
  constructor(private dashboardService:DashboardService) {
    this.dashboardService.userType.subscribe(
      (res)=>{
        this.sidebarItemsType = res;
      }
    );
   }

  ngOnInit(): void {
    if(localStorage.getItem("user_type")===null){
      this.sidebarItemsType="0";
    }else{
      switch (localStorage.getItem("user_type")){
        case "ADMIN":this.sidebarItemsType="ADMIN";break;
        case "USER": this.sidebarItemsType="USER";break;
      }
    }
  }

}
