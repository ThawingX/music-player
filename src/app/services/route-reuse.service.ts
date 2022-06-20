import { Injectable } from '@angular/core';
// import { ServicesModule } from './services.module';
/* 
  前端路由复用：
    场景：看到一个关键词，点击了详情页，然后回滚时候，之前页面刷新，用户体验不好。
    实用性：绝大多数场景不需要这个技术


  路由复用策略：
    angular提供了几种方法：
      - shouldDetach 是否允许路由复用
      - store 当路由离开时触发，存储路由
      - shouldAttach 是否允许还原路由
      - retrieve 获取存储路由
      - shouldReuseRoute 进入路由触发，是否同一路由时进行路由复用
    策略描述：
      1. 把路由/list 设置为允许复用(shouldDetach)
      2. 路由快照保存在store中
      3. 当shouldReuseRoute成立时，即再次遇到/list路由时，先判断shouldAttach是否允许还原路由
      4. 最后从retrieve中拿到路由快照并构建组件
*/

import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

// 这里的声明的服务，没有用到会被treeshaking
@Injectable()
export class RouteReuseService implements RouteReuseStrategy {
  constructor() {}
  // 缓存数据
  _cacheRouters: { [key: string]: any } = {};
  // 返回true，表示对所有路由允许复用
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
  // 路由离开时触发，按path作为key存储路由快照和组件实例
  // path === RouterModule.forRoot中的配置
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    this._cacheRouters[route.routeConfig!.path!] = {
      snapshot: route,
      handle: handle,
    };
  }
  // 若path在缓存中有的，都认为允许还原路由
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this._cacheRouters[route.routeConfig!.path!];
  }
  // 从缓存中获取快照，若没有则返回null
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this._cacheRouters[route.routeConfig!.path!].handle;
  }
  // 进入路由触发，判断是否同一个路由
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
