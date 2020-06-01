import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DividendSkeletonComponent } from './dividend-skeleton.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [DividendSkeletonComponent],
  exports: [DividendSkeletonComponent]
})
export class DividendSkeletonComponentModule {}
