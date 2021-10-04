import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Address} from '../../models/Address';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-save-address',
  templateUrl: './save-address.component.html',
  styleUrls: ['./save-address.component.css']
})
export class SaveAddressComponent implements OnInit {

  address : any=[];
  constructor(private service: ApiService, private router: Router) { }

  ngOnInit() {

    this.getAddress();


  }

  public getAddress()
  {
    this.service.api("post",{},"/addresses",true).subscribe(data=>{
      this.address=data;
    });
  }

  public updateAddress(id: number)
  {
    console.log(id);
    this.router.navigate(['update-address',id]);

  }

  deleteAddress(id:number)
  {
    this.service.api("delete",{},"/delete"+id,true).subscribe(data=>{
      console.log(data);
      this.getAddress();
    })
  }

  selectAddress(id:number)
  {

  }



}

