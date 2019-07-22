import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    email: string;
    isOpen = false;
    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.userMailObservable.subscribe(res => {
            this.email = res;
        });
    }
    logout() {
        this.closeMenu();
        this.authService.logOut();
    }
    toggleMenu(): void {
        this.isOpen = !this.isOpen;
    }
    closeMenu(): void {
        this.isOpen = false;
    }
}
