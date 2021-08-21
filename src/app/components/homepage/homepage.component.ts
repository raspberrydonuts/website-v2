import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('welcomeTrigger', [
      transition(':enter', [

        animate('2s', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 })
        ])),
      ]),
    ]),

    trigger('hopeTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s 2s', style({ opacity: 1 })),
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ]})

export class HomepageComponent implements OnInit {
  isShown = true
  headshotSrc = 'assets/images/headshot.jpeg'
  headshotAlt = 'headshot'

  constructor() { }

  ngOnInit(): void {
  }
}
