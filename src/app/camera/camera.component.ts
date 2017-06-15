import {Component, OnInit} from '@angular/core';
import {AppSettings} from '../config/appsettings.class';

@Component({
    selector: 'app-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

    private videoUrl: string;

    constructor() {
    }

    ngOnInit() {
        this.videoUrl = AppSettings.LIVE_VIDEO_URL;
    }

    turnOffStreaming(): void {

    }

}
