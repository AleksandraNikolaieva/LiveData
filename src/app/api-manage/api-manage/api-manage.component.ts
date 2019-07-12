import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-api-manage',
    templateUrl: './api-manage.component.html',
    styleUrls: ['./api-manage.component.scss']
})
export class ApiManageComponent implements OnInit {
    title = 'Manage API';
    apiControl: FormControl;
    token = 'uu3w8ye33kisdeYcs95Gd4i';

    constructor() { }

    ngOnInit() {
        this.apiControl = new FormControl(this.token);
    }
}
