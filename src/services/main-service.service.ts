import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {UserMerchant} from '../models/userMerchant';
import {TransactionData} from '../models/TransactionData';
import {Graph} from '../models/graph';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  user:UserMerchant[]=[];
  transaction:TransactionData[]=[];
  graphData:Graph[]=[];
  totalAmount:number=0;
  duration:String='';

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:8083/show';
  private transactionUrl='http://localhost:8083/firstrow';
  private percentageUrlUrl='http://localhost:8083/percentagedata';
  token = localStorage.getItem('userToken');
   headers={
    'Content-Type':'application/json',
     'Authorization':'Bearer '+this.token
   };

  public  getallUser():UserMerchant[]{
    let url = 'http://localhost:8083/show';
    this.http.get<UserMerchant[]>(url,{headers:this.headers}).subscribe(
      res=>{
        console.log(res);
        this.user=res;
        console.log(this.user);
        console.log("xxxx");

        //this.user.push(res[0]);
      },
      err=>{
        alert("Error aa gaya !")
      }
    );
    //console.log(this.user);
    return this.user;
}

public getUsers() {
  return this.http.get<UserMerchant[]>(this.url,{headers:this.headers});
}

public getTransactionData() {
  return this.http.get<TransactionData[]>(this.transactionUrl,{headers:this.headers});
}

public getFilterd(filterDuration:String){
  let filterUrl='http://localhost:8083/filterBy/'+filterDuration;
  return this.http.get<TransactionData[]>(filterUrl,{headers:this.headers});
}

public getPercentageData(){
  return this.http.get<number[]>(this.percentageUrlUrl,{headers:this.headers});
}

public getGraphData(duration:String){
  let graphUrl='http://localhost:8083/graphdata/'+duration;
  return this.http.get<Graph[]>(graphUrl,{headers:this.headers});
}

 setDuration(x:String):String {
   //console.log("inside set",x);

  //this.duration=x;
  if(x==""){
    this.duration="Week";
    console.log('inside set',this.duration);
   return this.duration;

  }
  else if(x=="Today"){
    this.duration="Week";
    console.log('inside set',this.duration);
    return this.duration;
  }
  else{
    this.duration=x;
    console.log('inside set',this.duration);
    return this.duration;
   // this.duration;
    }

  }


  getDuration():String{
    console.log('inside get',this.duration);
    return this.duration;
  }




}
