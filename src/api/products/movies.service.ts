import { Injectable } from '@angular/core';
import { IMovie } from '../../app/movies/movie';


@Injectable()
export class movieService{
    getMovies():IMovie[]{
        return [{
            "movieId": 1,
            "movieName": "Star wars: The Last Jedi",
            "movieCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.5,
            "imageUrl": "http://placehold.it/150/92c952"
        },
        {
            "movieId": 2,
            "movieName": "The Kingsmen: Golden Circle",
            "movieCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.5,
            "imageUrl": "http://placehold.it/150/92c952"
        }];
    }
}