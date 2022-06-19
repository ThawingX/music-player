import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-music-player';
  public searchIsFocus: boolean = false;
  @ViewChild('container') public container: any;
  public changeTheme() {
    // console.log(this.container.nativeElement);
    // this.container.nativeElement.classList.toggle('light-mode');
    this.container.nativeElement.classList.toggle('light-mode');
  }
  constructor() {}
}
