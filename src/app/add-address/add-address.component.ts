import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Address} from '../../models/Address';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address: Address=new Address();

  constructor(private service: ApiService, private router :Router,private spinner:NgxSpinnerService) { }

  ngOnInit():void {
  }

  onSubmit()
  {
    console.log(this.address);
    this.spinner.show().then(r => console.log('loading'));
    this.service.api("post",this.address,"/add-address",true).subscribe(data=>{
        console.log(data);
        this.spinner.hide().then(r => console.log('stopped'));
        this.goToAddressList();
      },
      error=> console.log(error));

  }

  goToAddressList()
  {
    this.router.navigate(['/save-addresses']);
  }




}
