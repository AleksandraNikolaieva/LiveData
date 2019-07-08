import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadListComponent } from "./upload-list/upload-list.component";

const routes: Routes = [
    {
        path: "",
        component: UploadListComponent,
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})
export class WorkshopsRoutingModule {}
