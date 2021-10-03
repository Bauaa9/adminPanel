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
      token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2hpdCIsImV4cCI6MTYzMzI1NTQwNywiaWF0IjoxNjMzMjM3NDA3fQ.SzJGlSfTXySczxbHOt76HqnWx7jyrjqn3M_io7hxpT4cRh_CEviSna16zZ_G43ZpcK2opTX950RFdmCMWLa9rw';
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
