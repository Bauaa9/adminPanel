import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl="";
  constructor(private http: HttpClient) { }

  public api(methodName:string,body:any,url:string, headerWithToken?: boolean){
    let token = localStorage.getItem('userToken');
    let headers={
      'content-type':'application/json'
    };
    if(headerWithToken==true){
      headers = {
        'content-type':'application/json',
        // @ts-ignore
        'Authorization':'Bearer '+token
      }
    }
    switch (methodName) {
      case "get":
        return this.http.get(this.baseUrl+url);

      case "post":
        return this.http.post(this.baseUrl+url,body,{headers:headers});
    }
  }

}
