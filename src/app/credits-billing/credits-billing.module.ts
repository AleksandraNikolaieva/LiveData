import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchasePageComponent } from './purchase-page/purchase-page.component';
import { BillingDetailsPageComponent } from './billing-details-page/billing-details-page.component';


@NgModule({
  declarations: [PurchasePageComponent, BillingDetailsPageComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [PurchasePageComponent, BillingDetailsPageComponent]
})
export class CreditsBillingModule { }
