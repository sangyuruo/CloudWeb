import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ApiService} from "../../../app.service";

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
   companys:any
  constructor(private theme: NbThemeService,
              private apiService: ApiService) {


  }

  ngAfterViewInit() {
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

          const colors = config.variables;
          const echarts: any = config.variables.echarts;

          this.options = {
              backgroundColor: echarts.bg,
              color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
              tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b} : {c} ({d}%)',
              },
              legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                  textStyle: {
                      color: echarts.textColor,
                  },
              },
              series: [
                  {
                      name: 'Countries',
                      type: 'pie',
                      radius: '80%',
                      center: ['50%', '50%'],
                      data: [

                      ],
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: echarts.itemHoverShadowColor,
                          },
                      },
                      label: {
                          normal: {
                              textStyle: {
                                  color: echarts.textColor,
                              },
                          },
                      },
                      labelLine: {
                          normal: {
                              lineStyle: {
                                  color: echarts.axisLineColor,
                              },
                          },
                      },
                  },
              ],
          };

          this.companys = this.apiService.getCompanys()
          if( this.companys && this.companys.length ){
              for(let i=0;i<this.companys.length;i++){
                  this.options.legend.data.push(this.companys[i].orgName);
                  this.options.series[0].data.push({value:this.companys[i].id,name:this.companys[i].orgName})
              }
          }




      });

  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
