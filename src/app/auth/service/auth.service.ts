import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    isLogged = false;
    userNameObservable = new BehaviorSubject(null);

    logIn() {
        this.isLogged = true;
        this.userNameObservable.next('Damian');
    }

    logOut() {
        this.isLogged = false;
        this.userNameObservable.next(null);
    }
}
