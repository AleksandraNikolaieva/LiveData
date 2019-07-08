import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PurchasePageComponent } from './purchase-page/purchase-page.component';

const routes: Routes = [
    {
        path: '',
        component: PurchasePageComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreditsBillingRoutingModule {}
