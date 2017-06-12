import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material/material.module';
import {ButtonComponent} from './button/button.component';
import {ConfirmComponent} from './dialogs/confirm/confirm.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [CommonModule, MaterialModule, ButtonComponent],
    entryComponents: [ConfirmComponent],
    declarations: [ButtonComponent, ConfirmComponent],
})
export class SharedModule {

}
