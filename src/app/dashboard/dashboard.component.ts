import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jspdf from 'jspdf';
import {MainServiceService} from '../../services/main-service.service';
import {UserMerchant} from '../../models/userMerchant';


@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:UserMerchant[]=[];

  constructor(private ser:MainServiceService,private http:HttpClient,content: ElementRef) {
    //this.user=this.ser.getallUser();
    //console.log(this.user);

    this.ser.getUsers()
      .subscribe( data => {
        this.user = data;
      });
  }

  ngOnInit(): void {


  }

  @ViewChild('content')content: ElementRef |any;
  public SavePDF(): void {
    let content=this.content.nativeElement;
   let doc = new jspdf('p', 'mm', 'a4');
    let _elementHandlers =
    {
      '#editor':function(element:any,renderer:any){
        return true;
      }
    };


    doc.html(content);

    doc.save('test.pdf');
  }

}
