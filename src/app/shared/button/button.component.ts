import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ConfirmComponent} from '../dialogs/confirm/confirm.component';
import {ConfirmOptions} from '../dialogs/confirm/confirm-options.interface';
import * as _ from 'lodash';

const defaultOptions: ConfirmOptions = {
    title: 'Confirm Action',
    message: 'Are you sure?',
    cancelButton: 'Cancel',
    confirmButton: 'OK',
};

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() color: string;
    @Input() confirm: boolean;
    @Input() confirmOptions: ConfirmOptions;

    @Output() onClick = new EventEmitter<null>();

    private dialogRef: MdDialogRef<ConfirmComponent>;

    constructor(private dialog: MdDialog) {
    }

    ngOnInit() {

    }

    click(): void {
        if (this.confirm) {
            this.showConfirmDialog();
        } else {
            this.onClick.emit();
        }
    }

    showConfirmDialog() {
        this.dialogRef = this.dialog.open(ConfirmComponent, {
            data: _.assign(defaultOptions, this.confirmOptions)
        });
        this.dialogRef.afterClosed().subscribe(result => {
            if (result === 'true') {
                this.onClick.emit();
            }
        });
    }

}
