import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Model/customer';
@Component({
  selector: 'app-last-statement',
  templateUrl: './last-statement.component.html',
  styleUrls: ['./last-statement.component.css']
})
export class LastStatementComponent implements OnInit {

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


