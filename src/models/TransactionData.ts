export class TransactionData {
  all:number=0;
  forToday:number=0;
  byCredit:number=0;
  byDebit:number=0;

  constructor(value1:number,value2:number,value3:number,value4:number){
    this.all=value1;
    this.forToday=value2;
    this.byCredit=value3;
    this.byDebit=value4;

  }

}
