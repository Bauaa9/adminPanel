import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {ModelUserDetails} from '../../models/ModelUserDetails';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showAlertMessage=false;
  requiredForm: FormGroup;

  userDetails:ModelUserDetails=new ModelUserDetails();

  //Create required field validator for name
  myForm() {
    this.requiredForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phoneNo: ['', [Validators.required ,Validators.pattern("^[789][0-9]{9}$")]]
    });

  }
  constructor(private service: ApiService,private spinner:NgxSpinnerService,private fb: FormBuilder) {
    this.myForm();
  }

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
    if (this.requiredForm.valid){
      this.spinner.show().then(r => console.log('loading'));
      this.service.api("post",this.userDetails,"/update-profile",true).subscribe(data=>{
          console.log(data);
          this.showAlertMessage=true;
          this.spinner.hide().then(r => console.log('stopped'));
        },
        error=> console.log(error));
    }


  }

  closeAlert() {
    this.showAlertMessage=false;
  }
}
