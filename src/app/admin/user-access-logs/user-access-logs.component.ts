import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Login } from '../login.model';

@Component({
  selector: 'app-user-access-logs',
  templateUrl: './user-access-logs.component.html',
  styleUrls: ['./user-access-logs.component.css']
})
export class UserAccessLogsComponent implements OnInit {
  logins:Login[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.visitors().subscribe((logins:Login[])=>{
      this.logins = logins;
    })
  }

}
