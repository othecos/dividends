import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DividendsPage } from './dividends.page';

const routes: Routes = [
  {
    path: '',
    component: DividendsPage
  },
  {
    path: 'dividend-view/:id',
    loadChildren: () => import('./dividend-view/dividend-view.module').then( m => m.DividendViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DividendsPageRoutingModule {}
