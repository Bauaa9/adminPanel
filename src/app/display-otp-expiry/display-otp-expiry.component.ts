import { Component, OnInit } from '@angular/core';
import {SubscribeService} from '../../services/subscribe.service';

@Component({
  selector: 'app-display-otp-expiry',
  templateUrl: './display-otp-expiry.component.html',
  styleUrls: ['./display-otp-expiry.component.scss']
})
export class DisplayOtpExpiryComponent implements OnInit {
  cvv:any;
  expiryDate:any;
  constructor(private subscribeService:SubscribeService) { }

  ngOnInit(): void {
    this.cvv = this.subscribeService.cvv;
    this.expiryDate = this.subscribeService.expiryDate;
  }

}
