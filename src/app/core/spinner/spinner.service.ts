import {Injectable} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {SpinnerComponent} from './spinner.component';

@Injectable()
export class SpinnerService {

    private dialogRef: MdDialogRef<SpinnerComponent>;

    constructor(private mdDialog: MdDialog) {
    }

    show(): void {
        this.openDialog();
    }

    hide(): void {
        this.closeDialog();
    }

    private openDialog(): void {
        this.dialogRef = this.mdDialog.open(SpinnerComponent, {
            height: '200px',
            width: '200px',
            disableClose: true,
        });
    }

    private closeDialog(): void {
        this.dialogRef.close();
    }

}
