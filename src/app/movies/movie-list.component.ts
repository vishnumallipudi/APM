import {Component,OnInit} from '@angular/core';
import { IMovie } from './movie';
@Component({
    selector:'mm-movies',
    templateUrl:'./movie-list.component.html',
    styleUrls:['./movie-list.component.css']
})

export class MovieListComponent implements OnInit{
    pageTitle:string="Movie List!";
    width:number=50;
    height:number=50;
    filteredMovies:IMovie[];
    movies:IMovie[]=[{
        "movieId": 1,
        "movieName": "Star wars: The Last Jedi",
        "movieCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://placehold.it/150/92c952"
    },
    {
        "movieId": 2,
        "movieName": "The Kingsmen: Golden Circle",
        "movieCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://placehold.it/150/92c952"
    }];
    _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredMovies=this.listFilter?this.performFilter(this.listFilter):this.movies;
    }

    
    
    showImage:boolean=false;
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    ngOnInit():void{
        console.log("Hey I'm from on init");
        
    }
    constructor(){
        console.log("this is constructor");
        this.filteredMovies=this.movies;
        this.listFilter='King';
    }
    performFilter(filterBy:string):IMovie[]{
        filterBy=filterBy.toLocaleLowerCase();
        var res=this.movies.filter((movie:IMovie)=>movie.movieName.toLocaleLowerCase().indexOf(filterBy)!==-1);
        console.log(res);
        return res;

    }
}