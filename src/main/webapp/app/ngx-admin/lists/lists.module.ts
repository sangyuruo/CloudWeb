import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {ListsComponent} from './lists.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {ListsRoutingModule} from './lists-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {JhiEventManager} from "ng-jhipster";


const PAGES_COMPONENTS = [
  ListsComponent,
];

@NgModule({
  imports: [
   ListsRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
    //添加auth
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    ...PAGES_COMPONENTS,
  ],
    providers:[]
})
export class ListsModule {
}
