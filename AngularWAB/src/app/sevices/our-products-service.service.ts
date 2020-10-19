import { Student } from './../interface/student.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OurProductsServiceService {

    constructor(private httpClient: HttpClient) { }

    //    serverUrl = 'http://localhost:8083/onlineshopping';
    // serverUrl = 'http://localhost:8080/WabITDemo/onlineshopping';

    serverUrl = window["cfgApiBaseUrl"] + "/onlineshopping";
    // serverUrl = window["cfgApiBaseUrl"] + "/onlineshopping";


    OurProducts(data: Student): Observable<any> {
        const url = '/ourProduct';
        return this.httpClient.post(this.serverUrl + url, data);
    }
    editOurProducts(data, file, id: any): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        const formSubmissiomData = {

        };
        formData.append('data', JSON.stringify(data));
        formData.append('file', file);

        const req = new HttpRequest('POST', `${this.serverUrl}/product`, formData, {
        });

        return this.httpClient.request(req);
    }


    getOurProducts(start: any): Observable<any> {
        const url = `/ourProducts/products/${start}`;
        return this.httpClient.get(this.serverUrl + url);
    }
    deleteOurProducts(id: any): Observable<any> {
        const url = `/infoDeleteprod/${id}`;
        return this.httpClient.delete(this.serverUrl + url, { responseType: 'text' as 'json' });
    }



    upload(data): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        const formSubmissiomData = {

        };
        formData.append('data', JSON.stringify(data.data));
        formData.append('file', data.files);

        const req = new HttpRequest('POST', `${this.serverUrl}/product`, formData, {
            //   headers: headers.set('Content-Type', 'multipart/form-data'),
            // reportProgress: true,
            //  responseType: 'json'
        });

        return this.httpClient.request(req);
    }

}
