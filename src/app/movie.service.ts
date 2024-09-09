import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imovie } from './imovie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

 
  private apiUrl = 'https://localhost:7122/api/Movie/GetNewMoviesList'; // Your API URL

  constructor(private readonly _http: HttpClient) { }

  // Method to fetch movies from the API
  getMovies(): Observable<Imovie[]> {
    
    return this._http.get<Imovie[]>(this.apiUrl);
  }
}
