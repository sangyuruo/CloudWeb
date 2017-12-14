import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-d3-pie',
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent implements OnDestroy {
  results = [
  ];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;
    companys: any;
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
              this.results.push({name:this.companys[i].orgName, value :this.companys[i].id })
          }
      }

  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
