import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Report } from 'src/app/models';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
    selector: 'app-report-popup',
    templateUrl: './report-popup.component.html',
    styleUrls: ['./report-popup.component.scss']
})
export class ReportPopupComponent implements OnInit {
    @Output() closePopup: EventEmitter<any> = new EventEmitter();
    @Input() report: Report = {
        date: new Date(2019, 6, 6, 2, 20).toISOString(),
        title: 'South West Region',
        contactsFound: 1492,
        contactsUpdated: 988,
        emailsUpdated: 853,
        companiesUpdated: 664,
        linkedInInfo: 994,
        creditsUsed: 1322
    };

    constructor() {}

    ngOnInit() {
    }

    closedPopup() {
        this.closePopup.emit();
    }
}
