import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { LoginService } from '../sevices/login.service';
import { map } from 'rxjs/operators';
import { resolve } from 'url';

@Injectable()
export class HelperService {
    private _userData: object = {};
    private _token: string;

    get userData(): object {
        return this._userData;
    }

    set userData(data: object) {
        this._userData = data;
    }

    get token(): string {
        const token = this._token ? this._token : localStorage.getItem('token');
        return token;
    }

    set token(data: string) {
        if (data) {
            localStorage.setItem ('token', `${data}`);
        }
        const token = data ? data : localStorage.getItem('token');
        this._token = data;
    }

    constructor(
        private loginService: LoginService,

    ) {
    }

    // load(): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.initApp()
    //             .subscribe(
    //                 data => {
    //                     resolve(data);
    //                 }, err => {
    //                     console.error(err);
    //                 }
    //             )
    //     });
    // }

    // initApp(): Observable<any> {

    //     return this.loginService.getuserInfo()
    //         .pipe(
    //             map(result => {
    //                 this.userData = result;
    //                 return result;
    //             })
    //         );
    // }
}
