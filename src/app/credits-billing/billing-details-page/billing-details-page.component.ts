import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectedPackageService } from '../services/selected-package.service';

@Component({
    selector: 'app-billing-details-page',
    templateUrl: './billing-details-page.component.html',
    styleUrls: ['./billing-details-page.component.scss']
})
export class BillingDetailsPageComponent implements OnInit {

    billingForm: FormGroup;

    constructor(private formBuilder: FormBuilder, public selectedPackage: SelectedPackageService) { }

    ngOnInit() {
        this.billingForm = this.formBuilder.group({
            name: ['', Validators.required],
            cardNumber: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
            expMonth: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
            expYear: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
            cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
        });
    }

}
