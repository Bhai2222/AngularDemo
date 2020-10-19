import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Student } from '../interface/student.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MeetTheTeamService {

    constructor(private httpClient: HttpClient) { }

    // serverUrl = 'http://localhost:8083/onlineshopping';

    // serverUrl = 'http://localhost:8080/WabITDemo/onlineshopping';
    serverUrl = window["cfgApiBaseUrl"] + "/onlineshopping";


    OurProducts(data: Student): Observable<any> {
        const url = '/ourProducts';
        return this.httpClient.post(this.serverUrl + url, data);
    }

    editOurProducts1(data: Student, id: any): Observable<any> {
        const url = `/ourProducts/${id}`;
        return this.httpClient.put(this.serverUrl + url, data);
    }

    
    editTeamMembers(data,file, id:any): Observable<HttpEvent<any>> {
        
        const formData: FormData = new FormData();
        const formSubmissiomData = {
            
        };
        formData.append('data', JSON.stringify(data));
        formData.append('file', file);

        const req = new HttpRequest('POST', `${this.serverUrl}/team`, formData, {
         //   headers: headers.set('Content-Type', 'multipart/form-data'),
            // reportProgress: true,
            //  responseType: 'json'
        });

        return this.httpClient.request(req);
    }


    getTeamMembers(): Observable<any> {
        const url = '/teamMembers/info';
        return this.httpClient.get(this.serverUrl + url);
    }
    deleteTeamMembers(id: any): Observable<any> {
        const url = `/DeleteteamMember/${id}`;
       
        return this.httpClient.delete(this.serverUrl + url, { responseType: 'text' as 'json' });
        //return this.httpClient.delete(this.serverUrl + url);
    }



    upload(data): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        const formSubmissiomData = {
            
        };
        formData.append('data', JSON.stringify(data.data));
        formData.append('file', data.files);

        const req = new HttpRequest('POST', `${this.serverUrl}/team`, formData, {
         //   headers: headers.set('Content-Type', 'multipart/form-data'),
            // reportProgress: true,
            //  responseType: 'json'
        });

        return this.httpClient.request(req);
    }
  
    getFiles(): Observable<any> {
        return this.httpClient.get(`${this.serverUrl}/files`);
    }
}
