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
      token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2hpdCIsImV4cCI6MTYzMzEwOTY5NiwiaWF0IjoxNjMzMDkxNjk2fQ.cVlwz7l-BBCQ-h1ublPdHIwdm4qilnegtq16S2WOiDrpKGaNo2jhGLECd7k4B9l3OmCVh0hPt5F5NK98N-txAA';
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
    }
  }

}
