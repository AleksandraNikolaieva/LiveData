import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PurchasePageComponent } from './purchase-page/purchase-page.component';
import { BillingDetailsPageComponent } from './billing-details-page/billing-details-page.component';
import { CreditsBillingRoutingModule } from './credits-billing-routing.module';
import { CreditsOffersComponent } from './credits-offers/credits-offers.component';
import { SharedModule } from '../shared/shared.module';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
    declarations: [
        PurchasePageComponent,
        BillingDetailsPageComponent,
        CreditsOffersComponent,
        NumberOnlyDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CreditsBillingRoutingModule,
        SharedModule
    ]
})
export class CreditsBillingModule {}
