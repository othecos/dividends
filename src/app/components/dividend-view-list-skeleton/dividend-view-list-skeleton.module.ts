import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DividendViewListSkeletonComponent } from './dividend-view-list-skeleton.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [DividendViewListSkeletonComponent],
  exports: [DividendViewListSkeletonComponent]
})
export class DividendViewListSkeletonComponentModule {}
