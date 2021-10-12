import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {MatDialogRef} from '@angular/material/dialog';

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

    constructor(private apiService:ApiService,private spinner:NgxSpinnerService,public dialogRef: MatDialogRef<DisplayCardsPopupComponent>) {

      this.spinner.show().then(r => console.log('loading'));
      this.apiService.api("post",{},"/display-cards",true).subscribe(data => {
        this.list=data['allCards'];
        data['allCards'].forEach((element)=>{
          this.ITEMS.push(element.card_id,element.card_number)
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

  getMaskedCardNumber(tempstring:any){
    return  tempstring ?.slice(0, 4) + '  '
      + tempstring ?.slice(4, 8).replace(/\d/g, 'x') + '  '
      + tempstring ?.slice(8, 12).replace(/\d/g, 'x') + '  '
      + tempstring ?.slice(-4);
  }

  onItemChange(item){
    this.getSelecteditem();
    this.dialogRef.close({data:item});
  }

  ngOnInit(): void {
  }

}
