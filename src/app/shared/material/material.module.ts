import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

const moduleList = [
    MdButtonModule,
    MdCheckboxModule,
];

@NgModule({
    imports: moduleList,
    exports: moduleList,
    declarations: []
})
export class MaterialModule {
}
