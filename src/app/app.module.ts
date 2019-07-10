import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreditsComponent } from './credits/credits.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobItemComponent } from './job-item/job-item.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ProspectsComponent } from './prospects/prospects.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CreditsComponent,
        JobsListComponent,
        JobItemComponent,

        MainPageComponent,

        ProspectsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AuthModule,
        AppRoutingModule,
        SharedModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
