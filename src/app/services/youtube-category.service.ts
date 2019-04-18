import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeCategoryService {

  categories;

  constructor(
    private readonly http: HttpClient
  ) { }

  getCategories() {
    const url = 'https://www.googleapis.com/youtube/v3/videoCategories';
    return this.http.get(url);
  }


}
