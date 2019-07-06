import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models';

@Component({
    selector: 'app-job-item',
    templateUrl: './job-item.component.html',
    styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
    @Input() job: Job;
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

}
