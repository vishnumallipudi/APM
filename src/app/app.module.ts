import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {MovieListComponent} from './movies/movie-list.component';
import { convertToSpaces } from './shared/convert-to-spaces.pipe';


@NgModule({
  declarations: [ AppComponent,MovieListComponent,convertToSpaces ],
  imports: [  BrowserModule,FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
