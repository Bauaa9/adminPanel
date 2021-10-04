import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {ModelUserDetails} from '../../models/ModelUserDetails';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails:ModelUserDetails=new ModelUserDetails();
  constructor(private service: ApiService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
   this.getProfileDetails();
  }

  getProfileDetails(){
    this.spinner.show().then(r => console.log('loading'));
    this.service.api("post",this.userDetails,"/get-profile",true).subscribe(data=>{
        console.log(data);
        this.userDetails=data['profileDetails'];
        this.spinner.hide().then(r => console.log('stopped'));
      },
      error=> console.log(error));
  }


  updateProfile(){
    this.spinner.show().then(r => console.log('loading'));
    this.service.api("post",this.userDetails,"/update-profile",true).subscribe(data=>{
        console.log(data);
        this.spinner.hide().then(r => console.log('stopped'));
      },
      error=> console.log(error));
  }

}
