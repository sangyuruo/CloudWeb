import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {JhiEventManager} from "ng-jhipster";


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
    //添加auth
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    ...PAGES_COMPONENTS,
  ],
    providers:[JhiEventManager]
})
export class PagesModule {
}
