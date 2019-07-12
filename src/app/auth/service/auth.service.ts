import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    isLogged = false;
    email = 'damian@opuslogica.com';
    userMailObservable = new BehaviorSubject(null);

    logIn() {
        this.isLogged = true;
        this.userMailObservable.next('damian.rebman@gmail.com');
    }

    logOut() {
        this.isLogged = false;
        this.userMailObservable.next(null);
    }
}
