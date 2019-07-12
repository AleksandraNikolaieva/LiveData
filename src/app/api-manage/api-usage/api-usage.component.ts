import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-api-usage',
    templateUrl: './api-usage.component.html',
    styleUrls: ['./api-usage.component.scss']
})
export class ApiUsageComponent implements OnInit {
    constructor() {}
    data: Array<number> = [
        60,
        190,
        110,
        60,
        110,
        60,
        60,
        160,
        190,
        110,
        60,
        160,
        60,
        160,
        190,
        235,
        60,
        160,
        60,
        235,
        110,
        160,
        60,
        260,
        160,
        60,
        110,
        190,
        160
    ];
    labels: Array<number> = [];
    maxGraphValue: number;
    percentageValues: Array<number>;
    title: string = 'API usage';
    selector: string = 'last 30 days';
    options: Array<string> = ['last 30 days', 'last 7 days'];

    ngOnInit() {
        this.caclLabels();
        this.caclPercentageValue();
    }

    caclLabels() {
        let max = Math.max.apply(null, this.data);

        let i = 0;
        const graphLabelsScale = 25;
        while (max >= 0) {
            this.labels.unshift(i * graphLabelsScale);
            i++;
            max -= graphLabelsScale;
        }
        this.maxGraphValue = i * graphLabelsScale;
        this.labels.unshift(this.maxGraphValue);
    }

    caclPercentageValue() {
        this.percentageValues = this.data.map(
            e => (e * 100) / this.maxGraphValue
        );
    }
}
