import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {RetailTransactionComponent} from './retail-transaction/retail-transaction.component';
import {CreditCardTransactionComponent} from './credit-card-transaction/credit-card-transaction.component';
import {CustTransactionComponent} from './cust-transaction/cust-transaction.component';
import {SaveAddressComponent} from './save-address/save-address.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewStatementComponent} from './view-statement/view-statement.component';
import {UnbilledTxnComponent} from './unbilled-txn/unbilled-txn.component';
import {LastStatementComponent} from './last-statement/last-statement.component';
import {SavedCardsComponent} from './saved-cards/saved-cards.component';
import {PaymentOptionsComponent} from './payment-options/payment-options.component';
import {OtpComponent} from './otp/otp.component';
import {AddAddressComponent} from './add-address/add-address.component';
import {AuthGuard} from '../services/auth.guard';
import {TransactionComponent} from './transaction/transaction.component';
import {TxnFailComponent} from './txn-fail/txn-fail.component';
import {TxnSuccessComponent} from './txn-success/txn-success.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full',component: HomeComponent  },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]  },
  {path: 'retail-transaction', component: RetailTransactionComponent,canActivate: [AuthGuard]},
  {path: 'creditCard-transaction', component: CreditCardTransactionComponent,canActivate: [AuthGuard] },
  {path: 'cust-transaction', component: CustTransactionComponent,canActivate: [AuthGuard]},
  { path: 'details', component: SavedCardsComponent,canActivate: [AuthGuard]},
  {path: 'save-addresses', component: SaveAddressComponent,canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},
  {path: 'view-stmt', component: ViewStatementComponent,canActivate: [AuthGuard]},
  {path: 'unbilled_txn', component: UnbilledTxnComponent,canActivate: [AuthGuard]},
  {path: 'last-statement', component:LastStatementComponent,canActivate: [AuthGuard]},
  { path: 'payment', component: PaymentOptionsComponent,canActivate: [AuthGuard]},
  { path: 'otp', component: OtpComponent,canActivate: [AuthGuard]},
  {path: 'add-address', component: AddAddressComponent,canActivate: [AuthGuard]},

  {path:'merchant-transaction',component:TransactionComponent,canActivate: [AuthGuard]},
  {path:'merchant-dashboard',component:DashboardComponent,canActivate: [AuthGuard]},

  {path:'txn-success',component:TxnSuccessComponent,canActivate: [AuthGuard]},
  {path:'txn-failed',component:TxnFailComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
