import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../services/api.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SignInComponent} from '../sign-in/sign-in.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService,public dialog: MatDialog) {}
  title = 'admin-panel-layout';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openDialog() {
    const dialogConfig=new MatDialogConfig();
    // dialogConfig.disableClose=true;
    //dialogConfig.width="50%";
    //dialogConfig.height="50%";
    this.dialog.open(SignInComponent);
  }
  ngOnInit(): void {
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // tslint:disable-next-line:typedef
  tempFunction() {
    let body= {
     username:'rohit',
      password:'password'
    };
    this.service.api("post",body,'/authenticate').subscribe((response)=>{
      console.log(response)
    })
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  template: '<h2>ornlasdnflasdfsadf</h2>',
})
export class DialogContentExampleDialog {}
