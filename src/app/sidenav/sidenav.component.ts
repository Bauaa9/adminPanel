import { Component, OnInit } from '@angular/core';
import {SubscribeService} from '../../services/subscribe.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isMerchantLogin:any;
  constructor(private subscribeService:SubscribeService) {
    this.isMerchantLogin = this.subscribeService.isMerchantLogin;
  }

  ngOnInit(): void {
  }

}
