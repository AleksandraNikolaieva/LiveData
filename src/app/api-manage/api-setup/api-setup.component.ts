import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-api-setup',
    templateUrl: './api-setup.component.html',
    styleUrls: ['./api-setup.component.scss']
})
export class ApiSetupComponent implements OnInit {
    title = 'Generate API token';
    text = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint accaecat cupidatat non proident.`;
    linkText = 'Learn more.';
    buttonValue = 'Generate Token';

    constructor() { }

    ngOnInit() {
    }
}
