import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconButtonComponent } from "./icon-button/icon-button.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommaNumberPipe } from "./pipes/comma-number.pipe";
import { TimeGonePipe } from "./pipes/time-gone.pipe";

@NgModule({
    declarations: [IconButtonComponent, CommaNumberPipe, TimeGonePipe],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [
        IconButtonComponent,
        ReactiveFormsModule,
        CommaNumberPipe,
        TimeGonePipe
    ]
})
export class SharedModule {}
