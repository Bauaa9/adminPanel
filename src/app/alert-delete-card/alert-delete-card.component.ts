import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-delete-card',
  templateUrl: './alert-delete-card.component.html',
  styleUrls: ['./alert-delete-card.component.scss']
})
export class AlertDeleteCardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertDeleteCardComponent>) { }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close({data:true});
  }

  popup() {
    this.dialogRef.close();

  }
}
