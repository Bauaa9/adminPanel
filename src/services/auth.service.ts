import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('userToken');
    // Check whether the token is expired and return
    // true or false
    console.log(token);
    if(token==="null"){
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token);
  }
}
