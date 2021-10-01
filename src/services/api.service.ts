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
      token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2hpdCIsImV4cCI6MTYzMzA5MTU0OSwiaWF0IjoxNjMzMDczNTQ5fQ.3egSxDCUXAx1qDOwT0fQQQtscBxRCF_LqjuaDfj_G0wrsxF38lTqYLiRNK8uHdzI0sJkYF5413kzDD02IXlSwA';
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
