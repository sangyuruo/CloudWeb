import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-d3-advanced-pie',
  template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
})
export class D3AdvancedPieComponent implements OnDestroy {
  single = [];
  colorScheme: any;
  themeSubscription: any;
  companys;
  constructor(private theme: NbThemeService,

  private apiService:ApiService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
      this.companys = this.apiService.getCompanys()
      if( this.companys && this.companys.length ){
          for(let i=0;i<this.companys.length;i++){
              this.single.push({name:this.companys[i].orgName, value :this.companys[i].id })
          }
      }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
