export class UserMerchant {


pgRefId:String="";
merchantId=0;
paymentType:String="";
totalAmount=0;
orderId:String="";
status:String="";
dataTime:String="";



constructor(value1:String,value2:number,value3:String,value4:number,value5:String,value6:String,value7:String){
  this.pgRefId=value1;
  this.merchantId=value2;
  this.paymentType=value3;
  this.totalAmount=value4;
  this.orderId=value5;
  this.status=value6;
  this.dataTime=value7;
}
}


