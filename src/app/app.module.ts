import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewPortComponent } from './view-port/view-port.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { CreditsComponent } from './credits/credits.component';
import { CardComponent } from './card/card.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobItemComponent } from './job-item/job-item.component';
import { TimeGonePipe } from './pipes/time-gone.pipe';
import { CommaNumberPipe } from './pipes/comma-number.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ViewPortComponent,
        IconButtonComponent,
        CreditsComponent,
        CardComponent,
        JobsListComponent,
        JobItemComponent,

        TimeGonePipe,
        CommaNumberPipe,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
