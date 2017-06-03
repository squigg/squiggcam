import {Component, OnInit} from '@angular/core';
import {CustomHttpInterceptorService} from './shared/interceptor/interceptor.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(httpInterceptor: CustomHttpInterceptorService) {
        httpInterceptor.setup();
    }

    ngOnInit(): void {
    }

}
