import {Injectable} from '@angular/core';
import {CameraStatus} from '../models/camerastatus.model';
import {Observable} from 'rxjs/Observable';
import {AppSettings} from '../config/appsettings.class';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CameraService {

    constructor(private http: HttpClient) {
    }

    getStatus(): Observable<CameraStatus> {
        return this.http.get<CameraStatus>(AppSettings.API_ENDPOINT + 'camera/status');
    }

    setMotionDetection(enable: boolean): Observable<boolean> {
        const suffix = enable ? 'enable' : 'disable';
        console.log(enable, suffix);
        return this.http.post(AppSettings.API_ENDPOINT + 'camera/motion/' + suffix, enable, {responseType: 'text'}).map((res) => {
            return res.indexOf('<result>Ok</result>') !== -1;
        });
    }

}
