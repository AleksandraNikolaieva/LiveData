import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-upload-list',
    templateUrl: './upload-list.component.html',
    styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
    constructor() {}
    isUploaded = false;
    balance: number = 1000;
    isLowBalance: boolean;
    uploadClick(value: boolean): void {
        this.isUploaded = value;
    }
    balanceCheck(value) {
        this.isLowBalance = value > this.balance;
    }
    ngOnInit() {}
}
