import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Device } from './device.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class DeviceService {

    private resourceUrl = SERVER_API_URL + 'api/devices';

    constructor(private http: Http) { }

    create(device: Device): Observable<Device> {
        const copy = this.convert(device);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(device: Device): Observable<Device> {
        const copy = this.convert(device);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Device> {
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
     * Convert a returned JSON object to Device.
     */
    private convertItemFromServer(json: any): Device {
        const entity: Device = Object.assign(new Device(), json);
        return entity;
    }

    /**
     * Convert a Device to a JSON which can be sent to the server.
     */
    private convert(device: Device): Device {
        const copy: Device = Object.assign({}, device);
        return copy;
    }
}
