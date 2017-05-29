import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerModule} from './spinner/spinner.module';
import {MaterialModule} from './material/material.module';
import {NotifierModule} from './notifier/notifier.module';

const moduleList = [
    CommonModule,
    SpinnerModule,
    NotifierModule,
    MaterialModule
];

@NgModule({
    imports: moduleList,
    exports: moduleList,
    declarations: []
})
export class SharedModule {
}
