import { Component, OnInit } from '@angular/core';
import { images } from 'src/environments/environment';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  bank = images.bank;
  otp = '';
  otperror = '';
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  submitOtp() {

  }
}
