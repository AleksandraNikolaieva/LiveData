import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInSignUpComponent } from './log-in-sign-up/log-in-sign-up.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LogInSignUpComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AuthModule { }
