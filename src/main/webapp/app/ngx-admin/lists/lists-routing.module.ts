import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {ListsComponent} from './lists.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: ListsComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
      path: 'ou',
      loadChildren: () => new Promise(resolve => {

          (require as any).ensure([], require => {resolve(require('./ou/ou.module').TablesModule); })  })
  }, {
      path: 'dict',
      loadChildren: () => new Promise(resolve => {
          (require as any).ensure([], require => {resolve(require('./dict/dict.module').TablesModule); })  })
  },
      {
          path: 'cpi',
          loadChildren: () => new Promise(resolve => {
              (require as any).ensure([], require => {resolve(require('./cpi/tables.module').TablesModule); })  })
      },
      {
          path: 'loc',
          loadChildren: () => new Promise(resolve => {
              (require as any).ensure([], require => {resolve(require('./loc/tables.module').TablesModule); })  })
      }, {
      path: 'mi',
      loadChildren: () => new Promise(resolve => {
          (require as any).ensure([], require => {resolve(require('./mi/mi.module').TablesModule); })  })
  }, {
      path: 'arc',
      loadChildren: () => new Promise(resolve => {
          (require as any).ensure([], require => {resolve(require('./arc/arc.module').arcTablesModule); })  })
  },{
      path: 'resource',
      loadChildren: () => new Promise(resolve => {
          (require as any).ensure([], require => {resolve(require('./resource/resource.module').TablesModule); })  })
  },{
          path: 'nfs',
          loadChildren: () => new Promise(resolve => {
              (require as any).ensure([], require => {resolve(require('./nfs/nfs.module').TablesModule); })  })
      },{
          path: 'charts',
          loadChildren: () => new Promise(resolve => {
              (require as any).ensure([], require => {resolve(require('./charts/charts.module').ChartsModule); })  })
      },{
          path: 'ui-features',
          loadChildren: () => new Promise(resolve => {
              (require as any).ensure([], require => {resolve(require('./ui-features/ui-features.module').UiFeaturesModule); })  })
      },  {
          path: 'forms',
          loadChildren: () => new Promise(resolve => {
              (require as any).ensure([], require => {resolve(require('./forms/forms.module').FormsModule); })  })
      },{

    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {
}
