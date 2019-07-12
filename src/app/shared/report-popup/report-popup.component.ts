import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Report } from 'src/app/models';
import { report } from '../../mockData';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
    selector: 'app-report-popup',
    templateUrl: './report-popup.component.html',
    styleUrls: ['./report-popup.component.scss']
})
export class ReportPopupComponent implements OnInit {
    downloadPopup = false;
    inputActive = false;
    userEmail: string;
    @Output() closePopup: EventEmitter<any> = new EventEmitter();
    @ViewChild('emailInput') emailField: ElementRef;
    @Input() report: Report = report;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.userEmail = this.authService.email;
    }

    closedPopup() {
        this.closePopup.emit();
    }

    showDownload() {
        this.downloadPopup = true;
    }

    editEmail() {
        this.inputActive = true;
        setTimeout(() => {
            this.emailField.nativeElement.focus();
          }, 0);
    }
}
