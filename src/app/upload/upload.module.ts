import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { UploadFilePreviewComponent } from './upload-file-preview/upload-file-preview.component';
import { UploadRoutingModule } from './upload-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MapFieldsComponent } from './map-fields/map-fields.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UploadListComponent,
        UploadFileComponent,
        UploadDetailsComponent,
        UploadFilePreviewComponent,
        MapFieldsComponent
    ],
    imports: [CommonModule, UploadRoutingModule, SharedModule, FormsModule]
})
export class UploadModule {}
