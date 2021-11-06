import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  apiUrl = "https://newsapi.org/v2/top-headlines?country=tr&categoryt&apiKey=c7b4b80caf264ea0ae6d7c4c37e45aa6";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=c7b4b80caf264ea0ae6d7c4c37e45aa6";

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=c7b4b80caf264ea0ae6d7c4c37e45aa6";

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=c7b4b80caf264ea0ae6d7c4c37e45aa6";

  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=c7b4b80caf264ea0ae6d7c4c37e45aa6";
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
