import { Component, OnInit } from '@angular/core';
import {TotalTransaction} from '../../Model/Total-Transaction';

@Component({
  selector: 'app-Retail-Transaction',
  templateUrl: './Retail-Transaction.component.html',
  styleUrls: ['./Retail-Transaction.component.css']
})
export class RetailTransactionComponent implements OnInit {

  totalTransaction :TotalTransaction[]=[
    new TotalTransaction("13-Apr-21","Amazon",123456,654321,2000,"HDFC Bank","Visa","Completed"),
    new TotalTransaction("15-Apr-21","Flipkart",123456,654321,9000,"ICICI Bank","Visa","Pending"),
    new TotalTransaction("13-Apr-21","Amazon",123456,654321,2000,"HDFC Bank","Visa","Completed")


  ]

  constructor() { }

  ngOnInit() {
  }

}
