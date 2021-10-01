import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Model/customer';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-unbilled-txn',
  templateUrl: './unbilled-txn.component.html',
  styleUrls: ['./unbilled-txn.component.css']
})
export class UnbilledTxnComponent implements OnInit {
  cust: Customer[];
  status="unbilled";
  responseData:any=[];
  constructor(private apiService:ApiService,private spinner:NgxSpinnerService) { }


  ngOnInit(): void {
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{},'/unbilled-transactions',true).subscribe((response)=>{
      this.responseData=response;
      this.spinner.hide().then(r => console.log('stopped'));
    })
  }


}
