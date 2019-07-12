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
import { report } from '../../mockData';

@Component({
    selector: 'app-upload-popup',
    templateUrl: './upload-popup.component.html',
    styleUrls: ['./upload-popup.component.scss']
})
export class UploadPopupComponent implements OnInit {
    @Output() closePopup: EventEmitter<any> = new EventEmitter();
    @ViewChild('emailInput') emailField: ElementRef;
    @Input() report: Report = report;
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
