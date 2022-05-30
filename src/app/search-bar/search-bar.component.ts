import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  movie: any;
  movieName: string;
  movieId: string;
  loading: boolean;
  errorMessage: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  SearchByTitle() {
    // Getting responses from OMDB api by searching movie name
    this.http
      .get<any>(`http://www.omdbapi.com/?t=${this.movieName}&apikey=503166e`)
      .subscribe(
        (data) => {
          this.movie = {};
          setTimeout(() => {
            this.movie = data;
          }, 1000);
        },
        (error) => {
          // Error callback
          console.error('error caught in component');
          this.errorMessage = error;
        }
      );
  }

  SearchById() {
    // Getting responses from OMDB api by searching movie id
    this.http
      .get<any>(`http://www.omdbapi.com/?i=${this.movieId}&apikey=503166e`)
      .subscribe(
        (data) => {
          this.movie = {};
          setTimeout(() => {
            this.movie = data;
          }, 1000);
        },
        (error) => {
          // Error callback
          console.error('error caught in component');
          this.errorMessage = error;
        }
      );
  }
}
