import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NotificationStatus} from '../models/notificationstatus.model';
import {Http} from '@angular/http';
import {AppSettings} from '../config/appsettings.class';

@Injectable()
export class NotificationsService {

    constructor(private http: Http) {
    }

    sendNotificationRequest(url: string, method: string): Observable<NotificationStatus> {
        const options = {method: method};
        return this.http.request(url, options).map((res) => {
            return res.json() as NotificationStatus;
        });
    }

    getNotificationStatus(): Observable<NotificationStatus> {
        return this.sendNotificationRequest(AppSettings.API_ENDPOINT + 'notification/status', 'get');
    }

    disableNotifications(): Observable<NotificationStatus> {
        return this.sendNotificationRequest(AppSettings.API_ENDPOINT + 'notification/disable', 'post');
    }

    enableNotifications(): Observable<NotificationStatus> {
        return this.sendNotificationRequest(AppSettings.API_ENDPOINT + 'notification/enable', 'post');
    }

    pauseNotifications(duration = 60): Observable<NotificationStatus> {
        return this.sendNotificationRequest(AppSettings.API_ENDPOINT + 'notification/pause/' + duration, 'post');
    }

}
