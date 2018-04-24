import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {NotificationStatus} from '../models/notificationstatus.model';
import {MotionEvent} from '../models/motionevent.model';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../config/appsettings.class';

@Injectable()
export class NotificationsService {

    constructor(private http: HttpClient) {
    }

    sendNotificationStatusRequest(url: string, method: string): Observable<NotificationStatus> {
        return this.http.request<NotificationStatus>(method, url);
    }

    sendNotificationRequest(url: string, method: string): Observable<MotionEvent[]> {
        return this.http.request(method, url).map((res) => {
            return res['data'].map((data) => {
                return new MotionEvent(data.id, data.data.timestamp, data.data.filename, data.read_at);
            });
        });
    }

    getNotificationsUnreadCount(): Observable<number> {
        return this.http.get<number>(AppSettings.API_ENDPOINT + 'notification/unread');
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
