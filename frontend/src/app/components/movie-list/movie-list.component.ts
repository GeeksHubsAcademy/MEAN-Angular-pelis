import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  peliculas:Array<Movie>=[];
  constructor(private movieService:MovieService) { }
  
  ngOnInit() {
    this.movieService.getDiscoverMovies()
    .subscribe(
      res=>this.peliculas=res['results'],
      error=>console.error(error)
    )
  }

}
