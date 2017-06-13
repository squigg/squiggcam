import {Component, OnInit} from '@angular/core';
import {NotificationsService} from './notifications.service';
import {NotificationStatus} from '../models/notificationstatus.model';
import {SingleInputOptions} from '../shared/dialogs/single-input/single-input-options.interface';
import {NotifierService} from '../core/notifier/notifier.service';
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

    constructor(private notificationService: NotificationsService, private notifier: NotifierService) {
        this.pauseOptions = {
            title: 'Pause Duration',
            message: 'Enter pause duration (minutes):',
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

    togglePauseOptions(): void {
        this.showPauseOptions = !this.showPauseOptions;
    }

    ngOnInit() {
        this.notificationService.getNotificationStatus().subscribe((status) => this.updateStatus(status));
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

}
