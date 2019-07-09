import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconButtonComponent } from "./icon-button/icon-button.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        IconButtonComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        IconButtonComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule {}
