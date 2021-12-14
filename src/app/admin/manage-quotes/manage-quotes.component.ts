import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/user/quote.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-quotes',
  templateUrl: './manage-quotes.component.html',
  styleUrls: ['./manage-quotes.component.css']
})
export class ManageQuotesComponent implements OnInit {
  quotes:Quote[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.quotes().subscribe((quotes:Quote[])=>{
      this.quotes = quotes;
    })
  }

}
