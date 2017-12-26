import { Injectable } from '@angular/core';


import {Http,Response} from "@angular/http";


@Injectable()
export class UiFeaturesService {

    companys;
    constructor(private http:Http){}
    Initcompanies(){
        this.http.get('/emcloudou/api/companies?size=2000').map(res=>res.json()).subscribe(data=>
        this.companys = data
        )
    }

    getcompanys(){
        return this.companys
    }


}


