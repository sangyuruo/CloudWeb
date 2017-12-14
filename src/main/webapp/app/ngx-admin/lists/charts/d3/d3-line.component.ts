import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-d3-line',
  template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
})
export class D3LineComponent implements OnDestroy {
  multi = [
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = '公司';
  showYAxisLabel = true;
  yAxisLabel = '用电';
  colorScheme: any;
  themeSubscription: any;
    companys: any;

    constructor(private theme: NbThemeService,
               private apiService: ApiService    ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
        this.companys = this.apiService.getCompanys()
        if( this.companys && this.companys.length ) {
            for (let i = 0; i < this.companys.length; i++) {
                this.multi.push(
                       {
                        name: this.companys[i].orgName,
                        series: [
                            {name: '2010', value: this.companys[i].id},
                            {name: '2011', value: this.companys[i].companyCode}]
                    }
                )
            }
        }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
