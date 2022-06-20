import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// 引入核心模块 core
import { CoreModule } from './core/core.module';
import { AnimationLeftdownComponent } from './components/animation-leftdown/animation-leftdown.component';
@NgModule({
  declarations: [AppComponent, AnimationLeftdownComponent],
  imports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
