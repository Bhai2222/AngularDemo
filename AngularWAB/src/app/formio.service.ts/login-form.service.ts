import { LoginService } from '../sevices/login.service';

import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HelperService } from '../Helper/helper.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginFormService {
    data: any;

    constructor(
        private loginService: LoginService,
        private helperService: HelperService,
        private router: Router
    ) { }

    getForm(config?: any): any {
        return {
            components: [
                {
                    title: 'Login',
                    collapsible: false,
                    tableView: false,
                    key: 'loginPanel',
                    type: 'panel',
                    label: 'Panel',
                    input: false,
                    components: [
                        {
                            label: 'Email',
                            placeholder: 'Enter Email',
                            spellcheck: true,
                            tableView: true,
                            calculateServer: false,
                            validate: {
                                required: true
                            },
                            key: 'email',
                            type: 'textfield',
                            input: true
                        },
                        {
                            label: 'Password',
                            placeholder: 'Enter Password',
                            spellcheck: true,
                            tableView: false,
                            calculateServer: false,
                            validate: {
                                required: true
                            },
                            key: 'password',
                            type: 'password',
                            input: true,
                            protected: true
                        },
                        {
                            input: false,
                            label: 'Save',
                            tableView: false,
                            action: 'submit',
                            disableOnInvalid: true,
                            theme: 'primary',
                            type: 'button',
                            cssClass: 'btn btn-warning',
                            customClass: 'mb-0'
                        }
                    ]
                },
            ]
        }
    }

    validateForm(submission: any, callback: any): void {
        // tslint:disable-next-line:no-null-keyword
        callback(null, submission);
    }

    submitForm(submission: any): void {
        console.log(submission);
        if (submission && submission.submit) {
            delete submission.submit;
        }
        this.loginService.loginUser(submission)
            .subscribe(result => {
                this.helperService.token = result;
                this.userinfo(result);
            }, err => {
                alert(err);
            });
    }

    userinfo(token) {
        this.loginService.getuserInfo()
        .subscribe(result => {
            this.helperService.userData = result;
            this.router.navigate(['/']);
        }, err => {
            alert(err);
        });
    }

    cleanup(): void {
        throw new Error('Method not implemented.');
    }
}
