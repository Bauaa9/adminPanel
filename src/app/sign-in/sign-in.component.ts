import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {CustomerLogin} from '../../models/customerLogin';
import {NgxSpinnerService} from 'ngx-spinner';
import {MatDialogRef} from '@angular/material/dialog';
import {SubscribeService} from '../../services/subscribe.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user:CustomerLogin;

  constructor(private service:ApiService,private router: Router,private spinner:NgxSpinnerService,
              public dialogRef: MatDialogRef<SignInComponent>,private subscribeService:SubscribeService) {
    this.user=new CustomerLogin();
  }

  ngOnInit(): void {
  }


  validate()
  {
    let url = '/authenticate';
    let navigationUrl='/cust-transaction';
    this.spinner.show().then(r => console.log('loading'));
    if(this.subscribeService.isMerchantLogin==true){
      //merchant login api
      url='/authenticate-merchant';
      navigationUrl='/merchant-dashboard';

    }
    this.service.api("post",this.user,url).subscribe(data=>{
      this.dialogRef.close();
      this.subscribeService.isLoggedIn.next(true)
      localStorage.setItem("username" , this.user.username);
      localStorage.setItem("userToken" , data['token']);
      this.spinner.hide().then(r => console.log('stopped'));
      if(this.subscribeService.isMerchantLogin==true) {
        this.subscribeService.isMerchantSubscribe.next(true);
      }
      this.router.navigateByUrl(navigationUrl);
    })
  }
}
