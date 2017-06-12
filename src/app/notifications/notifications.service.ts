import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NotificationStatus} from '../models/notificationstatus.model';
import {Http} from '@angular/http';
import {AppSettings} from '../config/appsettings.class';
import * as _ from 'lodash';

@Injectable()
export class NotificationsService {

    constructor(private http: Http) {
    }

    getNotificationStatus(): Observable<NotificationStatus> {
        return this.http.get(AppSettings.API_ENDPOINT + 'notifications/status').map((res) => {
            const json = res.json();
            return new NotificationStatus(
                (json.enabled === '1'),
                (json.paused === '1'),
                parseInt(json.paused_duration),
                json.unpause_at
            );
        });
    }

}
