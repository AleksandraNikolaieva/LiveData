import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../models';

@Component({
    selector: 'app-job-item',
    templateUrl: './job-item.component.html',
    styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
    @Input() job: Job;
    @Output() openPopup: EventEmitter<any> = new EventEmitter();
    iconMap = {
        contacts : 'icon-menu',
        prospects: 'icon-search'
    };
    colorMap = {
        contacts: '#81c2d6',
        prospects: '#e0244a'
    };

    constructor() { }

    ngOnInit() {
    }

    openedPopup() {
        this.openPopup.emit();
    }

}
