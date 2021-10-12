import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-last-statement',
  templateUrl: './last-statement.component.html',
  styleUrls: ['./last-statement.component.css']
})
export class LastStatementComponent implements OnInit {

  cust: Customer[];
  status="unbilled";
  responseData:any=[];
  constructor(private apiService:ApiService,private spinner:NgxSpinnerService,private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{},'/billed-transactions',true).subscribe((response)=>{
      this.responseData=response;
      console.log(this.responseData)
      this.spinner.hide().then(r => console.log('stopped'));
    })
  }
}


