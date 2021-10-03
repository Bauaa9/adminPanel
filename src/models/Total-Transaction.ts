export class TotalTransaction {

  constructor(public txnDate:string,
              public merchantName: string,
              public orderID: number,
              public paymentID: number,
              public amount: number,
              public paymentDetail: string,
              public paymentMethod: string,
              public status: string){

              }
}
