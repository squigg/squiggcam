import {NgModule} from '@angular/core';
import {
    MdButtonModule, MdCardModule, MdCheckboxModule, MdDialogModule, MdInputModule, MdListModule, MdProgressSpinnerModule, MdSnackBarModule,
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
    MdInputModule,
];

@NgModule({
    imports: moduleList,
    exports: moduleList,
    declarations: []
})
export class MaterialModule {
}
