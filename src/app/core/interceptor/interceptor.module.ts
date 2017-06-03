import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CustomHttpInterceptorService} from './interceptor.service';
import {HttpInterceptorModule} from 'ng-http-interceptor';

@NgModule({
    imports: [
        SharedModule,
        HttpInterceptorModule,
    ],
    providers: [CustomHttpInterceptorService],
    declarations: []
})
export class CustomHttpInterceptorModule {
}
