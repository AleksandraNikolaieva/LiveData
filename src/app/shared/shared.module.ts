import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconButtonComponent } from "./icon-button/icon-button.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommaNumberPipe } from "./pipes/comma-number.pipe";
import { TimeGonePipe } from "./pipes/time-gone.pipe";
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
    declarations: [IconButtonComponent, CommaNumberPipe, TimeGonePipe, BackButtonComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [
        IconButtonComponent,
        ReactiveFormsModule,
        CommaNumberPipe,
        TimeGonePipe,
        BackButtonComponent
    ]
})
export class SharedModule {}
