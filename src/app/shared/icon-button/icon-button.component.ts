import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
    @Input() title: string;
    @Input() class = 'common';
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onClick(): void {
        this.clicked.emit();
    }
}
