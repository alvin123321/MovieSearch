import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  movie: any;
  movieName: string;
  loading: boolean;

  ngOnInit(): void {

  }

  SearchByTitle(){
    // Getting responses from OMDB api
    this.http
      .get<any>(`http://www.omdbapi.com/?t=${this.movieName}&apikey=503166e`)
      .subscribe((data) => {
        this.movie = {};
        this.loading = true;
        console.log(data);
        setTimeout(() => {
          this.movie = data;
          this.loading = false;
        }, 1000);
      });
  }
}
