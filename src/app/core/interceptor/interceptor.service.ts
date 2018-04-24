import {Injectable} from '@angular/core';
import {SpinnerService} from '../spinner/spinner.service';
import {Observable} from 'rxjs/Observable';
import {catchError, filter, finalize, tap} from 'rxjs/operators';
import {_throw} from 'rxjs/observable/throw';
import {NotifierService} from '../notifier/notifier.service';
import {HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService, private notifierService: NotifierService) {
    }

    showSuccessMessage(response: HttpResponse<any>) {
        if (response.body.message) {
            this.notifierService.success(response.body.message);
        }
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(req).pipe(
            filter((response) => response.type === HttpEventType.Response),
            tap((response) => this.showSuccessMessage(response as HttpResponse<any>)),
            finalize(() => this.spinnerService.hide()),
            catchError((response) => this.handleError(response)),
        );
    }

    handleError(response: HttpErrorResponse) {
        if (!(response.error instanceof Error)) {
            const err = response.error.error || JSON.stringify(response.error);
            const message = `${response.status} - ${response.statusText || ''} ${err}`;
            this.notifierService.error(message);
        }
        return _throw(response.error);
    }
}
