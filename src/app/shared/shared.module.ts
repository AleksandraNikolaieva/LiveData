import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommaNumberPipe } from './pipes/comma-number.pipe';
import { TimeGonePipe } from './pipes/time-gone.pipe';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        IconButtonComponent,
        CommaNumberPipe,
        TimeGonePipe,
        CardComponent
    ],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [
        IconButtonComponent,
        ReactiveFormsModule,
        CommaNumberPipe,
        TimeGonePipe,
        CardComponent
    ]
})
export class SharedModule {}
