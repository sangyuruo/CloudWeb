import {Component, ViewChild, ElementRef, AfterViewInit, SimpleChanges, OnChanges} from '@angular/core';

import {Cell, DefaultEditor, Editor} from 'ng2-smart-table';
import {Http} from "@angular/http";

@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
            <option *ngFor="let company of companys" [value]="company.companyCode">{{company.companyCode}}</option>
        </select>


    `,
})
export class CompanyCodeEditorComponent extends DefaultEditor implements AfterViewInit,OnChanges {

    @ViewChild('name') name: ElementRef;
    companys;
    sure;

    constructor(private http: Http) {
        super();
    }

    ngAfterViewInit() {
        this.http.get('/emcloudou/api/organizations?size=2000').map(res => res.json()).subscribe(
            data => {
                this.companys = data;
                console.error(this.sure)
                console.error(this.cell.newValue)
                console.error(this.cell.getValue())
                this.name.nativeElement.value = this.cell.newValue
                console.error(this.cell.newValue)
            })
    }


    setInfo() {
        console.log(this.cell.newValue)
        this.cell.newValue = this.name.nativeElement.value
        console.log(this.cell.newValue)
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.error(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

}
