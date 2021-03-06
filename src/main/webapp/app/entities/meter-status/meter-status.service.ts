import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { JhiDateUtils } from 'ng-jhipster';

import { MeterStatus } from './meter-status.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class MeterStatusService {

    private resourceUrl = '/emcloudmi/api/meter-statuses';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(meterStatus: MeterStatus): Observable<MeterStatus> {
        const copy = this.convert(meterStatus);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(meterStatus: MeterStatus): Observable<MeterStatus> {
        const copy = this.convert(meterStatus);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<MeterStatus> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to MeterStatus.
     */
    private convertItemFromServer(json: any): MeterStatus {
        const entity: MeterStatus = Object.assign(new MeterStatus(), json);
        entity.recordTime = this.dateUtils
            .convertDateTimeFromServer(json.recordTime);
        return entity;
    }

    /**
     * Convert a MeterStatus to a JSON which can be sent to the server.
     */
    private convert(meterStatus: MeterStatus): MeterStatus {
        const copy: MeterStatus = Object.assign({}, meterStatus);

        copy.recordTime = this.dateUtils.toDate(meterStatus.recordTime);
        return copy;
    }
}
