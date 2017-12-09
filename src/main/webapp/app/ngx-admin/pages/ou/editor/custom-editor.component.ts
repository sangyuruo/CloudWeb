import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
import {Http} from "@angular/http";

@Component({
  template: `
      <div class="form-group">
          <label>link</label>
          <select class="form-control">
              <option *ngFor="let company of companys">{{company.companyName}}</option>
          </select>
      </div>
  `,
})
export class CustomEditorComponent extends DefaultEditor implements AfterViewInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('url') url: ElementRef;
  @ViewChild('htmlValue') htmlValue: ElementRef;
  companys;
  constructor(private http:Http) {
      super();
      this.http.get('/emcloudou/api/companies?size=2000').map(res=>res.json()).subscribe(
          data=>this.companys=data)

  }
  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      this.name.nativeElement.value = this.getUrlName();
      this.url.nativeElement.value = this.getUrlHref();
    }
  }

  updateValue() {
    const href = this.url.nativeElement.value;
    const name = this.name.nativeElement.value;
    this.cell.newValue = `<a href='${href}'>${name}</a>`;
  }

  getUrlName(): string {
    return this.htmlValue.nativeElement.innerText;
  }

  getUrlHref(): string {
    return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
  }
}
