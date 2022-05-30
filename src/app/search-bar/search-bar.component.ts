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
  loading = false;
  errorMessage: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  SearchMovie(searchMethod: string) {
    this.loading = true;
    let apiParam = '';
    if (searchMethod === 'title') {
      apiParam = 't=' + this.movieName;
      this.movieId = '';
    } else if (searchMethod === 'id') {
      apiParam = 'i=' + this.movieId;
      this.movieName = '';
    }
    // call the api with correct param
    this.OmdbAPI(apiParam);
  }

  OmdbAPI(apiParam: string) {
    // Getting responses from OMDB api by searching movie id or imdb id
    this.http
      .get<any>(`http://www.omdbapi.com/?${apiParam}&apikey=503166e`)
      .subscribe(
        (data) => {
          this.movie = {};
          setTimeout(() => {
            this.loading = false;
            this.movie = data;
          }, 1500);
        },
        (error) => {
          this.loading = false;
          this.movie.Response = 'False';
          this.movie.error =
            'Sorry something went wrong, please try again later';
          // Error callback
          console.error('error caught in component');
          this.errorMessage = error;
        }
      );
  }
}
