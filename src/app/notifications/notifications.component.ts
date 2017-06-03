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

    constructor(private notificationService: NotificationsService) {
    }

    ngOnInit() {
        this.notificationService.getNotificationStatus().subscribe((status) => this.status = status);
    }

}
