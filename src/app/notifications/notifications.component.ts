import {Component, OnInit} from '@angular/core';
import {NotificationsService} from './notifications.service';
import {NotificationStatus} from '../models/notificationstatus.model';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

    private status: NotificationStatus;
    private statusString = 'Unknown';

    constructor(private notificationService: NotificationsService) {
    }

    ngOnInit() {
        this.notificationService.getNotificationStatus().subscribe((status) => this.updateStatus(status));
    }

    private updateStatus(status: NotificationStatus) {
        this.status = status;
        if (status.enabled) {
            this.statusString = 'Enabled';
        } else if (status.paused) {
            this.statusString = 'Paused';
        } else {
            this.statusString = 'Disabled';
        }
    }
}
