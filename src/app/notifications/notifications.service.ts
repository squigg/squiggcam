import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NotificationStatus} from '../models/notificationstatus.model';
import {MotionEvent} from '../models/motionevent.model';
import {Http} from '@angular/http';
import {AppSettings} from '../config/appsettings.class';

@Injectable()
export class NotificationsService {

    constructor(private http: Http) {
    }

    sendNotificationStatusRequest(url: string, method: string): Observable<NotificationStatus> {
        const options = {method: method};
        return this.http.request(url, options).map((res) => {
            return res.json() as NotificationStatus;
        });
    }

    sendNotificationRequest(url: string, method: string): Observable<MotionEvent[]> {
        const options = {method: method};
        return this.http.request(url, options).map((res) => {
            return res.json().map((data) => {
                return new MotionEvent(data.id, data.data.timestamp, data.data.filename, data.read_at);
            });
        });
    }

    getNotificationsUnreadCount(): Observable<number> {
        return this.http.get(AppSettings.API_ENDPOINT + 'notification/unread').map((res) => {
            return res.json();
        });
    }

    getNotifications(unread = false): Observable<MotionEvent[]> {
        const url = 'notification/list' + (unread ? '/unread' : '');
        return this.sendNotificationRequest(AppSettings.API_ENDPOINT + url, 'get');
    }

    markNotificationAsRead(id): Observable<MotionEvent[]> {
        return this.sendNotificationRequest(AppSettings.API_ENDPOINT + `notification/${id}/read`, 'post');
    }

    markAllNotificationsAsRead(): Observable<MotionEvent[]> {
        return this.sendNotificationRequest(AppSettings.API_ENDPOINT + `notification/read`, 'post');
    }

    getNotificationStatus(): Observable<NotificationStatus> {
        return this.sendNotificationStatusRequest(AppSettings.API_ENDPOINT + 'notification/status', 'get');
    }

    disableNotifications(): Observable<NotificationStatus> {
        return this.sendNotificationStatusRequest(AppSettings.API_ENDPOINT + 'notification/disable', 'post');
    }

    enableNotifications(): Observable<NotificationStatus> {
        return this.sendNotificationStatusRequest(AppSettings.API_ENDPOINT + 'notification/enable', 'post');
    }

    pauseNotifications(duration = 60): Observable<NotificationStatus> {
        return this.sendNotificationStatusRequest(AppSettings.API_ENDPOINT + 'notification/pause/' + duration, 'post');
    }
}
