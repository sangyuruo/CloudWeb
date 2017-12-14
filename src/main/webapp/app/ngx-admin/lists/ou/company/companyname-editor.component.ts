import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
import {Http} from "@angular/http";

@Component({
  template: `
      <select  class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
          <option  *ngFor="let company of companys" [value]="company.companyName"  >{{company.companyName}} </option>
      </select>
  `,
})
export class CompanyNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;

    companys;
    sure ;

    constructor(private http: Http) {
        super();
        this.http.get('/emcloudou/api/organizations?size=2000').map( res => res.json()).subscribe(
            data=>{this.companys = data;
                this.sure =  this.cell.newValue
            }
    )

    }
    ngAfterViewInit() {}



   setInfo() {
        this.cell.newValue = this.sure;
}

}
