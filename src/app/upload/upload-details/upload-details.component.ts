import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models';

@Component({
    selector: 'app-upload-details',
    templateUrl: './upload-details.component.html',
    styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent implements OnInit {
    constructor() {}

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
    estimatedCost = 1492;
    ngOnInit() {}
}
