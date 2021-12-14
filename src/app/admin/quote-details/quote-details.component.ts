import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from 'src/app/user/quote.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  quote:Quote
  id:string;
  constructor(private adminService:AdminService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.adminService.viewQuote(this.id).subscribe((quote:Quote)=>{
        this.quote = quote;
      })
    })
  }

  submit(){
    this.adminService.quoteRemark(this.id,this.quote.remark).subscribe((res)=>{
      console.log(res)
      this.ngOnInit();
    });
  }
}
