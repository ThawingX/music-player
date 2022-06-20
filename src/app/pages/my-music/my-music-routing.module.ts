import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMusicComponent } from './my-music.component';

const routes: Routes = [{ path: 'my-music', component: MyMusicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMusicRoutingModule {}
