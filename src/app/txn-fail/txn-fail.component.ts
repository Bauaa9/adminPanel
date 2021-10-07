import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-Txn_fail',
  templateUrl: './txn-fail.component.html',
  styleUrls: ['./txn-fail.component.css']
})
export class TxnFailComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit() {
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
    window.onhashchange=function(){window.location.hash="no-back-button";}
  }
}
