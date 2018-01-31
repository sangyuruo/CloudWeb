import {Component, OnInit} from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {ApiService} from "../app.service";

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
        <router-outlet name="popup"></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit{
    constructor(private apiservice:ApiService){}
    menu: any = null;
    ngOnInit(): void {
        this.menu = this.apiservice.getMenus();
    }

    // menu = MENU_ITEMS;

}
