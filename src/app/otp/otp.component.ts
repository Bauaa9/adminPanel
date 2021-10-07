import { Component, OnInit } from '@angular/core';
import { images } from 'src/environments/environment';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  bank = images.bank;
  otp = '';
  otperror = '';
  constructor(private apiService:ApiService,private spinner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  submitOtp() {
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{
      txnId:1,
      otp:this.otp,
      totalAmt:this.router.getCurrentNavigation().extras.state['totalAmount']
    },'/verify-otp',true).subscribe(responseData => {
      this.spinner.hide().then(r => console.log('stopped'));
      this.router.navigate(['/txn-success'],);
    },error => {
      this.router.navigate(['/txn-failed'],);
    });
  }
}
