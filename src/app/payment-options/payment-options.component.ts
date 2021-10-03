// @ts-ignore
import { CardValidator } from './../CardValidator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { images } from 'src/environments/environment';
import {User} from '../../models/User';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  constructor(private router: Router) {
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
  amount = 0;
  user: User;
  formBuilder: FormBuilder;
  cardValidator: CardValidator;

  // tslint:disable-next-line: typedef
  ngOnInit() {
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
  logo(num: string) {
    if (num.charAt(0) === '4'){
      this.finalUrl = 'url(' + this.visaUrl + ')';
    }
    if (num.charAt(0) === '5') {
      this.finalUrl = 'url(' + this.masterCardUrl + ')';
    }
    return this.finalUrl;
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
  payment(){
    console.log(this.myForm);
    console.log(this.user);
    this.router.navigate(['/otp']);
  }

}
