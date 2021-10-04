import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl="http://localhost:8083";
  constructor(private http: HttpClient) { }

  public api(methodName:string,body:any,url:string, headerWithToken?: boolean){
    let token = sessionStorage.getItem('userToken');
    let headers={
      'Content-Type':'application/json'
    };
    console.log(token)
    if(headerWithToken==true){
      headers = {
        'Content-Type':'application/json',
        // @ts-ignore
        'Authorization':'Bearer '+token
      }
    }
    switch (methodName) {
      case "get":
        return this.http.get(this.baseUrl+url);

      case "post":
        return this.http.post(this.baseUrl+url,body,{headers:headers});

      case "delete":
        return this.http.delete(this.baseUrl+url,{headers:headers});
    }
  }

}
