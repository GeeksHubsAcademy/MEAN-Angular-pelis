import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component';


const routes: Routes = [
  {path: "", redirectTo: "discover", pathMatch:"full"},
  {path:"discover", component:MovieListComponent},
  {path:"movies/:category",component:MovieCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
