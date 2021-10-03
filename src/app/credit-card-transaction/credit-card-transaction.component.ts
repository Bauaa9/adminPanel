import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-creditCard-Transaction',
  templateUrl: './credit-card-transaction.component.html',
  styleUrls: ['./credit-card-transaction.component.css']
})
export class CreditCardTransactionComponent implements OnInit {

  responseData:any;
  closeResult: string;
  constructor(private apiService:ApiService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{},'/creditdetails',true).subscribe((response)=>{
      this.responseData=response;
      console.log(this.responseData['totaloutstanding'])
      this.spinner.hide().then(r => console.log('stopped'));
    })
  }

  open(content) {
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  private getDismissReason(reason: any): string {
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return `with: ${reason}`;
    // }
    return 'sdf';
  }}
