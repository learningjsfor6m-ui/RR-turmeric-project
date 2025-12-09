import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeferLoadingwithJsonApiService {
private apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
  constructor(private http:HttpClient) { }

  getVideos() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
