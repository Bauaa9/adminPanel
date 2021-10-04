import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {CustomerLogin} from '../../models/customerLogin';
import {NgxSpinnerService} from 'ngx-spinner';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user:CustomerLogin;

  constructor(private service:ApiService,private router: Router,private spinner:NgxSpinnerService,
              public dialogRef: MatDialogRef<SignInComponent>) {
    this.user=new CustomerLogin();
  }

  ngOnInit(): void {
  }


  validate()
  {
    this.spinner.show().then(r => console.log('loading'));
    this.service.api("post",this.user,"/authenticate",).subscribe(data=>{
      console.log(data);
      this.dialogRef.close();
      sessionStorage.setItem("username" , this.user.username);
      sessionStorage.setItem("userToken" , data['token']);
      this.spinner.hide().then(r => console.log('stopped'));
      this.router.navigateByUrl('/dashboard');
    })
  }
}
