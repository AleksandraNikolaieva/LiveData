import { Component } from '@angular/core';
import { Porpose } from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data: Array<Porpose> = [
        {
            title: 'Clean your CRM.',
            text: `We'll tell you which records are good,
                correct the ones that aren't, and separate your priority leads from who really
                have no reason to be in your CRM.`,
            buttonTitle: 'Upload List',
            buttonIcon: 'icon-upload',
            buttonColor: '#81c2d6'
        },
        {
            title: 'Grow your B2B.',
            text: `Identify prospects who understand what you're selling and why. So kill the marketing
                speak and have an intelligent conversation with an informed audience.`,
            buttonTitle: 'Find Prospects',
            buttonIcon: 'icon-search',
            buttonColor: '#e0244a'
        }
    ];
}
