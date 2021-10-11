import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DisplayCardsPopupComponent} from '../display-cards-popup/display-cards-popup.component';

@Component({
  selector: 'app-cust-transaction',
  templateUrl: './cust-transaction.component.html',
  styleUrls: ['./cust-transaction.component.css']
})
export class CustTransactionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    //dialogConfig.width="50%";
    //dialogConfig.height="50%";
    this.dialog.open(DisplayCardsPopupComponent);
  }

  ngOnInit() {
    this.openDialog();
  }

}
