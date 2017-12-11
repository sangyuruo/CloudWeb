import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './ou-routing.module';
import {OuService} from "./ou.service";
import {CustomEditorComponent} from "./editor/custom-editor.component";
import {CustomRenderComponent} from "./editor/custom-render.component";
import {CustomEditorComponent1} from "./company/custom-editor.component";
import {CustomRenderComponent1} from "./company/custom-render.component";




@NgModule({
    imports: [
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,



    ],
    declarations: [
        ...routedComponents,
        CustomEditorComponent,
        CustomRenderComponent,
        CustomEditorComponent1,
        CustomRenderComponent1
    ],
    entryComponents:[ CustomRenderComponent, CustomEditorComponent,CustomEditorComponent1,
        CustomRenderComponent1],
    providers: [
        OuService,
    ],
})
export class TablesModule { }
