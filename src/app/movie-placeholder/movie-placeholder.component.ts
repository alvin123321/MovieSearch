import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-movie-placeholder',
  templateUrl: './movie-placeholder.component.html',
  styleUrls: ['./movie-placeholder.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MoviePlaceholderComponent implements OnInit {
  // data passing from parent component
  @Input() movie: any;
  // loading status
  @Input() loading: any;

  constructor() {}

  ngOnInit(): void {}
}
