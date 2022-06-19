import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// 引入公共组件
import { ShareModule } from '../../share/share.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, ShareModule],
})
export class HomeModule {}
