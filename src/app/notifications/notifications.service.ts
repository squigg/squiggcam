import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NotificationStatus} from '../models/notificationstatus.model';
import {Http} from '@angular/http';
import {AppSettings} from '../config/appsettings.class';

@Injectable()
export class NotificationsService {

    constructor(private http: Http) {
    }

    getNotificationStatus(): Observable<NotificationStatus> {
        return this.http.get(AppSettings.API_ENDPOINT + 'notifications').map((res) => {
            return res.json() as NotificationStatus;
        });
    }

}
