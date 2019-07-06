import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
    balance = 150;
    title = 'Credits';
    label = 'Current balance';
    buttonText = 'Purchase history';

    constructor() { }

    ngOnInit() {
    }
}
