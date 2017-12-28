import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";
import {createRequestOption} from "../../../shared/model/request-util";


@Injectable()
export class OuService {
    constructor(private http: Http) {
    }
    getCompany() {
        return this.http.get('/emcloudou/api/companies')
            .map(res => res.json())
    }


    getOrganization() {
        return this.http.get('/emcloudou/api/organizations')
            .map(res => res.json())
    }
    deleteCompany(id: number): Observable<Response> {
        return this.http.delete(
            `${'/emcloudou/api/companies'}/${id}`);
    }

    deleteOrganization(id: number): Observable<Response> {
        return this.http.delete(
            `${'/emcloudou/api/organizations'}/${id}`);
    }

    saveCompany(data){
       return this.http.post('/emcloudou/api/companies', data)
            .map(res=>res.json())
    }

    saveOrganization(data) {
        return this.http.post('/emcloudou/api/organizations', data)
            .map(res => res.json());
    }

    updateCompany(data): Observable<Response> {
        return this.http.put('/emcloudou/api/companies', data)
            .map(res => res.json());
    }

    updateOrganization(data): Observable<Response> {
        return this.http.put('/emcloudou/api/organizations', data)
            .map(res => res.json());
    }



    private  companys;
    private origanizations;
    initDatas(){
        this.http.get('/emcloudou/api/organizations?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.companys = data ;
            });
        this.http.get('/emcloudou/api/companies?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.origanizations = data ;
            });

    }

    getCompanys(): any {
        return this.companys;
    }
    getOriganizations():any{
        return this.origanizations;
    }


}


