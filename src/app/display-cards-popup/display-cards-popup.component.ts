import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';

export class Item{
  name:any;
  value:string;
}
@Component({
  selector: 'app-display-cards-popup',
  templateUrl: './display-cards-popup.component.html',
  styleUrls: ['./display-cards-popup.component.scss']
})
export class DisplayCardsPopupComponent implements OnInit {
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: Item[] = [];
  ITEMS: Item[] =[]
  list:any

    constructor(private apiService:ApiService,private spinner:NgxSpinnerService) {

      this.spinner.show().then(r => console.log('loading'));
      this.apiService.api("post",{},"/display-cards",true).subscribe(data => {
        this.list=data['allCards'];
        data['allCards'].forEach((element)=>{
          this.ITEMS.push(element.card_id,element.card_number)
        })
        this.list.forEach((element)=>{
          element['card_number'] =    element['card_number'] ?.slice(0, 4) + '  '
            + element['card_number'] ?.slice(4, 8).replace(/\d/g, 'x') + '  '
            + element['card_number'] ?.slice(8, 12).replace(/\d/g, 'x') + '  '
            + element['card_number'] ?.slice(-4);
        })
        console.log(this.ITEMS)
        this.itemsList = this.ITEMS;
        this.radioSelected = "1";
        this.getSelecteditem();
        this.spinner.hide().then(r => console.log('stopped'));
      });

  }

  getSelecteditem(){
    this.radioSel = this.ITEMS.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(item){
    this.getSelecteditem();
  }

  ngOnInit(): void {
  }

}
