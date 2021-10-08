// @ts-ignore
import { CardValidator } from './../CardValidator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { images } from 'src/environments/environment';
import {User} from '../../models/User';
import {ApiService} from '../../services/api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';
import * as CryptoJS from 'crypto-js';
import {DisplayCardsPopupComponent} from '../display-cards-popup/display-cards-popup.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  constructor(private router: Router,private apiService:ApiService,private spinner:NgxSpinnerService,public dialog: MatDialog) {
    this.user = new User();
    this.formBuilder = new FormBuilder();

  }

  slytherin = images.slytherin;
  combinedLogo = images.combinedLogo;
  visaUrl = images.visaUrl;
  masterCardUrl = images.masterCardUrl;
  finalUrl = '';
  paymentGif = images.paymentGif;
  myForm!: FormGroup;
  amount = this.router.getCurrentNavigation().extras.state['totalAmount'];
  user: User;
  formBuilder: FormBuilder;
  cardValidator: CardValidator;
  apiTxnId:any;
  apiMerchantName:any;

  generateTxnId(){
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{
      'secretKey':'rohit',
      'merchentId':1,
      'orderId':1
    },'/generate-id',true).subscribe(responseData => {
      this.spinner.hide().then(r => console.log('stopped'));
      console.log('rohit : '+responseData);
      this.apiTxnId=responseData['body']['pgRefId'];
      this.apiMerchantName=responseData['body']['apiMerchantName'];
      console.log('rohit : '+this.apiTxnId);
    });
  }

  getMerchantData(){
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",{
    },'/generate-id',true).subscribe(responseData => {
      this.generateTxnId();
    });
  }


  openDialog() {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    //dialogConfig.width="50%";
    //dialogConfig.height="50%";
    this.dialog.open(DisplayCardsPopupComponent);
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // this.openDialog();
    this.generateTxnId();
    this.myForm = this.formBuilder.group({
      holderName: [
        null,
        [ Validators.required,
          // Validators.pattern('^[ a-zA-Z]+$')
        ]
      ],
      cardNum: [
        null,
        [
          Validators.required,
          Validators.pattern('^[4,5][0-9]{3}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}'),
          Validators.minLength(16),
          Validators.maxLength(19),
          //this.cardValidator.luhnValidator()
        ]
      ],
      cvv: [
        null, [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(3),
          Validators.maxLength(3)
        ]
      ],

      expDate : ['', Validators.required],

      type : ['', Validators.required]

    });

  }

  // tslint:disable-next-line: typedef
  getNum(num: any) {
    {
      this.logo(num);
      console.log(num);
    }
  }

  // tslint:disable-next-line: typedef
  logo(num: any) {
    if (num.charAt(0) === '4'){
      this.finalUrl = 'url(' + this.visaUrl + ')';
    }
    if (num.charAt(0) === '5') {
      this.finalUrl = 'url(' + this.masterCardUrl + ')';
    }
    return this.finalUrl;
  }

  mod10 = (num:any ): boolean => {
    console.log('mod:' + num);
    num = num?.replace(/\s/g, '');
 // 1. Remove last digit;
    const lastDigit = Number(num[num?.length - 1]);
 // 2. Reverse card number
    const reverseCardNumber = num
   .slice(0, num.length - 1)
   .split('')
   .reverse()
   .map(x => Number(x));
    let sum = 0;
 // 3. + 4. Multiply by 2 every digit on odd position.
 // Subtract 9 if digit > 9
    for (let i = 0; i <= reverseCardNumber.length - 1; i += 2){
      reverseCardNumber[i] = reverseCardNumber[i] * 2;
      if (reverseCardNumber[i] > 9){
        reverseCardNumber[i] = reverseCardNumber[i] - 9;
      }
    }
// 5. Make the sum of obtained values from step 4.
    sum = reverseCardNumber
  .reduce((acc, currValue) => (acc + currValue), 0);
// 6. Calculate modulo 10 of the sum from step 5 and the last digit.
// If it's 0, you have a valid card number :)
    return ((sum + lastDigit) % 10 === 0);
}


   encryptUsingAES256(cardNumber:string) {
    let _key = CryptoJS.enc.Utf8.parse("slytherin");
    let _iv = CryptoJS.enc.Utf8.parse("slytherin");
    return  CryptoJS.AES.encrypt(
      JSON.stringify(cardNumber), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
  }

  // tslint:disable-next-line: typedef
  payment(){
    let body={
      "cardType":this.user.type,
      // "cardType":"credit",
      "cardNumber":this.encryptUsingAES256(this.user.cardNum),
      "cvv":this.user.cvv,
      "holderName":this.user.holderName,
      "expDate":this.user.expDate,
      "totalAmt":this.amount,
      "pgRefId":this.apiTxnId,
      "merchantName":this.apiMerchantName,
      "paymentMethod":this.user.type,
    };
    console.log(body)
    this.spinner.show().then(r => console.log('loading'));
    this.apiService.api("post",body,'/process-payment',true).subscribe(data => {
      this.spinner.hide().then(r => console.log('stopped'));
      console.log(data)
      if (data['status'] == 'valid')
        this.router.navigateByUrl('/otp', {state : { totalAmount:this.amount,txnId:data['txn_id']}},);
      else{
        let errors:String='';
        console.log(data['error']);
        if(data['error'].length>0){
          let listApiError = JSON.parse(JSON.stringify(data['error']))
          //let list:any= JSON.parse(JSON.stringify('[rohit,tejas]'))
          console.log(listApiError)
          let list1:[]=listApiError.split(',');
          list1.forEach((value:string, index) => {
            if(index==0){
              value = value.substring(1,value.length)
              console.log(value)
            }
            if(index==list1.length-1){
              value = value.substring(0,value.length-1)
              console.log(value)

            }

            if(value=='err_invalid_card_type'){
              errors+='Invalid card type\n';
            }
            if(value=='err_invalid_card_name'){
              errors+='Invalid holder name\n';
            }
            if(value=='err_invalid_card_date'){
              errors+='Invalid expiry date\n';
            }
            if(value=='err_invalid_card_cvv'){
              errors+='Invalid cvv\n';
            }
            if(value=='err_amount_limit_exceeded'){
              errors+='Amount limit exceeded\n';
            }
            if(value=='err_invalid_card_number'){
              errors+='Invalid card number\n';
            }
          })

          // for(let i=0;i<listApiError.length;i++){

          // let e=listApiError[i];
          //console.log(e);

          //}
        }
        console.log(errors);
        alert(errors);
      }

    });
  }






}
