import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Report } from 'src/app/models';
import { report } from '../../mockData';

@Component({
    selector: 'app-report-popup',
    templateUrl: './report-popup.component.html',
    styleUrls: ['./report-popup.component.scss']
})
export class ReportPopupComponent implements OnInit {
    @Output() closePopup: EventEmitter<any> = new EventEmitter();
    @Input() report: Report = report;

    constructor() {}

    ngOnInit() {
    }

    closedPopup() {
        this.closePopup.emit();
    }
}
