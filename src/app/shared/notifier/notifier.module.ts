import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {NotifierService} from './notifier.service';

@NgModule({
    imports: [
        MaterialModule
    ],
    providers: [NotifierService],
    declarations: []
})
export class NotifierModule {
}
