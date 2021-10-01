import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Model/customer';
@Component({
  selector: 'app-unbilled-txn',
  templateUrl: './unbilled-txn.component.html',
  styleUrls: ['./unbilled-txn.component.css']
})
export class UnbilledTxnComponent implements OnInit {
  cust: Customer[];
  status="unbilled";
  ngOnInit(): void {
     this.cust= [
    {
      date: "10-May-2021",
      place: "Flipcart",
      amount: "500"
    },
    {
      date: "10May",
      place: "Flipcart",
      amount: "500"
    },
    {
      date: "10May",
      place: "Flipcart",
      amount: "500"
    },
    {
      date: "10May",
      place: "Flipcart",
      amount: "500"
    },
    {
      date: "10May",
      place: "Flipcart",
      amount: "500"
    },
  ]}

}
