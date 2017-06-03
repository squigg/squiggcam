import {Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {SpinnerService} from '../spinner/spinner.service';
import {Observable} from 'rxjs/Observable';
import {NotifierService} from '../notifier/notifier.service';
import {HttpInterceptorService} from 'ng-http-interceptor';

@Injectable()
export class CustomHttpInterceptorService {

    constructor(private httpInterceptor: HttpInterceptorService,
                private spinnerService: SpinnerService,
                private notifierService: NotifierService) {
    }

    setup() {
        this.httpInterceptor.request().addInterceptor(this.before.bind(this));
        this.httpInterceptor.response().addInterceptor(this.after.bind(this));
    }

    handleError(error: Response | any) {
        console.log('Interceptor: error', error);
        let message: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            message = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            message = error.message ? error.message : error.toString();
        }

        this.notifierService.error(message);
        return Observable.throw(message);
    }

    showSuccessMessage(data: any) {
        data = data.json();
        if (data.message) {
            this.notifierService.success(data.message);
        }
    }

    before(data: any, method: string): any {
        this.spinnerService.show();
        return data;
    }

    after(res: Observable<Response>): Observable<Response> {
        this.spinnerService.hide();
        return res.catch(this.handleError.bind(this))
            .do(this.showSuccessMessage.bind(this));
    }
}
