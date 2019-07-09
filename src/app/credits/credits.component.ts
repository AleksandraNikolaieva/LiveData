import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
    balance = 150;
    title = 'Credits';
    label = 'Current balance';
    buttonText = 'Purchase history';

    constructor(private router: Router) { }

    ngOnInit() {
    }

    buyCredits() {
        this.router.navigateByUrl('credits');
    }
}
