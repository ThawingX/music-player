import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseService } from './route-reuse.service';

@NgModule({
  declarations: [],
  imports: [],
  // 这里声明，无法进行treeshaking
  providers: [
    // TODO: provide和useCLass注入的问题
    {
      provide: RouteReuseStrategy,
      useClass: RouteReuseService,
    },
  ],
})
export class ServicesModule {}
