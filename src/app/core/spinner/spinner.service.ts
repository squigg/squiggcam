import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {SpinnerComponent} from './spinner.component';

@Injectable()
export class SpinnerService {

    private dialogRef: MatDialogRef<SpinnerComponent, void>;
    private open: boolean;

    constructor(private MatDialog: MatDialog) {
    }

    show(): void {
        if (this.open) return;
        this.open = true;
        // Avoid issues with rendering from onInit
        setTimeout(() => this.openDialog(), 1);
    }

    hide(): void {
        this.open = false;
        // Ensure it is always opened and rendered first
        setTimeout(() => this.closeDialog(), 1);
    }

    private openDialog(): void {
        this.dialogRef = this.MatDialog.open(SpinnerComponent, {
            height: '200px',
            width: '200px',
            disableClose: true,
        });
    }

    private closeDialog(): void {
        this.dialogRef.close();
    }

}
