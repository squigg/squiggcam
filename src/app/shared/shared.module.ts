import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material/material.module';
import {ButtonComponent} from './button/button.component';
import {ConfirmComponent} from './dialogs/confirm/confirm.component';
import {SingleInputComponent} from './dialogs/single-input/single-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, MaterialModule],
    exports: [CommonModule, FormsModule, MaterialModule, ButtonComponent],
    entryComponents: [ConfirmComponent, SingleInputComponent],
    declarations: [ButtonComponent, ConfirmComponent, SingleInputComponent],
})
export class SharedModule {

}
