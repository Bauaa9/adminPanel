import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  tempFunction() {
    let body= {
     username:'rohit',
      password:'password'
    };
    this.service.api("post",body,'http://localhost:8083/authenticate').subscribe((response)=>{
      console.log(response)
    })
  }
}
