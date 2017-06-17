import {Component, OnInit} from '@angular/core';
import {AppSettings} from '../config/appsettings.class';
import {NotifierService} from '../core/notifier/notifier.service';

@Component({
    selector: 'app-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

    private videoUrl: string;

    constructor(private notifier: NotifierService) {
    }

    ngOnInit() {
        this.videoUrl = AppSettings.LIVE_VIDEO_URL;
        this.configUrl = AppSettings.PHONE_CONFIG_URL;
    }

    turnOffStreaming(): void {
        this.notifier.error('Not yet implemented');
    }

}
