import {Request, Response} from '@angular/http';

import {IHttpInterceptor} from 'angular2-http-interceptor';
import {SpinnerService} from '../spinner/spinner.service';
import {Observable} from 'rxjs/Observable';
import {NotifierService} from '../notifier/notifier.service';

export class CustomHttpInterceptor implements IHttpInterceptor {

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
        console.log('Interceptor: success', data);
        if (data.message) {
            console.log('Interceptor: success', data.message);
            this.notifierService.success(data.message);
        }
    }

    constructor(private spinnerService: SpinnerService, private notifierService: NotifierService) {
        console.log('I was made');
    }

    before(request: Request): Request {
        console.log('Interceptor: before');
        this.spinnerService.show();
        return request;
    }

    after(res: Observable<Response>): Observable<any> {
        console.log('Interceptor: after');
        this.spinnerService.hide();
        res.catch(this.handleError);
        res.map(this.showSuccessMessage);
        res.map((resp: Response) => {
            console.log(resp.json());
        });
        return res;
    }
}
