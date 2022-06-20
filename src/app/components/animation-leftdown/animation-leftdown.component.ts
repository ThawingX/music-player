import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animation-leftdown',
  templateUrl: './animation-leftdown.component.html',
  styleUrls: ['./animation-leftdown.component.scss'],
})
export class AnimationLeftdownComponent implements OnInit {
  @ViewChild('container') container: any;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
