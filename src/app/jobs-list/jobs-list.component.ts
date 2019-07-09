import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../models';
import { jobs } from '../mockData';

@Component({
    selector: 'app-jobs-list',
    templateUrl: './jobs-list.component.html',
    styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
    @Output() openPopup: EventEmitter<any> = new EventEmitter();
    title = 'Recent jobs';
    jobs: Array<Job> = jobs;

    constructor() { }

    ngOnInit() {
    }

    trackByFn(index: number, item: Job) {
        if (!item) {
            return null;
        }
        return item.id;
    }

    openedPopup() {
        this.openPopup.emit();
    }
}
