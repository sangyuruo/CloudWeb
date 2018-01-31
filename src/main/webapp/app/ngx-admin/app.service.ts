import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {NbMenuItem} from "@nebular/theme";

@Injectable()
export class ApiService {

    private organizationes: any;
    private companies: any;
    private compoints:any;
    private addresses:any;

    private menus: NbMenuItem[];

    constructor(private http: Http) { }

    initOrganizationesDatas(){
        this.http.get('/emcloudou/api/organizations?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.organizationes = data;
            })
    }
    getOrganizationes(): any {
        return this.organizationes;
    }

    initAddressesDatas(){
        this.http.get('/emcloudloc/api/addresses?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.addresses = data;
            })
    }


    getAddresses(): any {
        return this.addresses;
    }

    getMenus(): NbMenuItem[]{
        return this.menus;
    }


    initCompaniesDatas(){
        this.http.get('/emcloudou/api/companies?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.companies = data;
            })
    }
    getCompanies(): any {
        return this.companies;
    }


    initCompointsDatas(){
        this.http.get('/emcloudcpi/api/compoints?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.compoints = data;
            })
    }
    getCompoints(): any {
        return this.compoints;
    }

    initMenus(){
        this.menus =[
            {
                title: '报表分析',
                icon: 'nb-bar-chart',
                children: [
                    {
                        title: 'Echarts',
                        link: '/pages/charts/echarts',
                    },
                    {
                        title: 'Charts.js',
                        link: '/pages/charts/chartjs',
                    },
                    {
                        title: 'D3',
                        link: '/pages/charts/d3',
                    },
                ],
            },
            {
                title: '组织架构',
                icon: 'nb-tables',
                children: [
                    {
                        title: '公司',
                        link: '/pages/ou/company',

                    },
                    {
                        title: '组织',
                        link: '/pages/ou/organization',
                    },
                    {
                        title: '组织2',
                        link: '/pages/ou/orgtree',
                    },
                ],
            },

            {
                title: '设备管理',
                icon: 'nb-tables',
                children: [
                    {
                        title: '设备分类信息',
                        link: '/pages/mi/MeterCategoryInfo',
                    },
                    {
                        title: '设备信息',
                        link: '/pages/mi/MeterInfo',
                    },
                    {
                        title: '设备状态',
                        link: '/pages/mi/MeterStatus',
                    },
                    {
                        title: '多路开关信息',
                        link: '/pages/mi/multiwaySwitchInfo',
                    },
                    {
                        title: '多路开关状态',
                        link: '/pages/mi/MultiwaySwitch',
                    },
                ],

            },
            {
                title: '报警服务',
                icon: 'nb-tables',
                children: [
                    {
                        title: '报警服务规则',
                        link: '/pages/arc/AlarmRule',
                    },
                    {
                        title: '设备规则',
                        link: '/pages/arc/MeterRule',
                    },
                    {
                        title: '规则属性',
                        link: '/pages/arc/RuleAttributes',
                    },

                ],
            },
            {
                title: '通知服务',
                icon: 'nb-tables',
                children: [
                    {
                        title: '消息模板',
                        link: '/pages/nfs/message-template',
                    },
                ],
            },
            {
                title: '资源管理',
                icon: 'nb-tables',
                children: [
                    {
                        title: '资源管理',
                        link: '/pages/resource/Resource',
                    },
                ],
            },
            {
                title: '字典工程',
                icon: 'nb-tables',
                children: [
                    {
                        title: '字典',
                        link: '/pages/dict/dictionary',
                    },

                    {
                        title: '字典分类',
                        link: '/pages/dict/DictionaryClassify',
                    },
                ],
            },
            {
                title: '地区地点',
                icon: 'nb-tables',
                children: [
                    {
                        title: '地址',
                        link: '/pages/loc/address',
                    },

                    {
                        title: '地区',
                        link: '/pages/loc/area',
                    },
                ],
            },
            {
                title: '信息点采集',
                icon: 'nb-tables',
                children: [
                    {
                        title: '信息点采集',
                        link: '/pages/cpi/comPoint',
                    },

                    {
                        title: '信息点采集状态',
                        link: '/pages/cpi/ComPointStatus',
                    },
                ],
            },

            {
                title: 'Maps',
                icon: 'nb-location',
                children: [
                    {
                        title: 'Google Maps',
                        link: '/pages/maps/gmaps',
                    },
                    {
                        title: 'Baidu Maps',
                        link: '/pages/maps/baidu-maps',
                    },
                    {
                        title: 'BdMaps',
                        link: '/pages/maps/bdmaps',
                    },
                    {
                        title: 'panorama',
                        link: '/pages/maps/panorama',
                    },
                    {
                        title: 'Bubble Maps',
                        link: '/pages/maps/bubble',
                    },
                ],
            },

            {
                title: 'entities',
                icon: 'nb-tables',
                children: [
                    {
                        title: '公司',
                        link: '/pages/company',
                    },
                ],
            },
            {
                title: '管理',
                icon: 'nb-compose',
                children: [
                    {
                        title: '网关',
                        link: '/pages/gateway',
                    },
                    {
                        title: '用户管理',
                        link: '/pages/user-management',
                    },
                    {
                        title: '资源监控',
                        link: '/pages/jhi-metrics',
                    },
                    {
                        title: '服务状态',
                        link: '/pages/jhi-health',
                    },
                    {
                        title: '配置',
                        link: '/pages/jhi-configuration',
                    },
                    {
                        title: '审核',
                        link: '/pages/audits',
                    },
                    {
                        title: '日志',
                        link: '/pages/logs',
                    },
                    {
                        title: 'API',
                        link: '/pages/docs',
                    },

                ],
            },

        ];
    }

}
