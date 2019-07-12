import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    email: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.userMailObservable.subscribe(res => {
            this.email = res;
        });
    }
}
