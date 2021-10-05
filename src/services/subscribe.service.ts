import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  isLoggedIn=new Subject<any>();
  showViewStatementTabs= new Subject<boolean>();

  constructor() {
  }
}
