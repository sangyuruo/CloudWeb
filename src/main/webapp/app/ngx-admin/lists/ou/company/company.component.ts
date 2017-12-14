import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Http, Headers} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";

import 'rxjs/Rx';

import {OuService} from "../ou.service";
import {CompanyNameEditorComponent} from "./companyname-editor.component";
import {CompanyCodeEditorComponent} from "./companycode-editor.component";
import {AdressNameEditorComponent} from "./adressname-editor.component";


@Component({
    selector: 'ngx-smart-table',
    templateUrl: './company.component.html',
    styles: [`
        nb-card {
            transform: translate3d(0, 0, 0);
        }
    `],
})
export class SmartTableComponent {
    data = [
        {
            id: 4,
            name: 'Patricia Lebsack',
            email: 'Julianne.OConner@kory.org',
            passed: 'Yes',
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            email: 'Lucio_Hettinger@annie.ca',
            passed: 'No',
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            email: 'Karley_Dach@jasper.info',
            passed: 'Yes',
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            email: 'Telly.Hoeger@billy.biz',
            passed: 'No',
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            email: 'Sherwood@rosamond.me',
            passed: 'Yes',
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            email: 'Chaim_McDermott@dana.io',
            passed: 'No',
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            email: 'Rey.Padberg@karina.biz',
            passed: 'No',
        },
        {
            id: 11,
            name: 'Nicholas DuBuque',
            email: 'Rey.Padberg@rosamond.biz',
            passed: 'Yes',
        },
    ];
    data1;
    ngOnInit() {
        this.service.getCompany().subscribe(data => (this.source.load(data)));

        this.http.get('/emcloudou/api/organizations?size=2000').map(res=>res.json()).subscribe(
            data =>{ this.data1= data;
                console.log(this.data1)

            }
        )
    }
    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate : true,
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        /*columns: {
          id: {
            title: 'ID',
            type: 'number',
          },
          firstName: {
            title: 'First Name',
            type: 'string',
          },
          lastName: {
            title: 'Last Name',
            type: 'string',
          },
          username: {
            title: 'Username',
            type: 'string',
          },
          email: {
            title: 'E-mail',
            type: 'string',
          },
          age: {
            title: 'Age',
            type: 'number',
          },
        },*/
        columns: {
            /* id: {
                 title: 'ID',
                 type: 'number',
             },*/
            companyName: {
                title: 'Company Name',
                type: 'html',
                editor: {
                    type: 'custom',
                    component:  CompanyNameEditorComponent,
                },
            },
            /*/companyName: {
                title: 'Company Name',
                type: 'string',
            },*/
            parentCompanyName: {
                title: '父公司名',
                type: 'string',
            },
            companyCode: {
                title: '公司代码',
                type: 'html',
                editor: {
                    type: 'custom',
                    component:  CompanyCodeEditorComponent,
                },
            },
            countryCode: {
                title: '国家代码',
                type: 'string',
            },
            cityCode: {
                title: '城市代码',
                type: 'string',
            },

            /*addressCode: {
                title: 'Address Code',
                type: 'number',
            },*/
            addressName: {
                title: '地址',
                type: 'html',
                editor: {
                    type: 'custom',
                    component:  AdressNameEditorComponent,
                },
            },
            /*legalPerson: {
                title: 'Legal Person',
                type: 'number',
            },*/
            /*parentCompanyCode: {
                title: 'Parent CompanyCode',
                type: 'number',
            },*/
            /*remark: {
                title: 'Remark',
                type: 'number',
            },*/
            /*attachsNum: {
                title: 'Attachs Num',
                type: 'number',
            },*/
            /* seqNo: {
                 title: 'seq No',
                 type: 'number',
             },*/
            enable: {
                title: '是否可用',
                editor: {
                    type: 'list',
                    config: {
                        selectText: 'Select...',
                        list: [
                            { value: true, title: 'true' },
                            { value: false, title: 'false' }
                        ],
                    },
                },
            },

            /*createTime: {
                title: 'create Time',
                type: 'number',
            },*/
            /*updatedBy: {
                title: 'Updated By',
                type: 'number',
            },*/


        },
    };

    source: LocalDataSource = new LocalDataSource();

    isSaving:boolean;
    constructor(private service: OuService,
                private http:Http,
                private eventManager:JhiEventManager
    ) {
    }



    onDeleteConfirm(event): void {
        if (window.confirm('确定删除不?')) {
            this.service.deleteCompany(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);

            })
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event) {
        if (window.confirm('确定新增不?')) {
            this.service.saveCompany(event.newData).subscribe((response) =>{
                event.confirm.resolve(response);

            });
        }else{
            event.confirm.reject();
        }
    }
    onSaveConfirm(event) {
        if (window.confirm('确定修改不?')) {
            this.service.updateCompany(event.newData).subscribe((response) =>{
                event.confirm.resolve(response);
                console.log(response);
            });
        }else{
            event.confirm.reject();
        }
    }



}