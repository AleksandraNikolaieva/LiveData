import { Component } from '@angular/core';
import { Porpose } from '../models';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
    popupActive = false;
    data: Array<Porpose> = [
        {
            title: 'Clean your CRM.',
            text: `We'll tell you which records are good,
              correct the ones that aren't, and separate your priority leads from who really
              have no reason to be in your CRM.`,
            buttonTitle: 'Upload List',
            buttonIcon: 'icon-upload',
            buttonClass: 'common'
        },
        {
            title: 'Grow your B2B.',
            text: `Identify prospects who understand what you're selling and why. So kill the marketing
              speak and have an intelligent conversation with an informed audience.`,
            buttonTitle: 'Find Prospects',
            buttonIcon: 'icon-search',
            buttonClass: 'crimson'
        }
    ];

    togglePopup(){
        this.popupActive = !this.popupActive;
    }
}
