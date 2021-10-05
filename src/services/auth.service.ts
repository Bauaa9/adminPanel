import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {SubscribeService} from './subscribe.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService,private subscribeService:SubscribeService) {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('userToken');
    // Check whether the token is expired and return
    // true or false
    console.log(token);
    if(token==="null"){
      return false;
    }
    if(this.jwtHelper.isTokenExpired(token)==false){
      this.subscribeService.isLoggedIn.next(true)
      return  true;
    }
    return false;
  }
}
