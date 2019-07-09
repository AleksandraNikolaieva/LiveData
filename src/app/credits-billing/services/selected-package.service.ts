import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SelectedPackageService {

    package = {
        value: 10000,
        totalPrice: '$750',
        pricePerCredit: '$0.075'
    };
    constructor() { }
}
