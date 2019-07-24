import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeGonePipe } from './pipes/time-gone.pipe';
import { BackButtonComponent } from './back-button/back-button.component';
import { BuyCreditsComponent } from './buy-credits/buy-credits.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ReportPopupComponent } from './report-popup/report-popup.component';
import { UploadPopupComponent } from './upload-popup/upload-popup.component';
import { CostPipe } from './pipes/cost.pipe';

@NgModule({
    declarations: [
        IconButtonComponent,
        BuyCreditsComponent,
        BackButtonComponent,
        ReportPopupComponent,
        CardComponent,
        TimeGonePipe,
        UploadPopupComponent,
        CostPipe
    ],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [
        ReactiveFormsModule,
        UploadPopupComponent,
        IconButtonComponent,
        BackButtonComponent,
        CardComponent,
        BuyCreditsComponent,
        ReportPopupComponent,
        TimeGonePipe,
        CostPipe
    ]
})
export class SharedModule {}
