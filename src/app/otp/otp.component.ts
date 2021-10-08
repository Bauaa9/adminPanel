import { Component, OnInit } from '@angular/core';
import { images } from 'src/environments/environment';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  bank = images.bank;
  otp = '';
  otpData:any;
  otperror = '';
  txnId;state: Observable<object>;
  constructor(private apiService:ApiService,private spinner:NgxSpinnerService,private router:Router,private route: ActivatedRoute,) {
    this.state = this.route.paramMap.pipe(map(() => window.history.state));
    this.state.forEach((e: any) => {
      this.otpData = {
        txn_id: e['txnId'],
        totalAmt: e['totalAmount'],
      };
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  submitOtp() {
    let body={
      txnId:this.otpData['txn_id'],
      otp:this.otp,
      totalAmt:this.otpData['totalAmt'],
      cardIdToPay:1
    };
    console.log(body);

    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",body,'/verify-otp',true).subscribe(responseData => {
      this.spinner.hide().then(r => console.log('stopped'));
      console.log(responseData)
      if(responseData['status']=="failed"){
        this.router.navigate(['/txn-failed'],);
       return ;
      }
      this.router.navigate(['/txn-success'],);
    },error => {
      this.router.navigate(['/txn-failed'],);
    });
  }
}
