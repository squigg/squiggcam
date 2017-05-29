import {NgModule} from '@angular/core';
import {
    MdButtonModule, MdCardModule, MdCheckboxModule, MdDialogModule, MdListModule, MdProgressSpinnerModule, MdSnackBarModule,
    MdToolbarModule
} from '@angular/material';

const moduleList = [
    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdSnackBarModule,
];

@NgModule({
    imports: moduleList,
    exports: moduleList,
    declarations: []
})
export class MaterialModule {
}
