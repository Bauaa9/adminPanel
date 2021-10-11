import { ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { TotalTransaction } from 'src/models/Total-Transaction';


@Pipe({
  name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(transaction: any, searchValue: string): TotalTransaction {
    if(!transaction || !searchValue)
    {
      return transaction;
    }
    return transaction.filter(data=>
      data.date_time.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.merchant_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())  ||
      data.trs_id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.expenditure.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.payment_method.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
