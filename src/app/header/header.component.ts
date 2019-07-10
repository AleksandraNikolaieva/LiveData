import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userName: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.userNameObservable.subscribe(res => {
            this.userName = res;
        });
    }
}
