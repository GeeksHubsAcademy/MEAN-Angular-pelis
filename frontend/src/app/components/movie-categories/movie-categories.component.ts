import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss']
})
export class MovieCategoriesComponent implements OnInit  {
  category: string;
  peliculas:Array<Movie>;
  constructor(private route: ActivatedRoute,//inyectamos el ActivatedRoute como dependencia para seguir los cambios de parámetros en la ruta
     private movieService:MovieService //inyectamos el servicio movie para llamar al método getMoviesByCategory
     ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {//me suscribo a cambios en los parámetros del router
      this.category = params.get('category')//obtenemos el parámetro category
      this.movieService.getMoviesByCategory(this.category) //lamamos al método del servicio movies para pedir las peliculas según la categoría
      .subscribe(res=>{
        this.peliculas=res['results'];// asignamos results a peliculas para poder acceder desde la plantilla HTML
      })
    })
  }
}
