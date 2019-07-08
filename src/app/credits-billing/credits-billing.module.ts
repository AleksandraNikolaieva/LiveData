import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchasePageComponent } from './purchase-page/purchase-page.component';
import { BillingDetailsPageComponent } from './billing-details-page/billing-details-page.component';
import { CreditsBillingRoutingModule } from './credits-billing-routing.module';


@NgModule({
  declarations: [PurchasePageComponent, BillingDetailsPageComponent],
  imports: [
    CommonModule, FormsModule, CreditsBillingRoutingModule
  ]
})
export class CreditsBillingModule { }
