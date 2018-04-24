import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';

const moduleList = [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
];

@NgModule({
    imports: moduleList,
    exports: moduleList,
    declarations: []
})
export class MaterialModule {
}
