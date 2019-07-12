import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    Input
} from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Report } from 'src/app/models';

@Component({
    selector: 'app-upload-popup',
    templateUrl: './upload-popup.component.html',
    styleUrls: ['./upload-popup.component.scss']
})
export class UploadPopupComponent implements OnInit {
    @Output() closePopup: EventEmitter<any> = new EventEmitter();
    @ViewChild('emailInput') emailField: ElementRef;
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
    userEmail: string;
    inputActive = false;
    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.userEmail = this.authService.email;
    }
    closedPopup() {
        this.closePopup.emit();
    }

    editEmail() {
        this.inputActive = true;
        setTimeout(() => {
            this.emailField.nativeElement.focus();
        }, 0);
    }
}
