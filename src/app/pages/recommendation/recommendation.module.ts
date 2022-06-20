import { NgModule } from '@angular/core';

import { RecommendationRoutingModule } from './recommendation-routing.module';
import { RecommendationComponent } from './recommendation.component';

import { ShareModule } from 'src/app/share/share.module';
@NgModule({
  declarations: [RecommendationComponent],
  imports: [RecommendationRoutingModule, ShareModule],
})
export class RecommendationModule {}
