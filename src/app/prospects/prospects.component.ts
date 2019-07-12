import { Component, OnInit } from '@angular/core';
import { contacts } from '../mockData';
import { FormControl } from '@angular/forms';
import { trigger, transition, style, stagger, animate, query } from '@angular/animations';

@Component({
    selector: 'app-prospects',
    templateUrl: './prospects.component.html',
    styleUrls: ['./prospects.component.scss'],
    animations: [
        trigger('listAnimation', [
          transition(':enter', [
            query('.listItem', [
              style({opacity: 0, height: 0}),
              stagger(50, [
                animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, height: '*' }))
              ])
            ])
          ])
        ]),
    ]
})
export class ProspectsComponent implements OnInit {
    balance = 1492;
    label = 'Search for prospects by skills or expertise: ';
    placeholder = 'e.g. demand generation';
    listSize = 100;
    isDisabled = false;
    total = 1000;
    list: Array<any>;
    searchControl: FormControl;

    constructor() { }

    ngOnInit() {
        this.searchControl = new FormControl(null);
    }

    search() {
        this.isDisabled = true;
        this.list = contacts;
    }

    trackByFn(index: number, item: any) {
        if (!item) {
            return null;
        }
        return item.id;
    }
}
