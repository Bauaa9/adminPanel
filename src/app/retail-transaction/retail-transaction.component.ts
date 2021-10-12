import { Component, OnInit } from '@angular/core';
import {TotalTransaction} from '../../models/Total-Transaction';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {DatePipe} from '@angular/common';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-Retail-Transaction',
  templateUrl: './retail-transaction.component.html',
  styleUrls: ['./retail-transaction.component.css']
})
export class RetailTransactionComponent implements OnInit {

  responseData :any=[]
  config: any;
  searchValue: string;

  constructor(private apiService:ApiService,private spinner:NgxSpinnerService,private datePipe: DatePipe) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.responseData.count
    };
  }

  public convetToPDF()
  {
    var data = document.getElementById('contentToConvert') as HTMLCanvasElement;
    html2canvas(data).then(canvas => {
// Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Retails_Transaction_details.pdf');
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }


  ngOnInit(): void {
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{},'/retail-transactions',true).subscribe((response)=>{
      this.responseData=response['retailTxn'];
      this.spinner.hide().then(r => console.log('stopped'));
    })
  }

}
