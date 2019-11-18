import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey='210d6a5dd3f16419ce349c9f1b200d6d';
  apiUrl='https://api.themoviedb.org/3/';
  constructor(private httpClient:HttpClient) { }

  getDiscoverMovies():Observable<object>{
    return this.httpClient.get(this.apiUrl+'discover/movie?api_key='+this.apiKey+'&language=es-ES')
  }
  getMoviesByCategory(category:string):Observable<object>{
    return this.httpClient.get(`${this.apiUrl}movie/${category}?api_key=${this.apiKey}&language=es-ES`)
  }
}
