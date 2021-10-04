import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {SubscribeService} from '../services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  isLoggedIn:boolean=true;
  constructor(private subscribeService:SubscribeService) { }

  ngOnInit(): void {
    this.subscribeService.isLoggedIn.subscribe(value => {
      if(value==true){
        this.isLoggedIn=true;
        console.log('it is true')
      }
    })
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
