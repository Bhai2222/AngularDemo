import { Observable } from 'rxjs';
import { Student } from '../interface/student.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Injectable()
export class LoginService {
    cookieService: any;

    constructor(private httpClient: HttpClient) { }

    // serverUrl = 'http://localhost:8083/onlineshopping';

    // serverUrl = 'http://localhost:8080/WabITDemo/onlineshopping';
    serverUrl = window["cfgApiBaseUrl"] + "/onlineshopping";


    tokenType = 'Bearer ';
    loginUser(data: Student): Observable<any> {
        const url = '/login';
        // let headers = new HttpHeaders();
        // headers = headers.set('Content-Type', 'application/text; charset=utf-8');

//        return this.httpClient.post(this.serverUrl + url, data);

        return this.httpClient.post(this.serverUrl + url, data, { responseType: 'text' as 'json' });
    }

    logoutUser(data: any): Observable<any> {
        localStorage.clear();
        const url = '/logout';
        //let headers = new HttpHeaders();
        //headers = headers.set('Content-Type', 'application/text; charset=utf-8');

     //   return this.httpClient.post(this.serverUrl + url, data);
        return this.httpClient.post(this.serverUrl + url, data, { responseType: 'text' as 'json' });
    }

    getuserInfo(): Observable<any> {
        const url = '/userinfo';
        // const header = new HttpHeaders()
        // .set('Authorization', token); // may be localStorage/sessionStorage
        // const headers = { headers: header };
        return this.httpClient.get(this.serverUrl + url);
    }

    signUpUser(data: Student): Observable<any> {
        const url = '/membershipdetail';
        return this.httpClient.post(this.serverUrl + url, data);
    }

    webInfo(data: Student): Observable<any> {
        const url = '/info';
        return this.httpClient.post(this.serverUrl + url, data);
    }

    editPlan(data: Student, id: any): Observable<any> {
        const url = `/infos/${id}`;
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/text; charset=utf-8');


        return this.httpClient.put(this.serverUrl + url, data, { responseType: 'text' as 'json' });
       // return this.httpClient.put(this.serverUrl + url, data);
    }

    deletePlan(id: any): Observable<any> {
        const url = `/infoDelete/${id}`;
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/text; charset=utf-8');


        return this.httpClient.put(this.serverUrl + url, { responseType: 'text' as 'json' });
        //return this.httpClient.delete(this.serverUrl + url);
    }

    getWebPlanInfo(): Observable<any> {
        const url = '/plan/info';
        return this.httpClient.get(this.serverUrl + url);
    }
}
