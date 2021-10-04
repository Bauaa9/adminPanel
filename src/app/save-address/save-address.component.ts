import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Address} from '../../models/Address';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-save-address',
  templateUrl: './save-address.component.html',
  styleUrls: ['./save-address.component.css']
})
export class SaveAddressComponent implements OnInit {

  address : any=[];
  constructor(private service: ApiService, private router: Router,private spinner:NgxSpinnerService) { }

  ngOnInit() {

    this.getAddress();


  }

  public getAddress()
  {
    this.spinner.show().then(r => console.log('loading'));

    this.service.api("post",{},"/addresses",true).subscribe(data=>{
      this.address=data['addresses'];
      this.spinner.hide().then(r => console.log('stopped'));
    });
  }

  public updateAddress(id: number)
  {
    console.log(id);
    this.router.navigate(['update-address',id]);

  }

  deleteAddress(id:number)
  {
    console.log(id);
    this.spinner.show().then(r => console.log('loading'));

    this.service.api("delete",{},"/delete/address/"+id,true).subscribe(data=>{
      console.log(data);
      this.spinner.hide().then(r => console.log('stopped'));
      this.getAddress();
    })
  }

  selectAddress(id:number)
  {

  }



}

