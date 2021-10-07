export class UserMerchant {


pg_ref_id:String="";
merchant_id=0;
payment_type:String="";
total_amount=0;
order_id:String="";
status:String="";
date:String="";



constructor(value1:String,value2:number,value3:String,value4:number,value5:String,value6:String,value7:String){
  this.pg_ref_id=value1;
  this.merchant_id=value2;
  this.payment_type=value3;
  this.total_amount=value4;
  this.order_id=value5;
  this.status=value6;
  this.date=value7;
}
}


