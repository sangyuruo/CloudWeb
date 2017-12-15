import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './ou-routing.module';
import {OuService} from "./ou.service";
import {CustomEditorComponent} from "./editor/custom-editor.component";
import {CustomRenderComponent} from "./editor/custom-render.component";
import {CompanyCodeEditorComponent} from "./company/companycode-editor.component";
import {AdressNameEditorComponent} from "./company/adressname-editor.component";





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
        CompanyCodeEditorComponent,
        AdressNameEditorComponent
    ],
    entryComponents:[ CustomRenderComponent, CustomEditorComponent,
        CompanyCodeEditorComponent,  AdressNameEditorComponent],
    providers: [
        OuService,
    ],
})
export class TablesModule { }
