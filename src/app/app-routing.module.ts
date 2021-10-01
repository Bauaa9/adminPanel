import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {RetailTransactionComponent} from './Retail-Transaction/Retail-Transaction.component';
import {CreditCardTransactionComponent} from './creditCard-Transaction/creditCard-Transaction.component';
import {CustTransactionComponent} from './cust-transaction/cust-transaction.component';
import {SaveAddressComponent} from './save-address/save-address.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewStatementComponent} from './view-statement/view-statement.component';
import {UnbilledTxnComponent} from './unbilled-txn/unbilled-txn.component';
import {LastStatementComponent} from './last-statement/last-statement.component';
import {SaveCardComponent} from './save-card/save-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'retail-transaction', component: RetailTransactionComponent},
  {path: 'creditCard-transaction', component: CreditCardTransactionComponent},
  {path: 'cust-Transaction', component: CustTransactionComponent},
  {path: 'save-cards', component: SaveCardComponent},
  {path: 'save-adresses', component: SaveAddressComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'view-stmt', component: ViewStatementComponent},
  {path: 'unbilled_txn', component: UnbilledTxnComponent},
  {path: 'last-statement', component:LastStatementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
