import {Component, OnInit} from '@angular/core';
import {ChartsService} from "./charts.service";


@Component({
  selector: 'ngx-charts',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class ChartsComponent implements OnInit{

    constructor(private service: ChartsService) {}

    ngOnInit() {
        this.service.initOrganizationesDatas()
    }

}
