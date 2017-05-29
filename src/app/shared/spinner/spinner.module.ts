import {NgModule} from '@angular/core';
import {SpinnerService} from './spinner.service';
import {SpinnerComponent} from './spinner.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
    imports: [MaterialModule],
    declarations: [SpinnerComponent],
    entryComponents: [SpinnerComponent],
    providers: [SpinnerService],
})
export class SpinnerModule {
}
