import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { Student } from '../interface/student.interface';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class WebService {

    constructor(private httpClient: HttpClient) { }

    serverUrl: string = "http://localhost:8083"

    get(url: string): Observable<any> {
        return this.httpClient.get(this.serverUrl + url);
    }

    post(url: string, data: Student): Observable<any> {
        return this.httpClient.post(this.serverUrl + url, data);
    }

    put(url: string, data: Student): Observable<any> {
        return this.httpClient.put(this.serverUrl + url, data);
    }

    delete(url: string, data: Student): Observable<any> {
        return this.httpClient.delete(this.serverUrl + url, { params: { id: data.id + "" } });
    }
}