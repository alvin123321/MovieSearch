import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-placeholder',
  templateUrl: './movie-placeholder.component.html',
  styleUrls: ['./movie-placeholder.component.css'],
})
export class MoviePlaceholderComponent implements OnInit {
  // data passing from parent component
  @Input() movie: any;

  constructor() {}

  ngOnInit(): void {}
}
