import {Injectable} from '@angular/core';
import {CameraStatus} from '../models/camerastatus.model';
import {Observable} from 'rxjs/Observable';
import {AppSettings} from '../config/appsettings.class';
import {Http} from '@angular/http';

@Injectable()
export class CameraService {

    constructor(private http: Http) {
    }

    getStatus(): Observable<CameraStatus> {
        const options = {method: 'GET'};
        return this.http.request(AppSettings.API_ENDPOINT + 'camera/status', options).map((res) => {
            return res.json() as CameraStatus;
        });
    }

    setMotionDetection(enable: boolean): Observable<boolean> {
        const options = {method: 'POST'};
        const suffix = enable ? 'enable' : 'disable';
        console.log(enable, suffix);
        return this.http.request(AppSettings.API_ENDPOINT + 'camera/motion/' + suffix, options).map((res) => {
            return res.text().indexOf('<result>Ok</result>') !== -1;
        });
    }

}
