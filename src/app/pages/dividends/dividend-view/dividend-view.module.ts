import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DividendViewPageRoutingModule } from './dividend-view-routing.module';

import { DividendViewPage } from './dividend-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DividendViewPageRoutingModule
  ],
  declarations: [DividendViewPage]
})
export class DividendViewPageModule {}
