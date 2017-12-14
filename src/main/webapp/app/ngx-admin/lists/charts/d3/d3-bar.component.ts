import {
     Component, DoCheck, ElementRef, OnDestroy,
    OnInit, ViewChild
} from '@angular/core';
import { NbThemeService } from '@nebular/theme';


import {ApiService} from "../../../app.service";


@Component({
  selector: 'ngx-d3-bar',
  template: `
    <ngx-charts-bar-vertical
        #bars
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
  `,
})
export class D3BarComponent implements OnDestroy , OnInit, DoCheck

 {
     @ViewChild('bars') bars: ElementRef;
  results = [];
  test=[{name: 'china', value : 3232 },
      {name: 'germany', value : 5000 },
      {name: 'japan', value : 6000 }
  ]
    fetch = false;
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;
  companys: any;

  constructor(private theme: NbThemeService,
              private apiService: ApiService,

  ) {
      this.fetch = false;
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

    ngOnInit(){

    }
    ngDoCheck() {

    }

}
