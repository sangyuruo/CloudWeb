import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

    private resourceUrl = '/emcloudou/api/companies?size=2000';
    private companys: any;
    constructor(private http: Http) { }

    initDatas(){
        this.http.get('/emcloudou/api/organizations?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.companys = data ;
            })
    }

    getCompanys(): any {
        return this.companys;
    }

}
