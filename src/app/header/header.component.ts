import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {SubscribeService} from '../../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  username:String;
  constructor(private router: Router,private subscribeService:SubscribeService) {}

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logOut() {
    sessionStorage.setItem("username" , null);
    sessionStorage.setItem("userToken" , null);
    sessionStorage.setItem("isLoggedIn" , null);
    this.subscribeService.isLoggedIn.next(false);
    this.router.navigateByUrl('/home');
  }
}
