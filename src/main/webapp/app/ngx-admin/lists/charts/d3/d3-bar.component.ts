import {
    AfterContentChecked,
    AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy,
    OnInit, ViewChild
} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Http} from "@angular/http";
import {LocalDataSource} from "ng2-smart-table";
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
  results = [
      /*{name: 'china', value : 3232 },
      {name: 'germany', value : 5000 },
      {name: 'japan', value : 6000 }*/
  ];
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
              private  http: Http
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
        // this.http.get('/emcloudou/api/organizations?size=2000').map(res=>res.json()).subscribe(
        //     data => {
        //         this.companys.load(data);
        //         console.log(this.bars)
        //
        //         if( this.bars && this.bars.nativeElement ){
        //             console.log(this.bars.nativeElement)
        //             this.bars.nativeElement.attributes[0].childNodes=data
        //             // console.log(this.bars.chartElement)
        //         }
        //     })

    }
    ngDoCheck() {
       //  if( this.companys && this.companys.length ){
       //      for (let i = 0; i < this.companys.length; i++ ) {
       //          // this.results.push({name: this.test[i].name , value : 3000 })
       //          this.results.push({name: this.companys[i].orgName, value : 3000 + 1000 * i })
       //      }
       // }
    }

}
