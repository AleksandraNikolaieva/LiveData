import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommaNumberPipe } from './pipes/comma-number.pipe';
import { TimeGonePipe } from './pipes/time-gone.pipe';
import { BackButtonComponent } from './back-button/back-button.component';
import { BuyCreditsComponent } from './buy-credits/buy-credits.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        IconButtonComponent,
        CommaNumberPipe,
        TimeGonePipe,
        CardComponent,
        BuyCreditsComponent,
        BackButtonComponent
    ],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [
        IconButtonComponent,
        ReactiveFormsModule,
        CommaNumberPipe,
        TimeGonePipe,
        BackButtonComponent,
        CardComponent,
        BuyCreditsComponent
    ]
})
export class SharedModule {}