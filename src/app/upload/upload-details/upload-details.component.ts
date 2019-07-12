import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/models';

@Component({
    selector: 'app-upload-details',
    templateUrl: './upload-details.component.html',
    styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent implements OnInit {
    constructor() {}
    @Input() balanceStatus: boolean;
    @Output() balanceCheck = new EventEmitter<number>();

    options: Array<Option> = [
        {
            value: '1',
            label: 'Update email address'
        },
        {
            value: '2',
            label: 'Update company'
        },
        {
            value: '3',
            label: 'Include LinkedIn information'
        }
    ];
    linkTitle: string = 'Continue';
    link: string = '/upload/clean';
    estimatedCost: number = 1000;
    errorMessage: string = "Looks like you don't have enough credits.";
    onChange() {
        this.estimatedCost = this.estimatedCost === 1492 ? 1000 : 1492;
        this.linkTitle =
            this.linkTitle === 'Continue' ? 'Buy more credits' : 'Continue';
        this.link =
            this.link === '/upload/clean' ? '/credits' : '/upload/clean';
        this.balanceCheck.emit(this.estimatedCost);
    }
    ngOnInit() {}
}
