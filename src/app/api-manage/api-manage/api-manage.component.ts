import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { token } from 'src/app/mockData';

@Component({
    selector: 'app-api-manage',
    templateUrl: './api-manage.component.html',
    styleUrls: ['./api-manage.component.scss']
})
export class ApiManageComponent implements OnInit {
    title = 'Manage API';
    apiControl: FormControl;
    token = token;

    constructor() {}
    showBtn = 'show';
    onShowClick() {
        this.showBtn = this.showBtn === 'show' ? 'hide' : 'show';
    }
    onCopy() {
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.token;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    ngOnInit() {
        this.apiControl = new FormControl(this.token);
    }
}
