import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Color,Label} from 'ng2-charts';
import { ChartType } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import {MainServiceService} from '../../services/main-service.service';
import {Graph} from '../../models/graph';





@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  count:number[]=[];
  dates:string[]=[];
  graphData:Graph[]=[];

  sample_arr: {
    x: number;
    y: number;
    }[ ] = [];

  constructor(private ser:MainServiceService,http:HttpClient) { }

  ngOnInit(): void {

    this.ser.getGraphData("Year")
    .subscribe( data4=> {
      //this.perData=data4;
      console.log('graph ke andr',data4);
      //this.graphData=data4

      for (let i = 0; i < data4.length; i++) {
        //console.log(data4[i].date);
        this.dates.push(data4[i].date);
        this.count.push(data4[i].transaction);
      }

    });



    //console.log('x,y',this.sample_arr);
  }




  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.dates;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.count, label: 'LAST WEEK TRANSACTION TREND' },

  ];




}
