import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie:object;
  constructor(
    private movieService : MovieService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const id=params.get('id');
      this.movieService.getMovieById(id)
      .subscribe(movie=>{
        this.movie=movie;
      })
    })
  }

}
