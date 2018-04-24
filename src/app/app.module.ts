import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {NotificationsModule} from './notifications/notifications.module';
import {PhoneComponent} from './phone/phone.component';
import {MediaplayerModule} from './mediaplayer/mediaplayer.module';
import {CameraModule} from './camera/camera.module';
import {CustomHttpInterceptorService} from './core/interceptor/interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        PhoneComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        NotificationsModule,
        CameraModule,
        MediaplayerModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
