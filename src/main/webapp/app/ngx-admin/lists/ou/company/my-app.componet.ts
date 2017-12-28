import {Component, Input, OnInit} from '@angular/core';



@Component({
    selector: 'my-app',
    template: `
      <a>{{query}}</a>
       
    `
})
export class MyAppComponet implements OnInit {
    @Input()
    query:string
    constructor() {}
    ngOnInit() {}

}
