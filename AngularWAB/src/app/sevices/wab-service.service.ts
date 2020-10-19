import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interface/student.interface';

@Injectable({
  providedIn: 'root'
})
export class WABServiceService {

  constructor(private httpClient: HttpClient) { }
  
  // serverUrl = 'http://localhost:8083/onlineshopping';
  // serverUrl = 'http://localhost:8080/WabITDemo/onlineshopping';

  serverUrl = window["cfgApiBaseUrl"] + "/onlineshopping";

 
  WAB_Services(data: Student): Observable<any> {
      const url = '/services';
      return this.httpClient.post(this.serverUrl + url, data);
  }

  edit_WAB_Services(data: Student, id:any): Observable<any> {
    const url = `/infos/${id}`;
    return this.httpClient.put(this.serverUrl + url, data);
}
getWabServiceInfo(): Observable<any> {
    const url = '/plan/info';
    return this.httpClient.get(this.serverUrl + url);
  }

}
