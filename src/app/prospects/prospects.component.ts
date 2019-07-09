import { Component, OnInit } from '@angular/core';
import { contacts } from '../mockData';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-prospects',
    templateUrl: './prospects.component.html',
    styleUrls: ['./prospects.component.scss']
})
export class ProspectsComponent implements OnInit {
    balance = 1492;
    label = 'Search for prospects by skills or expertise: ';
    placeholder = 'e.g demand generation';
    listSize = 100;
    isDisabled = false;
    total = 1000;
    list = contacts;
    searchControl: FormControl;
    listSizeControl: FormControl;

    constructor() { }

    ngOnInit() {
        this.searchControl = new FormControl(null);
    }
}
