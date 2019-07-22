import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account-management',
    templateUrl: './account-management.component.html',
    styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {
    constructor(private fb: FormBuilder, private router: Router) {}
    isChangePass = false;
    filledBtnTitle = 'Update';
    title = 'Account details';
    get borderedBtnTitle(): string {
        return this.isChangePass ? 'Cancel' : 'Change Password';
    }
    form: FormGroup;

    ngOnInit() {
        this.createForm();
    }

    toggleForm(): void {
        this.isChangePass = !this.isChangePass;
        this.updateFormState();
    }

    onSubmit(): void {
        if (this.form.value) {
            this.router.navigate(['main']);
        }
    }

    createForm(): void {
        this.form = new FormGroup({
            email: new FormControl('frank@awesomecorp.com', Validators.required)
        });
    }

    updateFormState(): void {
        if (this.isChangePass) {
            this.form.addControl('password', this.fb.control('', Validators.required));
            this.form.addControl('password-new', this.fb.control('', Validators.required));
        } else {
            this.form.removeControl('password');
            this.form.removeControl('password-new');
        }
    }
}
