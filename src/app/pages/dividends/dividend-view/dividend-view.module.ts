import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DividendViewPageRoutingModule } from './dividend-view-routing.module';

import { DividendViewPage } from './dividend-view.page';
import { DividendViewListSkeletonComponentModule } from 'src/app/components/dividend-view-list-skeleton/dividend-view-list-skeleton.module';
import { DividendViewListComponentModule } from 'src/app/components/dividend-view-list/dividend-view-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DividendViewListSkeletonComponentModule,
    DividendViewListComponentModule,
    DividendViewPageRoutingModule
  ],
  declarations: [DividendViewPage]
})
export class DividendViewPageModule {}
