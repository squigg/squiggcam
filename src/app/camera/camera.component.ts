import {Component, OnInit} from '@angular/core';
import {AppSettings} from '../config/appsettings.class';
import {NotifierService} from '../core/notifier/notifier.service';
import {CameraService} from './camera.service';
import {CameraStatus} from '../models/camerastatus.model';

@Component({
    selector: 'app-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

    private videoUrl: string;
    private configUrl: string;
    private status: CameraStatus;

    constructor(private notifier: NotifierService, private cameraService: CameraService) {
    }

    ngOnInit() {
        this.videoUrl = AppSettings.LIVE_VIDEO_URL;
        this.configUrl = AppSettings.PHONE_CONFIG_URL;
        this.refreshStatus();
    }

    refreshStatus() {
        this.cameraService.getStatus().subscribe((status) => this.updateStatus(status));
    }

    updateStatus(status: CameraStatus) {
        this.status = status;
    }

    setMotionDetection(enable: boolean): void {
        this.cameraService.setMotionDetection(enable).subscribe((success) => this.refreshStatus());
    }
}
