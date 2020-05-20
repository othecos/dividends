import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DividendViewPage } from './dividend-view.page';

const routes: Routes = [
  {
    path: '',
    component: DividendViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DividendViewPageRoutingModule {}
