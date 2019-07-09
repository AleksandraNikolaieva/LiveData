import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-buy-credits',
    templateUrl: './buy-credits.component.html',
    styleUrls: ['./buy-credits.component.scss']
})
export class BuyCreditsComponent implements OnInit {
    @Input() balance: number;
    @Input() link: string;
    constructor() {}
    title: string = 'Credits Balance';
    label: string = 'credits';
    ngOnInit() {}
}
