import {NgModule} from '@angular/core';
import {CustomHttpInterceptorService} from './interceptor/interceptor.service';
import {SpinnerComponent} from './spinner/spinner.component';
import {SpinnerService} from './spinner/spinner.service';
import {MaterialModule} from '../shared/material/material.module';
import {NotifierService} from './notifier/notifier.service';
import {CustomHttpInterceptorModule} from './interceptor/interceptor.module';

@NgModule({
    imports: [MaterialModule, CustomHttpInterceptorModule],
    declarations: [SpinnerComponent],
    entryComponents: [SpinnerComponent],
    providers: [SpinnerService, NotifierService],
})
export class CoreModule {

    constructor(httpInterceptor: CustomHttpInterceptorService) {
        httpInterceptor.setup();
    }
}
