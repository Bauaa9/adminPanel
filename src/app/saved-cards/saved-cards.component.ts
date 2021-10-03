import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { images } from 'src/environments/environment';
import {ApiService} from '../../services/api.service';
import {Card} from '../../Model/Card';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.scss']
})
export class SavedCardsComponent implements OnInit {

  chipLogo = images.chipLogo;
  visaLogo = images.visaLogo;
  masterCardLogo = images.masterCardLogo;
  visaUrl = images.visaUrl;
  masterCardUrl = images.masterCardUrl;
  finalLogoUrl = '';
  //finalSingleUrl = '';
  click = false;
  myForm: any;
  step1: any;
  step2: any;
  step3: any;
  amount = 0;
  card: Card;
  formBuilder: FormBuilder;
  n: number;
  dum:any;

constructor(private router: Router, private service:ApiService,private spinner:NgxSpinnerService) {
    this.card = new Card();
    this.formBuilder = new FormBuilder();
  }

  // tslint:disable-next-line: typedef
ngOnInit() {
    this.myForm = this.formBuilder.group({
      holderName: [
        null,
        [ Validators.required,
          // tslint:disable-next-line: comment-format
          //Validators.pattern('^[ a-zA-Z]+$')
        ]
      ],
      cardNum: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}'),
          Validators.minLength(19),
          Validators.maxLength(19)
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

      cardType : ['', Validators.required]

    });
    //this.convert();
    this.displayCard();
  }

  // tslint:disable-next-line: typedef
addClicked() {
    this.click = true;
    console.log('Fill up the form for adding card');
  }

  // tslint:disable-next-line: typedef
getNum(num: any) {
    {
      this.logo(num);
      console.log(num);
    }
  }

// tslint:disable-next-line: typedef
logo(num: string) {
    if (num.charAt(0) === '4'){
      this.finalLogoUrl = 'url(' + this.visaUrl + ')';
    }
    if (num.charAt(0) === '5') {
      this.finalLogoUrl = 'url(' + this.masterCardUrl + ')';
    }
    return this.finalLogoUrl;
  }

mod10 = (num: string): boolean => {
    console.log('mod:' + num);
    num = num.replace(/\s/g, '');
 // 1. Remove last digit;
    const lastDigit = Number(num[num.length - 1]);
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

  // tslint:disable-next-line: typedef
addCard() {
    this.click = false;
    this.card.customer_id = this.dum.length + 1;
    this.card.card_number = this.card.card_number.replace(/\s/g, '');
  this.spinner.show();
    this.service.api("post",this.card,"/new-card",true)
    .subscribe(
      (resp) => {
        console.log(resp);
          this.spinner.hide();
        this.displayCard();
      },
      (err) => {
        console.log(err);
      }
    );
    this.finalLogoUrl = '';
    this.myForm.reset();
    console.log(this.myForm);
    console.log(this.card);
  }

  // tslint:disable-next-line: typedef
displayCard() {
  this.spinner.show();

  this.service.api("post",{},"/display-cards",true)
  .subscribe(
      (resp:Card[]) => {
        console.log(resp);
        this.dum = resp['allCards'];
        this.convert();
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
        this.spinner.hide();
      }
    );
    console.log(this.dum);
  }

  // tslint:disable-next-line: typedef
convert() {
    for (const dummycard of this.dum){
      console.log(dummycard?.card_number);
      const num = dummycard?.card_number;
      dummycard.card_number = num?.slice(0, 4) + '  '
      + num?.slice(4, 8).replace(/\d/g, 'x') + '  '
      + num?.slice(8, 12).replace(/\d/g, 'x') + '  '
      + num?.slice(-4);
      console.log(dummycard?.card_number);
      dummycard.cvv = dummycard.cvv.slice(0, 3).replace(/\d/g, '*');
      this.logo(dummycard?.card_number);
    }
  }

  // tslint:disable-next-line: typedef
  deleteCard(del: any) {
    console.log(del.card_id);
    console.log(typeof del.card_id)
    this.spinner.show();

    this.service.api("delete",{},"/delete-card/"+del.card_id,true)
    .subscribe(
      (resp) => {
        console.log(resp);
        this.spinner.hide();
        this.displayCard();
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }
}
