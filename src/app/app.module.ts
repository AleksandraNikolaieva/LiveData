import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CreditsComponent } from "./credits/credits.component";
import { CardComponent } from "./card/card.component";
import { JobsListComponent } from "./jobs-list/jobs-list.component";
import { JobItemComponent } from "./job-item/job-item.component";
import { TimeGonePipe } from "./pipes/time-gone.pipe";
import { CommaNumberPipe } from "./pipes/comma-number.pipe";
import { MainPageComponent } from "./main-page/main-page.component";
import { AppRoutingModule } from "./app-routing.module";
<<<<<<< HEAD
import { SharedModule } from "./shared/shared.module";
=======
import { CreditsOffersComponent } from './purchase-page/credits-offers/credits-offers.component';
>>>>>>> 256940c658130fce91d1218528211098b1c8f52b

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CreditsComponent,
        CardComponent,
        JobsListComponent,
        JobItemComponent,

        TimeGonePipe,
        CommaNumberPipe,
        MainPageComponent,
        CreditsOffersComponent
    ],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
