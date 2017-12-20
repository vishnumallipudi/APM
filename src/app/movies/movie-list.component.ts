import {Component,OnInit} from '@angular/core';
import { IMovie } from './movie';
import { movieService } from '../../api/products/movies.service';
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
    movies:IMovie[]=[];
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
        this.movies=this._movSer.getMovies();
        this.filteredMovies=this.movies;
    }
    constructor(private _movSer:movieService){
        console.log("this is constrlsljhctor");
    }
    performFilter(filterBy:string):IMovie[]{
        filterBy=filterBy.toLocaleLowerCase();
        var res=this.movies.filter((movie:IMovie)=>movie.movieName.toLocaleLowerCase().indexOf(filterBy)!==-1);
        console.log(res);
        return res;

    }
    onRatingClicked(msg:string):void{
        this.pageTitle='Movie List '+ msg;
    }

}