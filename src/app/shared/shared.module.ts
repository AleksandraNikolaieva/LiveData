import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommaNumberPipe } from './pipes/comma-number.pipe';
import { TimeGonePipe } from './pipes/time-gone.pipe';
import { CardComponent } from './card/card.component';
import { BuyCreditsComponent } from './buy-credits/buy-credits.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        IconButtonComponent,
        CommaNumberPipe,
        TimeGonePipe,
        CardComponent,
        BuyCreditsComponent
    ],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [
        IconButtonComponent,
        ReactiveFormsModule,
        CommaNumberPipe,
        TimeGonePipe,
        CardComponent,
        BuyCreditsComponent
    ]
})
export class SharedModule {}
