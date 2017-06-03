import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import {ButtonComponent} from './button/button.component';
import {ConfirmComponent} from './dialogs/confirm/confirm.component';

@NgModule({
    imports: [MaterialModule],
    exports: [MaterialModule, ButtonComponent],
    entryComponents: [ConfirmComponent],
    declarations: [ButtonComponent, ConfirmComponent],
})
export class SharedModule {

}
