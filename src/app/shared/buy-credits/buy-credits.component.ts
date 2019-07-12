import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-buy-credits',
    templateUrl: './buy-credits.component.html',
    styleUrls: ['./buy-credits.component.scss']
})
export class BuyCreditsComponent implements OnInit {
    @Input() balance: number;
    @Input() link: string;
    @Input() error: boolean = false;

    constructor() {}
    title = 'Credits Balance';
    label = 'credits';
    ngOnInit() {}
}
