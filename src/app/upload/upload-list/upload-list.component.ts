import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-upload-list',
    templateUrl: './upload-list.component.html',
    styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
    constructor() {}
    isUploaded: boolean = false;
    uploadClick(value: boolean): void {
        this.isUploaded = value;
    }
    ngOnInit() {}
}
