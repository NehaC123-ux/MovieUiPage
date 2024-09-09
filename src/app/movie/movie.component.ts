import { Component, OnInit } from '@angular/core';
import { Imovie } from '../imovie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
showMovieDetails(arg0: number) {
throw new Error('Method not implemented.');
}

  movies: Imovie[] = [];
  // searchQuery: string = ''; 
  // selectedMovie?: Imovie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(
      (data: Imovie[]) => {
        this.movies = data; // Assign the fetched data to the movies array
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }

 

}
