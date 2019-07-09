import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadListComponent } from './upload-list/upload-list.component';
import { MapFieldsComponent } from './map-fields/map-fields.component';

const routes: Routes = [
    {
        path: '',
        component: UploadListComponent,
        pathMatch: 'full'
    },
    {
        path: 'clean',
        component: MapFieldsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})
export class UploadRoutingModule {}
