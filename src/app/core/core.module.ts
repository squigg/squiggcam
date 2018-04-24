import {NgModule} from '@angular/core';
import {SpinnerComponent} from './spinner/spinner.component';
import {SpinnerService} from './spinner/spinner.service';
import {MaterialModule} from '../shared/material/material.module';
import {NotifierService} from './notifier/notifier.service';

@NgModule({
    imports: [MaterialModule],
    declarations: [SpinnerComponent],
    entryComponents: [SpinnerComponent],
    providers: [SpinnerService, NotifierService],
})
export class CoreModule {

}
