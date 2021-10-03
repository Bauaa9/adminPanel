import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RetailTransactionComponent} from './Retail-Transaction/Retail-Transaction.component';
import {CreditCardTransactionComponent} from './creditCard-Transaction/creditCard-Transaction.component';
import {ProfileComponent} from './profile/profile.component';
import {SaveAddressComponent} from './save-address/save-address.component';
import {ViewStatementComponent} from './view-statement/view-statement.component';
import {UnbilledTxnComponent} from './unbilled-txn/unbilled-txn.component';
import {LastStatementComponent} from './last-statement/last-statement.component';
import {CustTransactionComponent} from './cust-transaction/cust-transaction.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PaymentOptionsComponent} from './payment-options/payment-options.component';
import {SavedCardsComponent} from './saved-cards/saved-cards.component';
import {OtpComponent} from './otp/otp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {InputMaskAngularModule} from 'input-mask-angular';
import {SavedDetailsComponent} from './saved-details/saved-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    RetailTransactionComponent,
    CreditCardTransactionComponent,
    CustTransactionComponent,
    SaveAddressComponent,
    ProfileComponent,
    ViewStatementComponent,
    UnbilledTxnComponent,
    LastStatementComponent,
    PaymentOptionsComponent,
    OtpComponent,
    SavedCardsComponent,
    SavedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    InputMaskAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
