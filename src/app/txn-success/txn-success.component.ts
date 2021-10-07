import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Txn_Success',
  templateUrl: './txn-success.component.html',
  styleUrls: ['./txn-success.component.css']
})
export class TxnSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
    window.onhashchange=function(){window.location.hash="no-back-button";}
  }

}
