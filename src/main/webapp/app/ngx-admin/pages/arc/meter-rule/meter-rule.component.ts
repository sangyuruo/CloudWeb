import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {ArcService} from "../arc.service";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './meter-rule.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class MeterRuleComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true,
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
    columns: {
        meterCode: {
        title: '设备编码',
        type: 'string',
      },
        meterName: {
            title: '设备名称',
            type: 'string',
        },
        ruleCode: {
            title: '规则编码',
            type: 'string',
        },
        ruleName: {
        title: '规则名称',
        type: 'string',
      },
        enable: {
            title: '是否有效',
            type: 'Boolean',
        },
    },
  };

  source: LocalDataSource = new LocalDataSource();

    constructor(private service: ArcService,
                private http:Http,
                private eventManager:JhiEventManager) {
        this.service.getDataMeterRule().subscribe(data => (this.source.load(data)))
    }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
        this.service.deleteMeterRule(event.data.id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'MeterRuleListModification',
                content: 'Deleted an MeterRule'
            });
        });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMeterRule(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMeterRule(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
