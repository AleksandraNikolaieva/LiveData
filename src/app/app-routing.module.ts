import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LogInSignUpComponent } from './auth/log-in-sign-up/log-in-sign-up.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainPageComponent
    },
    {
        path: 'login',
        component: LogInSignUpComponent,
        data: {isLogin: true}
    },
    {
        path: 'signup',
        component: LogInSignUpComponent,
        data: {isLogin: false}
    },
    {
        path: 'credits',
        loadChildren: './credits-billing/credits-billing.module#CreditsBillingModule'
    },
    {
        path: 'upload',
        loadChildren: './upload/upload.module#UploadModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
