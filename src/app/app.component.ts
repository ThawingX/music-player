import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'my-music-player';
  public searchIsFocus: boolean = false;

  @ViewChild('container') public container: any;

  public changeTheme() {
    this.container.nativeElement.classList.toggle('light-mode');
  }
  // 路由前进
  public forward() {
    window.history.forward();
  }
  // 路由后退
  public backward() {
    window.history.back();
  }

  constructor() {}
}
