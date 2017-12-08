import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { ComPointComponent } from './comPoint/smart-table.component';
import { comPointStatusComponent } from './comPointStatus/smart-table.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
      {
          path: 'comPoint',
          component: ComPointComponent,
      },

      {
          path: 'ComPointStatus',
          component: comPointStatusComponent,
      }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
    ComPointComponent,
    comPointStatusComponent,
];
