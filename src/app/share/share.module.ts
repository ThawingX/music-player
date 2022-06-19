import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DevUIModule } from 'ng-devui';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, DevUIModule],
  exports: [CommonModule, FormsModule, DevUIModule],
})
export class ShareModule {}
