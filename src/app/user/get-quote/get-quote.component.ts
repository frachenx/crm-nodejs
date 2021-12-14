import {Quote} from '../quote.model'
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {
  quote:Quote = new Quote();
  resultString:string="";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }

  submit(){
    this.userService.addQuote(this.quote).subscribe(
      (res)=>{
        if(res.response=='true'){
          let myForm = document.getElementById('myForm') as HTMLFormElement
            myForm.reset();
          this.resultString='1';
          setTimeout(()=>{
            this.resultString='';
          },1500);
        }else{
          this.resultString='0';
          setTimeout(()=>{
            this.resultString='';
          },1500);
        }
        console.log(res);
      }
    )
  }

}