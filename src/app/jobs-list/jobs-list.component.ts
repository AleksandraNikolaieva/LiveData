import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models';
import { jobs } from '../mockData';

@Component({
    selector: 'app-jobs-list',
    templateUrl: './jobs-list.component.html',
    styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
    title = 'Recent jobs';
    jobs: Array<Job> = jobs;

    constructor() { }

    ngOnInit() {
    }

    trackByFunction(index: number, item: Job) {
        if (!item) {
            return null;
        }
        return item.id;
    }
}
