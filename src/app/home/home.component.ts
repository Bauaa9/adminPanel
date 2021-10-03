import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService,public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // tslint:disable-next-line:typedef
  tempFunction() {
    let body= {
     username:'rohit',
      password:'password'
    };
    this.service.api("post",body,'http://localhost:8083/authenticate').subscribe((response)=>{
      console.log(response)
    })
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  template: '<h2>ornlasdnflasdfsadf</h2>',
})
export class DialogContentExampleDialog {}
