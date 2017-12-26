import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
import {Http} from "@angular/http";
@Component({
  template: `
      <input list="pasta" [(ngModel)]="sure"
             (ngModelChange)="setInfo()" class="form-control short-input">
      <div>
      <datalist id="pasta">
              <option  *ngFor="let company of companys" [value]="company.addressName"> </option>
      </datalist>
      </div>
  `,
    styles:[`
    `]
})
export class AdressNameEditorComponent extends DefaultEditor implements AfterViewInit {


    companys;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudou/api/organizations?size=2000').map( res => res.json()).subscribe(
            data =>{this.companys = data;
                this.sure=this.cell.newValue
            }
    )
    }
    ngAfterViewInit() {}
    setInfo(){
        this.cell.newValue = this.sure
    }
}
