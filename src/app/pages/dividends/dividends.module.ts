import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DividendsPageRoutingModule } from './dividends-routing.module';

import { DividendsPage } from './dividends.page';
import { DividendsConfigModalPage } from './dividends-config-modal/dividends-config-modal.page';
import { DividendComponentModule } from 'src/app/components/dividend/dividend.module';
import { DividendSkeletonComponentModule } from 'src/app/components/dividend-skeleton/dividend-skeleton.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DividendComponentModule,
    DividendSkeletonComponentModule,
    DividendsPageRoutingModule
  ],
  declarations: [DividendsPage, DividendsConfigModalPage],
  entryComponents: [DividendsConfigModalPage]
})
export class DividendsPageModule {}
