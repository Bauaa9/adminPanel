import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../services/api.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SignInComponent} from '../sign-in/sign-in.component';
import {SubscribeService} from '../../services/subscribe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService,public dialog: MatDialog,private subscribeService:SubscribeService) {}
  title = 'admin-panel-layout';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openCustomerLoginDialog() {
    this.subscribeService.isMerchantLogin=false;
    this.dialog.open(SignInComponent);
  }
  ngOnInit(): void {
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
    window.onhashchange=function(){window.location.hash="no-back-button";}
  }

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

  openMerchantLoginDialog() {
    this.subscribeService.isMerchantLogin=true;
    this.dialog.open(SignInComponent);
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  template: '<h2>ornlasdnflasdfsadf</h2>',
})
export class DialogContentExampleDialog {}
