import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prospects',
    templateUrl: './prospects.component.html',
    styleUrls: ['./prospects.component.scss']
})
export class ProspectsComponent implements OnInit {
    balance = 1492;
    label = 'Search fro prospects by skills or expertise: ';
    placeholder = 'e.g demand generation';
    coast = 100;
    listSize = 100;
    isDisabled = false;
    total: 1000;

    constructor() { }

    ngOnInit() {
    }
}
