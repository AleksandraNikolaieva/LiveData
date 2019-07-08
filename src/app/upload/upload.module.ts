import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadListComponent } from "./upload-list/upload-list.component";
import { UploadFileComponent } from "./upload-file/upload-file.component";
import { UploadHeaderComponent } from "./upload-header/upload-header.component";
import { UploadDetailsComponent } from "./upload-details/upload-details.component";
import { UploadFilePreviewComponent } from "./upload-file-preview/upload-file-preview.component";
import { UploadRoutingModule } from "./upload-routing.module";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@NgModule({
    declarations: [
        UploadListComponent,
        UploadFileComponent,
        UploadHeaderComponent,
        UploadDetailsComponent,
        UploadFilePreviewComponent
    ],
    imports: [CommonModule, UploadRoutingModule]
})
export class UploadModule {}
