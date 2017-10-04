import {Component, OnInit} from '@angular/core';
import {NotificationsService} from './notifications.service';
import {NotificationStatus} from '../models/notificationstatus.model';
import {MotionEvent} from '../models/motionevent.model';
import {SingleInputOptions} from '../shared/dialogs/single-input/single-input-options.interface';
import {NotifierService} from '../core/notifier/notifier.service';
import {AppSettings} from '../config/appsettings.class';
import * as moment from 'moment';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

    private status: NotificationStatus;
    private statusString = 'Unknown';
    private showPauseOptions = false;

    private pauseOptions: SingleInputOptions;
    private notifications: MotionEvent[];
    private unreadCount = 0;
    private showNotifications = false;

    constructor(private notificationService: NotificationsService, private notifier: NotifierService) {
        this.pauseOptions = {
            title: 'Pause Duration',
            inputLabel: 'Duration (minutes)',
            inputValue: '60',
            okButton: 'Pause'
        };
    }

    private updateStatus(status: NotificationStatus) {
        this.status = status;
        if (status.enabled) {
            this.statusString = 'Enabled';
        } else if (status.paused) {
            this.statusString = 'Paused until ' + moment(status.unpause_at).calendar() + ' (' + moment(status.unpause_at).fromNow() + ')';
        } else {
            this.statusString = 'Disabled';
        }
        this.showPauseOptions = false;
    }

    private updateNotifications(notifications: MotionEvent[]) {
        this.notifications = notifications.map((notification) => {
            notification.url = AppSettings.MOTION_VIDEO_URL + '/' + notification.filename;
            return notification;
        });
        this.refreshReadCount();
        // this.unreadCount = this.notifications.reduce((count, notification) => {
        //     return count + (notification.read_at ? 0 : 1);
        // }, 0);
    }

    togglePauseOptions(): void {
        this.showPauseOptions = !this.showPauseOptions;
    }

    ngOnInit() {
        this.notificationService.getNotificationStatus().subscribe((status) => this.updateStatus(status));
        this.refreshReadCount();
    }

    refreshReadCount() {
        this.notificationService.getNotificationsUnreadCount().subscribe((count) => this.unreadCount = count);
    }

    viewNotifications(unread = false): void {
        this.notificationService.getNotifications(unread).subscribe((notifications) => this.updateNotifications(notifications));
        this.showNotifications = true;
    }

    hideNotifications(): void {
        this.showNotifications = false;
    }

    pause(duration): void {
        duration = parseInt(duration);
        if (!Number.isInteger(duration) || duration <= 0) {
            this.notifier.error('Pause duration must be an integer > 0');
            return;
        }
        this.notificationService.pauseNotifications(duration).subscribe((status) => this.updateStatus(status));
    }

    enable(): void {
        this.notificationService.enableNotifications().subscribe((status) => this.updateStatus(status));
    }

    disable(): void {
        this.notificationService.disableNotifications().subscribe((status) => this.updateStatus(status));
    }

    markAllAsRead(): void {
        this.notificationService.markAllNotificationsAsRead().subscribe((notifications) => this.updateNotifications(notifications));
    }

    markAsRead(id): void {
        this.notificationService.markNotificationAsRead(id).subscribe((notifications) => {
            this.updateNotifications(notifications);
            if (this.unreadCount === 0) {
                this.showNotifications = false;
            }
        });
    }
}
