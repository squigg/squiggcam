import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HttpInterceptor, HttpInterceptorModule} from 'angular2-http-interceptor';
import {SpinnerService} from './shared/spinner/spinner.service';
import {CustomHttpInterceptor} from './shared/interceptor/interceptor.class';
import {AppComponentsModule} from './app-components.module';
import {NotifierService} from 'app/shared/notifier/notifier.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        AppComponentsModule,
        HttpInterceptorModule.withInterceptors([{
            deps: [SpinnerService, NotifierService],
            provide: HttpInterceptor,
            useClass: CustomHttpInterceptor,
            multi: true
        }])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
