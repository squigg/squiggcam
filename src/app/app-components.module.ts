import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {NotificationsModule} from './notifications/notifications.module';

const moduleList: any = [
    CommonModule,
    SharedModule,
    NotificationsModule,
];

const componentList: any = [];

@NgModule({
    imports: moduleList,
    exports: moduleList.concat(componentList),
    declarations: componentList
})
export class AppComponentsModule {
}
