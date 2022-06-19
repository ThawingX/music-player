import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../share/share.module';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
// DevUI 部分组件依赖angular动画，需要引入animations模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ServicesModule,
    BrowserAnimationsModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [ShareModule, AppRoutingModule],
})
export class CoreModule {
  // @skipSelf() 避免无限循环注入
  // @Optional() 允许依赖不存在，复制null
  constructor(@SkipSelf() @Optional() public parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('coreModule 只能被appModule使用');
    }
  }
}
