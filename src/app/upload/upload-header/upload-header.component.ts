import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-upload-header',
    templateUrl: './upload-header.component.html',
    styleUrls: ['./upload-header.component.scss']
})
export class UploadHeaderComponent implements OnInit {
    constructor() {}
    balance: number = 1492;
    ngOnInit() {}
}
