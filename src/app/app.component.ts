import {Component} from '@angular/core';

@Component({
  selector:'PM-root',
  template:
  `<div>
    <h1>{{pageTitle}}</h1>
    <mm-movies>MovieLists Comes here</mm-movies>
  </div>
  `
})

export class AppComponent {
pageTitle:string="My Movies list";


}