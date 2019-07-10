import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models';

@Component({
    selector: 'app-upload-file-preview',
    templateUrl: './upload-file-preview.component.html',
    styleUrls: ['./upload-file-preview.component.scss']
})
export class UploadFilePreviewComponent implements OnInit {
    constructor() {}
    filename = 'list.csv';
    contactsCount = 3018;
    contacts: Array<Contact> = [
        { name: 'Joshua Kim', mail: 'joshua-kim@example.com' },
        { name: 'Jerry Garza', mail: 'jerry-garza@example.com' },
        { name: 'Samantha Jordan', mail: 'samantha94@example.com' },
        { name: 'Maria Barrett', mail: 'maria-92@example.com' },
        { name: 'Amy Powell', mail: 'amypowell@example.com' },
        { name: 'Anthony Sanders', mail: 'anthony85@example.com' },
        { name: 'Bryan Hunter', mail: 'bryan.hunter@example.com' },
        { name: 'Amber Colerman', mail: 'amber93@example.com' }
    ];
    trackByFn(index) {
        return index;
    }
    ngOnInit() {}
}
