import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public http = `http://`;
  public apiUrl = `${this.http}localhost:${environment.apiPort}`;

  getApiInfo() {
    console.log(this.apiUrl);
    return this.httpClient.get(`${this.apiUrl}/info`);
  }

  constructor(public httpClient: HttpClient) {
    console.log('constructor api')
   }
}
