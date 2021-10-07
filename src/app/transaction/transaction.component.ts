import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TransactionData} from '../../models/TransactionData';
import {MainServiceService} from '../../services/main-service.service';
import {Graph} from '../../models/graph';

@Component({
  selector: 'app-dashboard',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']

})
export class TransactionComponent implements OnInit {

  transactionfirstRow:TransactionData[]=[];
  filteredData:TransactionData[]=[];
  //select:String="";
  //demo:number=21;
  currentGraphindex:any=0;

  perData:number[]=[];
  count:number[]=[];
  dates:string[]=[];
  //dates:String[] = new Array(4)
  //const alphas:string[];
  graphData:Graph[]=[];

duration:String='';



  constructor(private ser:MainServiceService, private ret:Router) { }


  ngOnInit(): void {

    this.ser.getTransactionData()
    .subscribe( data => {
      this.transactionfirstRow = data;

    });


    this.ser.getFilterd("Today")
    .subscribe( data2 => {
      this.filteredData=data2;
      //console.log(data2);

    });


    this.ser.getPercentageData()
    .subscribe( data3=> {
      this.perData=data3;
      //console.log(this.perData[0]);
      //console.log(this.perData[1]);

    });


      //console.log(this.dates);
      //console.log(this.count);
      //console.log("graph ke anadr",this.graphData);

  }

  selectfilterOption(id:String) {
    //this.select=id;
    this.duration=id;
    this.ser.setDuration(id);


    this.ser.getFilterd(id)
    .subscribe( data2 => {
      this.filteredData=data2;
      //console.log(data2);

    });

  }


  formatSubtitle = () : string => {
   return "CREDIT";
  }

  formatSubtitle2 = () : string => {
    return "DEBIT";
   }

   formatSubtitle3 = () : string => {
    return "SUCCESSFUL TRANSACTION";
   }

   formatSubtitle4 = () : string => {
    return "FAILED TRANSACTION";
   }


   WeeklyGraph(){
     this.currentGraphindex=0;
    //this.ret.navigate(['/WeeklyGraph'])
  }


  MonthlyGraph(){
    this.currentGraphindex=1;
    //this.ret.navigate(['/MonthlyGraph'])
  }

  AnnualGraph(){
    this.currentGraphindex=2;
    //this.ret.navigate(['/AnnualGraph'])
  }




}


