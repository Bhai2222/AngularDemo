import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelperService } from '../Helper/helper.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private helperService: HelperService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                // 'Content-Type' : 'application/json; charset=utf-8',
                // Accept: 'application/json',
                Authorization: `${this.helperService.token}`
            }
        });
        return next.handle(request);
    }
}
