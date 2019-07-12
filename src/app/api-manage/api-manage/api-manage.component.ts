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

    constructor() { }

    ngOnInit() {
        this.apiControl = new FormControl(null);
    }
}
