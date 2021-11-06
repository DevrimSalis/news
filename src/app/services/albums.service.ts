import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  apiUrl = "https://jsonplaceholder.typicode.com/photos"
  constructor(private httpClient: HttpClient) { }


  getAlbums(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
