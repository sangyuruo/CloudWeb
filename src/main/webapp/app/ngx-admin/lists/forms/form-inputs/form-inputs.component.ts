import { Component } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;

  companies;
  sure;
  sure1;
  constructor(private http: Http){
      this.http.get('/emcloudou/api/companies?size=2000')
          .map(res=>res.json()).subscribe(data=>{this.companies=data});
      this.sure=this.sure1;
  }


  setInfo(){
     this.sure1=this.sure;

}
}
