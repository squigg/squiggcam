import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppComponentsModule} from './app-components.module';
import {CustomHttpInterceptorModule} from './shared/interceptor/interceptor.module';

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
        CustomHttpInterceptorModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
