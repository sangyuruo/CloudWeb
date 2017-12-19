import { Component } from '@angular/core';
import {OuService} from "./ou.service";

@Component({
  selector: 'ngx-tables',
  template: `<router-outlet></router-outlet>`,
})
export class TablesComponent {
    constructor(private ouService:OuService){
        this.ouService.initDatas()
    }
}
