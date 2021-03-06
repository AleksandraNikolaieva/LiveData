import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LogInSignUpComponent } from './auth/log-in-sign-up/log-in-sign-up.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountManagementComponent } from './account-management/account-management.component';
import { BillingHistoryComponent } from './billing-history/billing-history.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LogInSignUpComponent,
        data: { isLogin: true }
    },
    {
        path: 'signup',
        component: LogInSignUpComponent,
        data: { isLogin: false }
    },
    {
        path: 'find-prospects',
        component: ProspectsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        component: AccountManagementComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'history',
        component: BillingHistoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'credits',
        loadChildren: './credits-billing/credits-billing.module#CreditsBillingModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'upload',
        loadChildren: './upload/upload.module#UploadModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'api',
        loadChildren: './api-manage/api-manage.module#ApiManageModule',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
