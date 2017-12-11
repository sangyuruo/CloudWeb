import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './ou.component';

import { SmartTableComponent } from './company/company.component';
import {Organizationtable} from "./organization/organization.component";
import {AdvancedExamplesCustomEditorComponent} from "./editor/advanced-example-custom-editor.component";





const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'company',
    component: SmartTableComponent,

  }, {
      path: 'organization',
      component: Organizationtable,
      },
      {
          path: 'editor',
          component: AdvancedExamplesCustomEditorComponent,
      },
      ],
  },]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
    Organizationtable,
    AdvancedExamplesCustomEditorComponent
];
