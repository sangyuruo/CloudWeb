import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './ou-routing.module';
import {OuService} from "./ou.service";
import {AdressNameEditorComponent} from "./company/adressname-editor.component";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";








@NgModule({
    imports: [
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,


    ],
    declarations: [
        ...routedComponents,
        AdressNameEditorComponent,

    ],
    entryComponents:[AdressNameEditorComponent],
    providers: [
        OuService,
    ],
})
export class TablesModule { }
