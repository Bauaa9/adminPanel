import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jspdf from 'jspdf';
import {MainServiceService} from '../../services/main-service.service';
import {UserMerchant} from '../../models/userMerchant';
import html2canvas from 'html2canvas';

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

  public convertToPDF()
  {
    var data = document.getElementById('contentToConvert') as HTMLCanvasElement;
    html2canvas(data).then(canvas => {
// Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Transaction_details.pdf'); // Generated PDF
    });
  }


}
