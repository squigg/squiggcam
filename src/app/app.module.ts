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
import { MediaplayerComponent } from './mediaplayer/mediaplayer.component';
import { ModuleComponent } from './module/module.component';

@NgModule({
    declarations: [
        AppComponent,
        PhoneComponent,
        CameraComponent,
        MediaplayerComponent,
        ModuleComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        NotificationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
