// import { UnbilledService } from './../../Service/unbilled.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css']
})

export class ViewStatementComponent implements OnInit {
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
// constructor(_private:UnbilledService){

// }

// onClick(TotalOutstanding:Number,LastUdated:String)
// {

//     console.log(TotalOutstanding,LastUdated);
//     return;
//
}
