import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './ou-routing.module';
import {OuService} from "./ou.service";
import {CustomEditorComponent} from "./editor/custom-editor.component";
import {CustomRenderComponent} from "./editor/custom-render.component";




@NgModule({
    imports: [
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,



    ],
    declarations: [
        ...routedComponents,
        CustomEditorComponent,
        CustomRenderComponent
    ],
    entryComponents:[ CustomRenderComponent, CustomEditorComponent],
    providers: [
        OuService,
    ],
})
export class TablesModule { }
