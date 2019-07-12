import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiManageComponent } from './api-manage/api-manage.component';
import { ApiSetupComponent } from './api-setup/api-setup.component';
import { ApiManageRoutingModule } from './api-manage-routing.module';
import { ApiUsageComponent } from './api-usage/api-usage.component';
import { PercentageWidthPipe } from './api-usage/percentage-width.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ApiManageComponent,
        ApiSetupComponent,
        ApiUsageComponent,
        PercentageWidthPipe
    ],
    imports: [CommonModule, ApiManageRoutingModule, FormsModule]
})
export class ApiManageModule {}
