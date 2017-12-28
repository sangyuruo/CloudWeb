import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './ou-routing.module';
import {OuService} from "./ou.service";
import {AdressNameEditorComponent} from "./company/adressname-editor.component";

import {CompanynameEditorComponent} from "./company/companyname-editor.component";
import {UiFeaturesModule} from "../../pages/ui-features/ui-features.module";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";
import {MyAppComponet} from "./company/my-app.componet";













@NgModule({
    imports: [
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
        UiFeaturesModule,



    ],
    declarations: [
        ...routedComponents,
        AdressNameEditorComponent,
        CompanynameEditorComponent,
        MyAppComponet




    ],
    entryComponents:[AdressNameEditorComponent,CompanynameEditorComponent],
    providers: [
        OuService,
    ],
})
export class TablesModule { }
