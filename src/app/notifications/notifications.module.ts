import {NgModule} from '@angular/core';
import {NotificationsComponent} from './notifications.component';
import {NotificationsService} from './notifications.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    providers: [NotificationsService],
    declarations: [NotificationsComponent],
    exports: [NotificationsComponent]
})
export class NotificationsModule {
}
