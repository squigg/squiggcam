import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {NotificationsModule} from './notifications/notifications.module';

@NgModule({
    declarations: [
        AppComponent,
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
