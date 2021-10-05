import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {SubscribeService} from '../services/subscribe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  isLoggedIn:boolean=false;
  constructor(private subscribeService:SubscribeService,private router:Router) { }

  ngOnInit(): void {
    this.subscribeService.isLoggedIn.subscribe(value => {
      if(value){
        this.isLoggedIn=true;
        console.log('it is true')
      }else{
        this.isLoggedIn=false;
        this.router.navigate(['/home'])
      }
    })
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
