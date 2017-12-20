import {Component} from '@angular/core';
import { movieService } from '../api/products/movies.service';

@Component({
  selector:'PM-root',
  template:
  `<div>
    <h1>{{pageTitle}}</h1>
    <mm-movies>MovieLists Comes here</mm-movies>
  </div>
  `,
  providers:[movieService]
})

export class AppComponent {
pageTitle:string="My Movies list";


}