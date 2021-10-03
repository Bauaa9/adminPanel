import { Component, OnInit } from '@angular/core';
import {TotalTransaction} from '../../models/Total-Transaction';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-Retail-Transaction',
  templateUrl: './retail-transaction.component.html',
  styleUrls: ['./retail-transaction.component.css']
})
export class RetailTransactionComponent implements OnInit {

  responseData :any=[]

  constructor(private apiService:ApiService,private spinner:NgxSpinnerService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{},'/retail-transactions',true).subscribe((response)=>{
      this.responseData=response['retailTxn'];
      this.spinner.hide().then(r => console.log('stopped'));
    })
  }

}
