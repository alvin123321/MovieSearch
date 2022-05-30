import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-newton-loader',
  templateUrl: './newton-loader.component.html',
  styleUrls: ['./newton-loader.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class NewtonLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
