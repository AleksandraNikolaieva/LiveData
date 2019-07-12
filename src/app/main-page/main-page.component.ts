import { Component } from '@angular/core';
import { Purpose } from '../models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
    constructor(private router: Router) {}
    popupActive = false;
    buttonText: string = 'Learn more';
    data: Array<Purpose> = [
        {
            title: 'Clean your CRM.',
            text: `We'll tell you which records are good,
              correct the ones that aren't, and separate your priority leads from who really
              have no reason to be in your CRM.`,
            buttonTitle: 'Upload List',
            buttonIcon: 'icon-upload',
            buttonClass: 'common',
            link: '/upload'
        },
        {
            title: 'Grow your B2B.',
            text: `Identify prospects who understand what you're selling and why. So kill the marketing
              speak and have an intelligent conversation with an informed audience.`,
            buttonTitle: 'Find Prospects',
            buttonIcon: 'icon-search',
            buttonClass: 'crimson',
            link: '/find-prospects'
        }
    ];
    onLearnMoreClick() {
        this.router.navigate(['/api']);
    }
    onClick(link: string) {
        this.router.navigate([link]);
    }
    togglePopup() {
        this.popupActive = !this.popupActive;
    }
}
