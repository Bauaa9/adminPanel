import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Address} from '../../models/Address';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address: Address=new Address();

  constructor(private service: ApiService, private router :Router) { }

  ngOnInit():void {
  }

  onSubmit()
  {
    console.log(this.address);
    this.addAddress();

  }

  addAddress()
  {
    this.service.api("post",this.address,"/add-address",true).subscribe(data=>{
      console.log(data);
      this.goToAddressList();
    },
    error=> console.log(error));
  }


  goToAddressList()
  {
    this.router.navigate(['/save-adresses']);
  }




}
