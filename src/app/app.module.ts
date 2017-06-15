import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {NotificationsModule} from './notifications/notifications.module';
import {PhoneComponent} from './phone/phone.component';
import {CameraComponent} from './camera/camera.component';
import {MediaplayerModule} from './mediaplayer/mediaplayer.module';

@NgModule({
    declarations: [
        AppComponent,
        PhoneComponent,
        CameraComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        NotificationsModule,
        MediaplayerModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
