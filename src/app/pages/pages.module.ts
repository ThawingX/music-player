import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { MyMusicModule } from './my-music/my-music.module';
import { NewsModule } from './news/news.module';
import { RecommendationModule } from './recommendation/recommendation.module';

@NgModule({
  declarations: [],
  imports: [HomeModule, RecommendationModule, NewsModule, MyMusicModule],
  exports: [HomeModule, RecommendationModule, NewsModule, MyMusicModule],
})
export class PagesModule {}
