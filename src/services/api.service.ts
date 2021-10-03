import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl="http://localhost:8083";
  constructor(private http: HttpClient) { }

  public api(methodName:string,body:any,url:string, headerWithToken?: boolean){
    let token = localStorage.getItem('userToken');
    let headers={
      'Content-Type':'application/json'
    };
    if(headerWithToken==true){
      token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2hpdCIsImV4cCI6MTYzMzI4MjUxMCwiaWF0IjoxNjMzMjY0NTEwfQ.nopAi1l50zaA8icteAIH0A0O3UXrtlaUJ2dbqfPvQEW1nLaGGLjT6OsUFLs9JEXLRyHSRWWfOWL1tZuHEZh_FA';
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
