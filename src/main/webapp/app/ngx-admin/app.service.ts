import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

    private organizationes: any;
    private companies: any;
    private source: any;
    constructor(private http: Http) { }



    initCompaniesDatas(){
        this.http.get('/emcloudou/api/companies?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.companies = data;
            })
    }
    getCompanies(): any {
        return this.companies;
    }

    initOrganizationesDatas(){
        this.http.get('/emcloudou/api/organizations?size=210').map(res=>res.json()).subscribe(
            data => {
                this.organizationes = data;
            })
    }
    getOrganizationes(): any {
        return this.organizationes;
    }
}
