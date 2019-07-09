import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-log-in-sign-up',
    templateUrl: './log-in-sign-up.component.html',
    styleUrls: ['./log-in-sign-up.component.scss']
})
export class LogInSignUpComponent implements OnInit {
    title = 'Sign up';
    form: FormGroup;
    submitButtonValue = 'Create Account';
    googleButtonValue = 'Log in with Google';
    isActionLogin = false;

    constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

    ngOnInit() {
        this.formInit();
        this.route.data.subscribe(data => {
            if (data.isLogin) {
                this.title = 'Log in';
                this.submitButtonValue = this.title;
                this.googleButtonValue = 'Sign in width Google';
                this.isActionLogin = true;
                this.form.addControl('remember', this.fb.control(false));
            }
        });
    }

    formInit() {
        this.form = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });
    }

    onSubmit() {
        if (this.isActionLogin) {
            this.logIn();
        } else {
            this.signUp();
        }
    }

    logIn() {

    }

    signUp() {

    }
}
