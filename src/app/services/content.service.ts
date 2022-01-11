import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  apikey = ''
  baseUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category'
  apiUrl = this.baseUrl + "&" + this.apikey;

  techApiUrl = this.baseUrl + "=technology&" + this.apikey;

  businessApiUrl = this.baseUrl + "=business&" + this.apikey;

  sportsApiUrl = this.baseUrl + "=sports&" + this.apikey;

  scienceApiUrl = this.baseUrl + "=science&" + this.apikey;
  constructor(private httpClient: HttpClient) { }

  getContents(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  getTech(): Observable<any> {
    return this.httpClient.get(this.techApiUrl);
  }

  getBusinesses(): Observable<any> {
    return this.httpClient.get(this.businessApiUrl);
  }

  getSports(): Observable<any> {
    return this.httpClient.get(this.sportsApiUrl);
  }

  getSciences(): Observable<any> {
    return this.httpClient.get(this.scienceApiUrl);
  }
}
