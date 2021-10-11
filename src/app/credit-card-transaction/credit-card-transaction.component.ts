import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Subject} from 'rxjs';
import {SubscribeService} from '../../services/subscribe.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DisplayOtpExpiryComponent} from '../display-otp-expiry/display-otp-expiry.component';


@Component({
  selector: 'app-creditCard-Transaction',
  templateUrl: './credit-card-transaction.component.html',
  styleUrls: ['./credit-card-transaction.component.css']
})
export class CreditCardTransactionComponent implements OnInit {

  responseData:any;
  closeResult: string;   showStatementTabs=false;
  constructor(public dialog: MatDialog
    ,private apiService:ApiService,private spinner:NgxSpinnerService,private subscriptionService:SubscribeService) {
  this.subscriptionService.showViewStatementTabs.subscribe(value => {
    this.showStatementTabs = value;
  })
  }

  getMaskedCardNumber(tempstring:any){
    return  tempstring ?.slice(0, 4) + '  '
      + tempstring ?.slice(4, 8).replace(/\d/g, 'x') + '  '
      + tempstring ?.slice(8, 12).replace(/\d/g, 'x') + '  '
      + tempstring ?.slice(-4);
  }

  ngOnInit() {
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{},'/creditdetails',true).subscribe((response)=>{
      this.responseData=response;
      console.log(this.responseData);
      this.subscriptionService.cvv=response['cardetails']['cvv']
      this.subscriptionService.expiryDate =response['cardetails']['expiryDate']
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
  }

  openStatement() {
    this.subscriptionService.showViewStatementTabs.next(true);
  }

  openDialog() {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    this.dialog.open(DisplayOtpExpiryComponent);
  }
}
