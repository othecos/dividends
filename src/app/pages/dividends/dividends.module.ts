import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DividendsPageRoutingModule } from './dividends-routing.module';

import { DividendsPage } from './dividends.page';
import { DividendsConfigModalPage } from './dividends-config-modal/dividends-config-modal.page';
import { DividendComponentModule } from 'src/app/components/dividend/dividend.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DividendComponentModule,
    DividendsPageRoutingModule
  ],
  declarations: [DividendsPage, DividendsConfigModalPage],
  entryComponents: [DividendsConfigModalPage]
})
export class DividendsPageModule {}
